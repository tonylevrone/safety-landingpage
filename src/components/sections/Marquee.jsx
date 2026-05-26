import { useState } from 'react';

/**
 * Marquee — editorial banner full-bleed.
 * - Mix de DM Sans bold + Fraunces italic (palavras em itálico)
 * - Pause on hover
 * - Asterisco rotacionado como separador
 * - Reverse direction option
 */
export default function Marquee({
  items = ['Controle', 'Clareza', 'Conformidade', 'Confiança'],
  speed = 40,
  reverse = false,
}) {
  const [paused, setPaused] = useState(false);
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section
      style={{
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        padding: '40px 0',
        overflow: 'hidden',
        background: 'var(--bg)',
        position: 'relative',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{
        display: 'flex',
        gap: 64,
        whiteSpace: 'nowrap',
        animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
        animationPlayState: paused ? 'paused' : 'running',
        willChange: 'transform',
      }}>
        {repeated.map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 56,
            lineHeight: 1,
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: i % 2 === 0 ? 'var(--font-sans)' : 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: i % 2 === 0 ? 700 : 600,
              fontStyle: i % 2 === 0 ? 'normal' : 'italic',
              letterSpacing: i % 2 === 0 ? '-0.040em' : '-0.020em',
              color: 'var(--text)',
              fontVariationSettings: i % 2 !== 0 ? '"opsz" 96, "SOFT" 100, "WONK" 1' : 'normal',
            }}>
              {it}
            </span>
            <svg width="24" height="24" viewBox="0 0 22 22" className="asterisk-rotate" aria-hidden="true">
              <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
                <line x1="11" y1="2"  x2="11" y2="20" />
                <line x1="2"  y1="11" x2="20" y2="11" />
                <line x1="4.5" y1="4.5"  x2="17.5" y2="17.5" />
                <line x1="17.5" y1="4.5" x2="4.5" y2="17.5" />
              </g>
            </svg>
          </span>
        ))}
      </div>

      {/* Fade edges */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 80,
        background: 'linear-gradient(90deg, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        right: 0, top: 0, bottom: 0,
        width: 80,
        background: 'linear-gradient(-90deg, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}
