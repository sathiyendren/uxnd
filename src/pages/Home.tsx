import { Link, useNavigate } from 'react-router-dom'
import { home, person, portfolio } from '../config/siteConfig'


export default function Home() {
  const navigate = useNavigate()

  const featured = portfolio.find((p) => p.id === 'cloudwatch-omni')

  const handleFeaturedClick = () => {
    if (!featured) return
    if (featured.passwordProtected) {
      const input = window.prompt(
        'To access the content, kindly provide the password. For password assistance, you can reach out to iammega@gmail.com.',
        ''
      )
      if (input && window.btoa(input) === featured.passwordHash) {
        navigate(`/portfolio/${featured.slug}`)
      } else if (input !== null) {
        alert('Incorrect password. Please try again.')
      }
    } else {
      navigate(`/portfolio/${featured.slug}`)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center bg-gradient-to-br from-white via-pink-light to-burlywood-light">
        <div className="page-container w-full py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="section-label">SR. UX DESIGNER · AMAZON WEB SERVICES</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 leading-tight mb-6">
                {home.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 font-chivo leading-relaxed mb-4">
                {home.subheadline}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                {home.description}
              </p>
              <p className="text-gray-warm italic mb-10">
                {home.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  {home.cta} →
                </Link>
                <a
                  href={person.resumePdf}
                  download="Megalatha_Sankaraiya_UX_Designer_Resume.pdf"
                  className="btn-outline flex items-center gap-2"
                >
                  ↓ Download Resume
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
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
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-white border-t border-gray-line py-12">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Millions', label: 'Users designed for at AWS' },
              { value: '73%', label: 'Target MTTR reduction, CloudWatch Omni' },
              { value: '5 domains', label: 'One design system governing them all' },
              { value: '3', label: 'Continents' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-montserrat font-bold text-burlywood mb-1">{stat.value}</div>
                <div className="text-sm text-gray-warm font-roboto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-gray-light py-16">
        <div className="page-container">
          <div
            onClick={handleFeaturedClick}
            className="card cursor-pointer block p-8 md:p-12 bg-burlywood-light group"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="section-label">FEATURED WORK</p>
              {featured?.passwordProtected && (
                <span className="flex-shrink-0 text-xs bg-pink-soft/40 text-gray-warm px-2 py-1 rounded-full">
                  🔒 Password
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mt-2 mb-1 group-hover:text-burlywood transition-colors">
              CloudWatch Omni — AI-Native Incident Investigation
            </h3>
            <p className="text-sm text-gray-warm font-roboto mb-4">
              Amazon Web Services · 2025–Present
            </p>
            <p className="text-gray-700 leading-relaxed max-w-2xl mb-6">
              Redesigned how millions of engineers diagnose production incidents — targeting 73% faster
              resolution than the industry average.
            </p>
            <span className="text-burlywood font-montserrat font-semibold">
              Read the case study →
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
