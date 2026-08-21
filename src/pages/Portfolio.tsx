import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { GA_TRACKING_ID } from '../config/siteConfig'
import { portfolio } from '../config/siteConfig'

export default function Portfolio() {
  const navigate = useNavigate()

  const featured = portfolio.find((p) => p.id === 'cloudwatch-omni')
  const others = portfolio.filter((p) => p.id !== 'cloudwatch-omni')

  const handleProjectClick = (project: (typeof portfolio)[0]) => {
    // Track project click event
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'Portfolio',
        action: 'click_project',
        label: project.title,
      })
    }

    if (project.passwordProtected) {
      const input = window.prompt(
        'To access the content, kindly provide the password. For password assistance, you can reach out to iammega@gmail.com.',
        ''
      )
      if (input && window.btoa(input) === project.passwordHash) {
        navigate(`/portfolio/${project.slug}`)
      } else if (input !== null) {
        alert('Incorrect password. Please try again.')
      } else {
        // Track password cancel
        if (GA_TRACKING_ID) {
          ReactGA.event({
            category: 'Portfolio',
            action: 'password_cancel',
            label: project.title,
          })
        }
      }
    } else {
      navigate(`/portfolio/${project.slug}`)
    }
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-white to-burlywood-light py-14">
        <div className="page-container text-center max-w-2xl mx-auto">
          <p className="section-label">Work</p>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-gray-warm">
            From AI-native enterprise platforms at AWS to consumer hardware at Philips- selected work across 19 years.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-14 bg-gray-light">
        <div className="page-container">
          {/* Featured full-width card */}
          {featured && (
            <div
              onClick={() => handleProjectClick(featured)}
              className="card cursor-pointer group overflow-hidden bg-gray-900 mb-8"
            >
              <div className="grid md:grid-cols-2">
                {/* Thumbnail */}
                <div className="h-64 md:h-full min-h-[260px] overflow-hidden order-1 md:order-2">
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <p className="text-xs font-montserrat font-semibold tracking-wider text-burlywood uppercase mb-3">
                    Featured Work · AWS · 2025–Present
                  </p>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white leading-snug mb-4 group-hover:text-burlywood transition-colors">
                    CloudWatch Omni — AI-Native Incident Investigation
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Redesigned how millions of AWS engineers diagnose production incidents. Replaced
                    dashboard-hunting with a session-based agentic workspace — targeting 73% faster
                    resolution than the industry average.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    29 usability issues surfaced · 11 critical fixes shipped in 2 weeks · Design system
                    adopted across 5 product domains
                  </p>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="flex items-center text-burlywood text-sm font-montserrat font-medium">
                      Read the case study
                      <svg
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-400">🔒 Password available on request</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {others.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="card cursor-pointer group overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="h-56 bg-gray-pale overflow-hidden flex items-center justify-center">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      project.thumbnailFit === 'contain'
                        ? 'object-contain p-4'
                        : project.thumbnailFit === 'top'
                        ? 'object-cover object-top'
                        : 'object-cover object-center'
                    }`}
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-montserrat font-semibold text-gray-900 text-lg leading-snug group-hover:text-burlywood transition-colors">
                      {project.title}
                    </h2>
                    {project.passwordProtected && (
                      <span className="flex-shrink-0 text-xs bg-pink-soft/40 text-gray-warm px-2 py-1 rounded-full">
                        🔒 Password
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-burlywood font-montserrat font-medium mb-3">{project.period}</p>
                  <p className="text-sm text-gray-warm leading-relaxed mb-4">{project.shortDescription}</p>

                  {/* Role & responsibilities */}
                  <div className="text-xs space-y-1">
                    <p className="font-roboto font-medium text-gray-900">Role: {project.role}</p>
                    <ul className="list-disc pl-4 text-gray-warm space-y-0.5">
                      {project.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-center text-burlywood text-sm font-montserrat font-medium">
                    Read full case study
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
