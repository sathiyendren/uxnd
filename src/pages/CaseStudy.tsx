import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import ReactGA from 'react-ga4'
import { GA_TRACKING_ID, portfolio, type CaseStudySection } from '../config/siteConfig'

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: LightboxImage[]
  index: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(index)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const img = images[current]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-3 py-2"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div className="max-w-5xl max-h-[90vh] px-14 flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt ?? ''}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        {img.caption && (
          <p className="text-white/70 text-sm text-center">{img.caption}</p>
        )}
        {images.length > 1 && (
          <p className="text-white/40 text-xs">{current + 1} / {images.length}</p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-3 py-2"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  )
}

// ─── Section block ────────────────────────────────────────────────────────────

function SectionBlock({
  section,
  onImageClick,
}: {
  section: CaseStudySection
  onImageClick: (images: LightboxImage[], index: number) => void
}) {
  const handleImageClick = (images: LightboxImage[], index: number) => {
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'CaseStudy',
        action: 'open_section_image',
        label: section.title || 'Section Image',
      })
    }
    onImageClick(images, index)
  }
  switch (section.type) {
    case 'challenge':
      return (
        <div className="my-8 bg-burlywood rounded-2xl p-8 text-white">
          <p className="text-xs font-montserrat font-semibold uppercase tracking-widest mb-3 opacity-80">
            {section.title}
          </p>
          <p className="text-lg md:text-xl font-montserrat font-semibold leading-snug">
            {section.highlight}
          </p>
        </div>
      )

    case 'heading':
      return (
        <div className="my-8">
          <p className="section-label">{section.title}</p>
          {section.content && (
            <p
              className="text-gray-700 leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          )}
        </div>
      )

    case 'text':
      return (
        <div className="my-8">
          {section.title && <p className="section-label">{section.title}</p>}
          {section.content && (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          )}
        </div>
      )

    case 'bullets':
      return (
        <div className="my-8">
          {section.title && <p className="section-label">{section.title}</p>}
          <ul className="space-y-3">
            {section.items?.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="timeline-dot" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      )

    case 'images':
      return (
        <div className="my-8">
          {section.title && <p className="section-label">{section.title}</p>}
          <div
            className={`grid gap-4 ${
              (section.images?.length ?? 0) === 1
                ? 'grid-cols-1'
                : (section.images?.length ?? 0) === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}
          >
            {section.images?.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-gray-pale border border-gray-line cursor-zoom-in group"
                onClick={() => handleImageClick(section.images as LightboxImage[], i)}
              >
                <img
                  src={img.src}
                  alt={img.alt ?? ''}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.opacity = '0.3'
                  }}
                />
                {img.caption && (
                  <p className="text-xs text-gray-warm text-center py-2 px-3">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = portfolio.find((p) => p.slug === slug)

  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)

  const handleImageClick = (images: LightboxImage[], index: number) => {
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'CaseStudy',
        action: 'open_lightbox',
        label: project?.title || 'Unknown',
      })
    }
    setLightbox({ images, index })
  }

  const handleProjectNav = (direction: 'prev' | 'next', targetProject: string) => {
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'CaseStudy',
        action: `navigate_${direction}`,
        label: targetProject,
      })
    }
  }

  if (!project) {
    return (
      <div className="page-container py-24 text-center">
        <h1 className="section-title mb-4">Project not found</h1>
        <Link to="/portfolio" className="btn-primary">
          Back to Portfolio
        </Link>
      </div>
    )
  }

  const next = project.nextProject ? portfolio.find((p) => p.slug === project.nextProject) : null
  const prev = project.prevProject ? portfolio.find((p) => p.slug === project.prevProject) : null

  return (
    <main>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-burlywood-light py-12">
        <div className="page-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-warm mb-8">
            <Link to="/portfolio" className="hover:text-burlywood transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-gray-900">{project.title}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">{project.period}</p>
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

              {/* Role + responsibilities */}
              <div className="bg-white rounded-xl p-5 border border-gray-line">
                <p className="text-xs font-montserrat font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Role
                </p>
                <p className="font-roboto font-medium text-gray-900 mb-3">{project.role}</p>
                <ul className="space-y-1">
                  {project.responsibilities.map((r, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-burlywood">·</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Thumbnail */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-pale cursor-zoom-in"
              onClick={() => handleImageClick([{ src: project.thumbnail, alt: project.title }], 0)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.opacity = '0.3'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case study sections */}
      <section className="py-10 bg-white">
        <div className="page-container max-w-3xl mx-auto">
          {project.sections.map((section, i) => (
            <SectionBlock
              key={i}
              section={section}
              onImageClick={(images, index) => setLightbox({ images, index })}
            />
          ))}
        </div>
      </section>

      {/* Project navigation */}
      <section className="border-t border-gray-line py-10 bg-gray-light">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-4">
          {prev ? (
            <button
              onClick={() => {
                handleProjectNav('prev', prev.title)
                navigate(`/portfolio/${prev.slug}`)
              }}
              className="flex items-center gap-2 text-sm font-montserrat text-gray-warm hover:text-burlywood transition-colors"
            >
              ← {prev.title}
            </button>
          ) : (
            <div />
          )}
          <Link to="/portfolio" className="btn-outline text-xs">
            All Projects
          </Link>
          {next ? (
            <button
              onClick={() => {
                handleProjectNav('next', next.title)
                navigate(`/portfolio/${next.slug}`)
              }}
              className="flex items-center gap-2 text-sm font-montserrat text-gray-warm hover:text-burlywood transition-colors"
            >
              View next: {next.title} →
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  )
}
