import { Link } from 'react-router-dom'
import { home, person } from '../config/siteConfig'


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center bg-gradient-to-br from-white via-pink-light to-burlywood-light">
        <div className="page-container w-full py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="section-label">Welcome</p>
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
                <Link to="/portfolio" className="btn-outline">
                  View Portfolio
                </Link>
                <Link to="/resume" className="btn-outline flex items-center gap-2">
                  ↓ Download Resume
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-burlywood-light to-pink-soft/30 absolute -inset-4" />
                <img
                  src={person.photo}
                  alt={person.name}
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
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
              { value: '16+', label: 'Years of Experience' },
              { value: '10+', label: 'Companies Served' },
              { value: '6+', label: 'Industries' },
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

      {/* Nav cards */}
      <section className="bg-gray-light py-16">
        <div className="page-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'About Me',
                desc: 'Discover my background, philosophy, and what drives me as a UX leader.',
                path: '/about',
                icon: '👤',
              },
              {
                title: 'My Skill Set',
                desc: 'Explore the full range of my design, research, and leadership capabilities.',
                path: '/skills',
                icon: '⚡',
              },
              {
                title: 'Portfolio',
                desc: 'Case studies showcasing UX challenges I\'ve solved across industries.',
                path: '/portfolio',
                icon: '🎨',
              },
            ].map((card) => (
              <Link key={card.path} to={card.path} className="card p-6 group">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2 group-hover:text-burlywood transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-warm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
