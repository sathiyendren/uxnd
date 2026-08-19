import { Link } from 'react-router-dom'
import { about, person } from '../config/siteConfig'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-burlywood-light py-16">
        <div className="page-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">About Me</p>
            <h1 className="section-title text-4xl md:text-5xl mb-6">
              I design for how people actually behave - not how we assume they will.
            </h1>
            <div className="prose-custom space-y-4">
              {about.bio.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} className="text-gray-700 leading-relaxed" />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-burlywood-light to-pink-soft/30 absolute -inset-4" />
              <img
                src={person.photo}
                alt={person.name}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover object-[center_31%] rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience areas */}
      <section className="py-14 bg-white border-t border-gray-line">
        <div className="page-container">
          <p className="section-label text-center">MY EXPERIENCE</p>
          <h2 className="section-title text-center mb-10">Work that ships at scale</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {about.experienceAreas.map((area) => (
              <div
                key={area.label}
                className="flex flex-col items-center gap-2 bg-burlywood-light rounded-2xl px-8 py-6 min-w-[140px]"
              >
                <span className="text-3xl font-montserrat font-bold text-burlywood">{area.value}</span>
                <span className="text-sm text-gray-warm text-center">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 bg-gray-light">
        <div className="page-container max-w-3xl mx-auto">
          <p className="section-label text-center">LEADERSHIP</p>
          <h2 className="section-title text-center mb-10">{about.leadershipTitle}</h2>
          <div className="space-y-5">
            {about.leadership.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="page-container">
          <p className="section-label text-center">COLLEAGUES</p>
          <h2 className="section-title text-center mb-3">{about.testimonialsSectionTitle}</h2>
          <p className="text-center text-gray-warm max-w-xl mx-auto mb-10">{about.testimonialsIntro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {about.testimonials.map((t) => (
              <div key={t.name} className="card p-6 flex flex-col gap-4">
                {/* Quote first */}
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                {/* Author row */}
                {t.linkedinUrl ? (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 pt-2 border-t border-gray-line group/author"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0 relative"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.photo
                        ? <img src={t.photo} alt={t.name} className="w-full h-full object-cover rounded-full" />
                        : t.initials}
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0077B5] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-gray-900 text-sm group-hover/author:text-[#0077B5] transition-colors">{t.name}</div>
                      <div className="text-xs text-burlywood font-roboto">{t.title}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-line">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0 relative"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.photo
                        ? <img src={t.photo} alt={t.name} className="w-full h-full object-cover rounded-full" />
                        : t.initials}
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0077B5] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-burlywood font-roboto">{t.title}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-warm">
            Additional testimonials on{' '}
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-burlywood hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-14 bg-burlywood-light">
        <div className="page-container max-w-3xl mx-auto space-y-5">
          {about.closingParagraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
          <div className="pt-4">
            <Link to="/skills" className="btn-primary">
              See the range of skill set I possess →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
