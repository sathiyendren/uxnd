import { useState } from 'react'
import { Link } from 'react-router-dom'
import { skills } from '../config/siteConfig'

// ─── Radar / Spider chart ─────────────────────────────────────────────────────

function RadarChart() {
  const { radar } = skills
  const cx = 230
  const cy = 210
  const maxR = 145
  const rings = [0.25, 0.5, 0.75, 1.0]

  // 6 axes starting from top (-90°), spaced 60° apart
  const angles = radar.map((_, i) => (Math.PI * (-0.5 + (i * 2) / 6)))

  function pt(angle: number, r: number) {
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  }

  function ringPath(fraction: number) {
    const pts = angles.map((a) => pt(a, maxR * fraction))
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'
  }

  const dataPath = radar
    .map((d, i) => {
      const p = pt(angles[i], d.value * maxR)
      return `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`
    })
    .join(' ') + ' Z'

  // Label offset: beyond the max ring, with per-axis tuning
  function labelPos(angle: number) {
    const r = maxR + 30
    return pt(angle, r)
  }

  return (
    <svg viewBox="0 0 460 420" className="w-full max-w-sm mx-auto" aria-label="Skill strength radar chart">
      {/* Background rings */}
      {rings.map((f) => (
        <path key={f} d={ringPath(f)} fill="none" stroke="#E2E2E2" strokeWidth="1" />
      ))}

      {/* Axis lines */}
      {angles.map((a, i) => {
        const end = pt(a, maxR)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={end.x.toFixed(1)}
            y2={end.y.toFixed(1)}
            stroke="#E2E2E2"
            strokeWidth="1"
          />
        )
      })}

      {/* Data polygon */}
      <path d={dataPath} fill="rgba(219,164,107,0.22)" stroke="#DBA46B" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Data dots */}
      {radar.map((d, i) => {
        const p = pt(angles[i], d.value * maxR)
        return (
          <circle key={i} cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="5" fill="#DBA46B" stroke="white" strokeWidth="2" />
        )
      })}

      {/* Ring % labels on the rightmost axis (i=1) */}
      {rings.map((f) => {
        const p = pt(angles[1], maxR * f)
        return (
          <text
            key={f}
            x={(p.x + 5).toFixed(1)}
            y={(p.y + 3).toFixed(1)}
            fontSize="9"
            fill="#9CA3AF"
            fontFamily="Montserrat, sans-serif"
          >
            {Math.round(f * 100)}%
          </text>
        )
      })}

      {/* Axis labels */}
      {radar.map((d, i) => {
        const lp = labelPos(angles[i])
        const anchor =
          lp.x < cx - 10 ? 'end' : lp.x > cx + 10 ? 'start' : 'middle'
        return (
          <text
            key={i}
            x={lp.x.toFixed(1)}
            y={lp.y.toFixed(1)}
            fontSize="11"
            fill="#374151"
            textAnchor={anchor}
            dominantBaseline="middle"
            fontFamily="Montserrat, sans-serif"
            fontWeight="600"
          >
            {d.shortLabel}
          </text>
        )
      })}
    </svg>
  )
}

// ─── Design Ops accordion item ────────────────────────────────────────────────

function AccordionItem({
  area,
  index,
  open,
  onToggle,
}: {
  area: { title: string; body: string }
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-line last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="w-7 h-7 rounded-full bg-burlywood-light text-burlywood font-montserrat font-bold text-xs flex items-center justify-center flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-montserrat font-semibold text-gray-900 text-sm group-hover:text-burlywood transition-colors">
            {area.title}
          </span>
        </div>
        <span
          className={`text-burlywood text-lg transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-4 pl-11 text-sm text-gray-warm leading-relaxed">{area.body}</p>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Skills() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggle = (i: number) => setOpenAccordion(openAccordion === i ? null : i)

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-burlywood-light/40 to-pink-light py-14 md:py-20">
        <div className="page-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Capabilities</p>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4 leading-tight">
              My Skill Set
            </h1>
            <p className="text-gray-warm leading-relaxed mb-6">
              Built across cloud infrastructure, enterprise logistics, connected hardware, and retail- currently at Amazon Web Services designing for millions of engineers.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.radar.map((r) => (
                <div key={r.label} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-burlywood" />
                  <span className="text-xs text-gray-warm font-roboto">{r.label}</span>
                </div>
              ))}
            </div>
            <Link to="/portfolio" className="btn-primary">
              See skills in action →
            </Link>
          </div>

          {/* Radar chart */}
          <div className="flex flex-col items-center">
            <RadarChart />
            <p className="text-xs text-gray-400 text-center mt-2 font-roboto">
              Self-assessed relative proficiency across 6 domains
            </p>
          </div>
        </div>
      </section>

      {/* ── Skill category cards ──────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="page-container">
          <div className="text-center mb-10">
            <p className="section-label">DOMAINS</p>
            <h2 className="section-title">Core Competencies</h2>
          </div>

          <div className="max-w-5xl mx-auto divide-y divide-gray-line border-t border-b border-gray-line">
            {skills.categories.map((cat) => (
              <div
                key={cat.name}
                className="grid md:grid-cols-[minmax(0,1fr)_1.7fr] gap-5 md:gap-10 py-8 group"
              >
                {/* Left: identity */}
                <div className="flex gap-4">
                  <span className="w-11 h-11 rounded-xl bg-burlywood-light text-burlywood text-xl font-copse flex items-center justify-center flex-shrink-0 leading-none select-none group-hover:bg-burlywood group-hover:text-white transition-colors">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-900 text-lg leading-tight mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-warm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Right: skills */}
                <div className="flex flex-wrap content-start gap-2 md:pt-1">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg bg-gray-pale text-gray-700 border border-gray-line font-roboto"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Ops accordion ──────────────────────────── */}
      <section className="py-14 bg-gray-light">
        <div className="page-container">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
            {/* Left: intro */}
            <div className="md:sticky md:top-24">
              <p className="section-label">PHILOSOPHY</p>
              <h2 className="section-title mb-5">{skills.designOps.title}</h2>
              {skills.designOps.intro.map((para, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              {skills.designOps.closing && (
                <p className="text-sm text-gray-700 leading-relaxed mt-2 italic border-l-2 border-burlywood pl-4">
                  {skills.designOps.closing}
                </p>
              )}
            </div>

            {/* Right: accordion */}
            <div className="bg-white rounded-2xl px-6 py-2 shadow-sm border border-gray-line">
              {skills.designOps.areas.map((area, i) => (
                <AccordionItem
                  key={i}
                  area={area}
                  index={i}
                  open={openAccordion === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-line">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-semibold text-gray-900 mb-1">Want to see the work?</p>
            <p className="text-sm text-gray-warm">The CloudWatch Omni case study covers the full arc - research, IA redesign, agentic UX, and design systems.</p>
          </div>
          <Link to="/portfolio" className="btn-primary flex-shrink-0">
            Read the case study →
          </Link>
        </div>
      </section>
    </main>
  )
}
