import { ArrowUpRight } from 'lucide-react';
import Asterisk from '../ui/Asterisk';

/**
 * CaseStudies — apresentação editorial das features como "cases",
 * estilo agency portfolio. Cada card tem:
 *  - thumbnail abstrato (gradient/composição)
 *  - tag editorial em italic
 *  - título do case
 *  - hover → cresce ligeiramente + accent
 */

const CASES = [
  {
    num: '01',
    tag: 'Inventory · 218 items',
    title: 'Saber, em tempo real, o que existe e onde está.',
    visual: 'grid', // tipo do visual
  },
  {
    num: '02',
    tag: 'Maintenance · Predictive',
    title: 'A manutenção que se antecipa ao incidente.',
    visual: 'timeline',
  },
  {
    num: '03',
    tag: 'Alerts · 24/7',
    title: 'O alerta certo, no canal certo, antes do problema.',
    visual: 'pulse',
  },
  {
    num: '04',
    tag: 'Audit · Compliance',
    title: 'Trilha auditável pronta para qualquer auditoria.',
    visual: 'lines',
  },
  {
    num: '05',
    tag: 'Mobile · Field-first',
    title: 'O técnico em campo, conectado em tempo real.',
    visual: 'phone',
  },
];

function Visual({ kind }) {
  // Composições visuais abstratas — em vez de mockups literais, abstração editorial
  const base = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
  };

  if (kind === 'grid') {
    return (
      <div style={{ ...base }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 70% 30%, #000 30%, transparent 80%)',
        }} />
        <div style={{
          position: 'absolute', top: '38%', left: '14%',
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--accent)', letterSpacing: '0.1em',
        }}>
          EQ-2147 · OK
        </div>
        <div style={{
          position: 'absolute', top: '56%', left: '14%',
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--text-muted)', letterSpacing: '0.1em',
        }}>
          EQ-2148 · 72%
        </div>
        <div style={{
          position: 'absolute', top: '74%', left: '14%',
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--text-faint)', letterSpacing: '0.1em',
        }}>
          EQ-2149 · 100%
        </div>
      </div>
    );
  }

  if (kind === 'timeline') {
    return (
      <div style={{ ...base }}>
        <svg viewBox="0 0 400 240" width="100%" height="100%" preserveAspectRatio="none">
          <path
            d="M 0 180 Q 100 180 150 130 Q 200 80 280 100 Q 340 110 400 60"
            fill="none" stroke="rgba(255, 106, 61, 0.55)" strokeWidth="1.5"
          />
          <path
            d="M 0 200 Q 100 200 150 170 Q 200 140 280 150 Q 340 155 400 130"
            fill="none" stroke="rgba(255, 255, 255, 0.20)" strokeWidth="1.2" strokeDasharray="3 5"
          />
          {[80, 150, 230, 310].map((x, i) => (
            <circle key={i} cx={x} cy={130 + i * 10} r="3.5" fill="var(--accent)" />
          ))}
        </svg>
      </div>
    );
  }

  if (kind === 'pulse') {
    return (
      <div style={{ ...base, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {[1, 0.7, 0.4].map((scale, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 140, height: 140,
            borderRadius: '50%',
            border: '1px solid rgba(255, 106, 61, 0.40)',
            transform: `scale(${scale + i * 0.6})`,
            opacity: 0.5 / (i + 1),
          }} />
        ))}
        <div style={{
          width: 18, height: 18, borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 24px var(--accent-glow)',
        }} />
      </div>
    );
  }

  if (kind === 'lines') {
    return (
      <div style={{ ...base, padding: 22 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{
            height: 8,
            margin: '10px 0',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: 4,
            width: `${50 + (i * 7) % 50}%`,
          }} />
        ))}
        <div style={{
          position: 'absolute', top: 18, right: 22,
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'var(--accent)', letterSpacing: '0.1em',
        }}>
          NR-23 ✓
        </div>
      </div>
    );
  }

  if (kind === 'phone') {
    return (
      <div style={{ ...base, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 110, height: 200,
          borderRadius: 18,
          background: 'linear-gradient(180deg, #2A2A2A, #1A1A1A)',
          border: '1px solid var(--hairline-strong)',
          padding: 6,
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
          transform: 'rotate(-8deg)',
        }}>
          <div style={{
            width: '100%', height: '100%',
            borderRadius: 14,
            background: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: 14,
              fontFamily: 'var(--font-display)',
              fontSize: 11, fontWeight: 700, color: '#0A0A0A',
              letterSpacing: '-0.025em',
            }}>
              Equipe em campo
            </div>
            <div style={{
              margin: '0 10px', padding: '6px 8px',
              borderRadius: 6,
              background: 'rgba(255, 106, 61, 0.15)',
              color: '#E84F1F', fontSize: 8.5, fontWeight: 600,
            }}>
              EQ-2150 · em curso
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function CaseRow({ caseItem, i }) {
  return (
    <a
      href="#contact"
      data-reveal
      data-reveal-delay={String((i % 5) + 1)}
      className="case-row"
      style={{
        display: 'block',
        padding: '36px 0',
        borderTop: '1px solid var(--hairline)',
        transition: 'background 0.35s ease',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '60px 1.4fr 1fr 32px',
        gap: 32,
        alignItems: 'center',
      }}>
        <span className="section-num">{caseItem.num}</span>

        <div>
          <div className="italic-tag" style={{
            fontSize: 14,
            color: 'var(--accent)',
            marginBottom: 8,
          }}>
            ✱ {caseItem.tag}
          </div>
          <div className="display-3" style={{
            color: 'var(--text)',
            fontWeight: 600,
          }}>
            {caseItem.title}
          </div>
        </div>

        {/* Visual abstrato */}
        <div className="case-visual" style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '5 / 3',
          maxWidth: 280,
          marginLeft: 'auto',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid var(--hairline)',
        }}>
          <Visual kind={caseItem.visual} />
        </div>

        <div className="case-arrow" style={{
          display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          width: 32, height: 32,
          borderRadius: '50%',
          color: 'var(--text-muted)',
          transition: 'color 0.18s ease, transform 0.18s ease',
        }}>
          <ArrowUpRight size={18} strokeWidth={1.6} />
        </div>
      </div>
    </a>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="section">
      <div className="container">
        {/* Header */}
        <div data-reveal className="asterisk-line" style={{ marginBottom: 14 }}>
          <Asterisk size={22} />
          <span className="italic-tag" style={{ fontSize: 18, color: 'var(--text-soft)' }}>
            Cases & Capabilities
          </span>
        </div>
        <div data-reveal data-reveal-delay="1" style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
          marginBottom: 56,
        }}>
          <h2 className="display-1" style={{ maxWidth: 800 }}>
            Cinco capítulos
            <br />
            <span style={{ color: 'var(--text-muted)' }}>de uma plataforma só.</span>
          </h2>
          <span className="section-num">01 — 05</span>
        </div>

        {/* Cases */}
        <div>
          {CASES.map((c, i) => (
            <CaseRow key={c.num} caseItem={c} i={i} />
          ))}
          <hr className="divider" />
        </div>
      </div>

      <style>{`
        .case-row:hover {
          background: rgba(255, 255, 255, 0.015);
        }
        .case-row:hover .case-arrow {
          color: var(--accent);
          transform: translate(4px, -4px);
        }
        @media (max-width: 768px) {
          .case-row > div {
            grid-template-columns: 40px 1fr !important;
          }
          .case-visual { display: none !important; }
          .case-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
