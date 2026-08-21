import ReactGA from 'react-ga4'
import { GA_TRACKING_ID, contactPage, person } from '../config/siteConfig'

export default function Resume() {
  const handleResumeDownload = () => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-HLRKB358F1') {
      ReactGA.event({
        category: 'Resume',
        action: 'download_resume',
        label: 'Megalatha_Sankaraiya_UX_Designer_Resume.pdf',
      })
    }
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Download button — hidden when printing */}
      <div className="print:hidden flex items-center justify-between px-8 py-4 border-b border-gray-line bg-gray-light">
        <p className="text-sm text-gray-warm">
          Click the button to download the latest resume PDF.
        </p>
        <a
          href={person.resumePdf}
          download="Megalatha_Sankaraiya_UX_Designer_Resume.pdf"
          onClick={handleResumeDownload}
          className="btn-primary text-sm ml-6 whitespace-nowrap flex-shrink-0"
        >
          ↓ Print / Save as PDF
        </a>
      </div>

      {/* Resume body */}
      <div className="max-w-[780px] mx-auto px-8 py-10 print:px-6 print:py-6 font-roboto text-gray-900">

        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-montserrat font-bold tracking-wide">{person.name}</h1>
          <p className="text-lg font-medium text-burlywood mt-1">{person.title}</p>
          <p className="text-sm text-gray-600 mt-1">
            19+ years Experience · AI-Native Product Design · Design Systems · Enterprise UX
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
            <span>{person.location}</span>
            <span>•</span>
            <a href={`mailto:${person.email}`} className="hover:underline">{person.email}</a>
            <span>•</span>
            <span>{person.phone}</span>
            <span>•</span>
            <a href={person.linkedin} className="hover:underline">LinkedIn</a>
            <span>•</span>
            <a href={`https://${person.website}`} target="_blank" rel="noreferrer" className="hover:underline text-blue-600 underline">{person.website}</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="section-heading">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            User Experience Designer with 19+ years of experience leading interaction design, design systems, and design operations for enterprise-scale digital products. Currently at Amazon Web Services designing AI-native Observability and Security experiences for millions of enterprise customers. Track record of running structured usability research, building design systems adopted across multiple product domains, and driving measurable outcomes, from research insight to engineering handoff. Experienced in WCAG accessibility, cross-functional leadership, and AI-native product design and strategies. Currently use Kiro IDE to create production-grade prototypes from day one, no static mockup lag.
          </p>
        </section>

        {/* Skills & Tools */}
        <section className="mb-5">
          <h2 className="section-heading">Skills &amp; Tools</h2>
          <div className="space-y-2 mt-2">
            {contactPage.skills.map((s, i) => (
              <div key={i} className="text-sm text-gray-700">
                <span className="font-semibold">{s.label}:</span>{' '}
                <span className="text-gray-600">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="section-heading">Professional Experience</h2>
          <div className="space-y-5 mt-2">
            {contactPage.experience.map((job, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-semibold text-sm">{job.role}</span>
                    <span className="text-gray-500 text-sm"> — {job.company}</span>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1">
                  {job.responsibilities.map((r, j) => (
                    <li
                      key={j}
                      className="text-xs text-gray-700 leading-relaxed flex gap-2"
                      dangerouslySetInnerHTML={{ __html: `<span class="text-gray-400 mt-0.5">▸</span><span>${r}</span>` }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-5">
          <h2 className="section-heading">Certifications</h2>
          <ul className="mt-1 space-y-1">
            {contactPage.certifications.map((cert, i) => (
              <li key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-burlywood">✓</span>
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="section-heading">Education</h2>
          <ul className="mt-1 space-y-1">
            {contactPage.education.map((edu, i) => (
              <li key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-burlywood">✓</span>
                {edu.degree}{edu.status ? ` (${edu.status})` : ''}
              </li>
            ))}
          </ul>
        </section>

        {/* Industries */}
        <section className="mb-2">
          <h2 className="section-heading">Industries</h2>
          <p className="text-sm text-gray-700 mt-1">
            Cloud / Observability · Security · Enterprise SaaS · Retail · Logistics · IoT / Smart Lighting · Travel &amp; Tourism · Hardware Manufacturing · B2B · Consumer
          </p>
        </section>
      </div>

      <style>{`
        @media print {
          @page { margin: 0.6in; size: A4; }
          body { -webkit-print-color-adjust: exact; }
        }
        .section-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8B7355;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 3px;
          margin-bottom: 6px;
        }
      `}</style>
    </main>
  )
}
