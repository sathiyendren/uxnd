import ReactGA from 'react-ga4'
import { GA_TRACKING_ID, contactPage, person } from '../config/siteConfig'

export default function Contact() {
  const handleEmailClick = () => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.event({
        category: 'Contact',
        action: 'click_email',
        label: person.email,
      })
    }
  }

  const handleLinkedInClick = () => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.event({
        category: 'Contact',
        action: 'click_linkedin',
        label: 'LinkedIn Profile',
      })
    }
  }

  const handleResumeDownload = () => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.event({
        category: 'Contact',
        action: 'download_resume',
        label: 'Megalatha_Sankaraiya_UX_Designer_Resume.pdf',
      })
    }
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-white to-burlywood-light py-14">
        <div className="page-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label">Get in touch</p>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              {person.shortName}
            </h1>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${person.email}`}
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-700 hover:text-burlywood transition-colors"
              >
                <span className="text-burlywood">✉</span> {person.email}
              </a>
              <p className="flex items-center gap-3 text-gray-700">
                <span className="text-burlywood">📞</span> {person.phone}
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <span className="text-burlywood">🌐</span> {person.website}
              </p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkedInClick}
                className="flex items-center gap-3 text-gray-700 hover:text-burlywood transition-colors"
              >
                <span className="text-burlywood">in</span> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Resume download */}
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">📄</div>
            <h2 className="font-montserrat font-semibold text-gray-900 mb-2">Download Resume</h2>
            <p className="text-sm text-gray-warm mb-6">File size: 123 KB</p>
            <a
              href={person.resumePdf}
              download="Megalatha_Sankaraiya_UX_Designer_Resume.pdf"
              onClick={handleResumeDownload}
              className="btn-primary"
            >
              Download as PDF
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-14 bg-white">
        <div className="page-container">
          <p className="section-label">EXPERIENCE</p>
          <h2 className="section-title mb-10">Work History</h2>
          <div className="space-y-10">
            {contactPage.experience.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[250px_1fr] gap-6 pb-10 border-b border-gray-line last:border-0">
                <div>
                  <h3 className="font-montserrat font-semibold text-gray-900">{exp.company}</h3>
                  <p className="text-burlywood text-sm font-roboto mt-1">{exp.role}</p>
                  <p className="text-xs text-gray-warm mt-1">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, ri) => (
                    <li
                      key={ri}
                      className="flex gap-3 text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: `<span class="text-burlywood flex-shrink-0">·</span> ${r}` }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills summary */}
      <section className="py-14 bg-gray-light">
        <div className="page-container">
          <p className="section-label">SKILLS</p>
          <h2 className="section-title mb-8">Competencies</h2>
          <div className="space-y-4">
            {contactPage.skills.map((s, i) => (
              <div key={i} className="card p-5">
                <span className="font-montserrat font-semibold text-gray-900 text-sm">{s.label}: </span>
                <span className="text-sm text-gray-warm">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-14 bg-white">
        <div className="page-container grid md:grid-cols-2 gap-10">
          <div>
            <p className="section-label">EDUCATION</p>
            <h2 className="section-title mb-6">Academic Background</h2>
            <div className="space-y-4">
              {contactPage.education.map((edu, i) => (
                <div key={i} className="flex gap-3">
                  <span className="timeline-dot" />
                  <div>
                    <p className="font-roboto text-gray-900 text-sm">{edu.degree}</p>
                    {edu.status && <p className="text-xs text-burlywood">{edu.status}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">CERTIFICATION</p>
            <h2 className="section-title mb-6">Certifications</h2>
            <div className="space-y-4">
              {contactPage.certifications.map((cert, i) => (
                <div key={i} className="flex gap-3">
                  <span className="timeline-dot" />
                  <p className="text-sm text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
