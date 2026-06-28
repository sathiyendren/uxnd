import { contactPage, person, skills } from '../config/siteConfig'

export default function Resume() {
  const allSkills = skills.categories.flatMap((c) => c.items)

  return (
    <main className="bg-white min-h-screen">
      {/* Print button — hidden when printing */}
      <div className="print:hidden flex items-center justify-between px-8 py-4 border-b border-gray-line bg-gray-light">
        <p className="text-sm text-gray-warm">
          To save as PDF: click the button → in the print dialog, set <strong>Destination</strong> to <strong>"Save as PDF"</strong> → click Save.
        </p>
        <button
          onClick={() => window.print()}
          className="btn-primary text-sm ml-6 whitespace-nowrap flex-shrink-0"
        >
          ↓ Print / Save as PDF
        </button>
      </div>

      {/* Resume body */}
      <div className="max-w-[780px] mx-auto px-8 py-10 print:px-6 print:py-6 font-roboto text-gray-900">

        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-montserrat font-bold tracking-wide">{person.name}</h1>
          <p className="text-lg font-medium text-burlywood mt-1">{person.title} | UX Designer &amp; Design Leader</p>
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
            Senior UX Manager and Interaction Designer with 16+ years of experience delivering user-centered design solutions across Retail, Enterprise, B2B, Consumer, Airline, and IoT domains. Proven track record in UX Strategy, Design Leadership, Design Operations (DesignOps), Design Systems, and cross-functional stakeholder management. Expert in end-to-end UX Design — from User Research and Usability Testing to high-fidelity Interaction Design and handoff. SAFe PM/PO certified. Experienced managing globally distributed design teams.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-5">
          <h2 className="section-heading">Core Competencies</h2>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {allSkills.map((skill, i) => (
              <span
                key={i}
                className="text-xs border border-gray-300 rounded px-2 py-0.5 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-5">
          <h2 className="section-heading">Tools &amp; Technologies</h2>
          <p className="text-sm text-gray-700">
            Figma, Sketch, InVision, Adobe XD, Adobe Photoshop, Miro, HotJar, Google Analytics, JIRA, Confluence, Trello, HTML, CSS, JavaScript, jQuery, AutoCAD
          </p>
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
            Retail · Fashion · Airline · Airport Management · Travel &amp; Tourism · IoT / Smart Lighting · Hardware Manufacturing · Enterprise SaaS · Supply Chain Visibility · B2B
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
