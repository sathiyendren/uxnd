import ReactGA from 'react-ga4'
import { GA_TRACKING_ID, person } from '../config/siteConfig'

export default function Footer() {
  const handleEmailClick = () => {
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'Footer',
        action: 'click_email',
        label: person.email,
      })
    }
  }

  const handleLinkedInClick = () => {
    if (GA_TRACKING_ID) {
      ReactGA.event({
        category: 'Footer',
        action: 'click_linkedin',
        label: 'LinkedIn',
      })
    }
  }

  return (
    <footer className="border-t border-gray-line bg-white py-8 mt-auto">
      <div className="page-container flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={person.logo} alt={person.shortName} className="h-8 w-auto object-contain" />
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-warm">
          <a
            href={`mailto:${person.email}`}
            onClick={handleEmailClick}
            className="hover:text-burlywood transition-colors"
          >
            {person.email}
          </a>
          <span className="hidden md:inline">·</span>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkedInClick}
            className="hover:text-burlywood transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden md:inline">·</span>
          <span>{person.website}</span>
        </div>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {person.shortName}</p>
      </div>
    </footer>
  )
}
