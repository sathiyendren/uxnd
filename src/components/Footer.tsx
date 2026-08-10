import { person } from '../config/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-gray-line bg-white py-8 mt-auto">
      <div className="page-container flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={person.logo} alt={person.shortName} className="h-8 w-auto object-contain" />
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-warm">
          <a href={`mailto:${person.email}`} className="hover:text-burlywood transition-colors">
            {person.email}
          </a>
          <span className="hidden md:inline">·</span>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="hover:text-burlywood transition-colors">
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
