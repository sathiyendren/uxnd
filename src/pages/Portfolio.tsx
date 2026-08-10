import { useNavigate } from 'react-router-dom'
import { portfolio } from '../config/siteConfig'

export default function Portfolio() {
  const navigate = useNavigate()

  const handleProjectClick = (project: (typeof portfolio)[0]) => {
    if (project.passwordProtected) {
      const input = window.prompt(
        'To access the content, kindly provide the password. For password assistance, you can reach out to iammega@gmail.com.',
        ''
      )
      if (input && window.btoa(input) === project.passwordHash) {
        navigate(`/portfolio/${project.slug}`)
      } else if (input !== null) {
        alert('Incorrect password. Please try again.')
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
            A selection of UX case studies spanning retail, lighting, travel, and enterprise products.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-14 bg-gray-light">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project) => (
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
