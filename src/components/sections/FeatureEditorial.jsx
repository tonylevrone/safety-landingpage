import Asterisk from '../ui/Asterisk';
import BrowserFrame from '../ui/BrowserFrame';

/**
 * FeatureEditorial v3.1 — bloco padrão pra feature pages:
 *  - rail editorial à esquerda com range
 *  - asterisco rotacionado + italic tag
 *  - title display mixed (sans + serif italic dentro)
 *  - mockup grande embaixo com glow + slight rotation
 *  - bullets numerados em column lateral
 */
export default function FeatureEditorial({
  id,
  range,                // '02 — 05'
  tag,                  // 'Inventory · 218 items'
  title,                // string ou JSX
  lead,
  bullets = [],
  mockup,
  url = 'app.safetyz.io',
  flip = false,         // alternate rotation direction for visual rhythm
}) {
  return (
    <section id={id} className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="editorial-grid">
          {/* Rail vertical */}
          <div className="show-lg" style={{ paddingTop: 6, position: 'relative' }}>
            <div className="mono" style={{
              fontSize: 10.5,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 8,
            }}>
              {range}
            </div>
            {/* Linha vertical decorativa */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              left: 4,
              top: 36,
              width: 1,
              height: 'calc(100% - 36px)',
              background: 'linear-gradient(180deg, var(--hairline-strong), transparent)',
            }} />
          </div>

          {/* Main */}
          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 18 }}>
              <Asterisk size={22} />
              <span className="italic-tag" style={{ fontSize: 19, color: 'var(--text-soft)' }}>
                {tag}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 36,
              alignItems: 'flex-start',
            }}>
              <h2 className="display-1" data-reveal data-reveal-delay="1" style={{
                maxWidth: 920,
                fontVariationSettings: '"opsz" 96, "SOFT" 50, "WONK" 1',
              }}>
                {title}
                <span style={{
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                }}>.</span>
              </h2>

              {lead && (
                <p className="lead" data-reveal data-reveal-delay="2" style={{
                  maxWidth: 680,
                }}>
                  {lead}
                </p>
              )}

              {bullets.length > 0 && (
                <ul data-reveal data-reveal-delay="3" style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexDirection: 'column', gap: 0,
                  maxWidth: 720,
                  borderTop: '1px solid var(--hairline-strong)',
                }}>
                  {bullets.map((b, i) => (
                    <li key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '40px 1fr 20px',
                      gap: 18,
                      alignItems: 'center',
                      padding: '18px 0',
                      borderBottom: '1px solid var(--hairline)',
                      transition: 'padding-left 0.18s ease, color 0.18s ease',
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '8px'}
                      onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
                    >
                      <span className="mono" style={{
                        fontSize: 11.5,
                        color: 'var(--accent)',
                        letterSpacing: '0.10em',
                        fontWeight: 500,
                      }}>
                        / 0{i + 1}
                      </span>
                      <span style={{
                        fontSize: 15.5,
                        color: 'var(--text)',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 1.45,
                      }}>
                        {b}
                      </span>
                      <span style={{
                        color: 'var(--text-faint)',
                        fontSize: 14,
                        opacity: 0.6,
                      }}>→</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Mockup grande embaixo — slight perspective */}
        {mockup && (
          <div
            data-reveal
            data-reveal-delay="2"
            style={{
              marginTop: 'clamp(64px, 8vw, 100px)',
              maxWidth: 1200,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
            }}
          >
            {/* Glow azul atrás */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '8% -3% -12% -3%',
              background: 'radial-gradient(ellipse 55% 75% at 50% 50%, rgba(77, 163, 255, 0.22), transparent 70%)',
              filter: 'blur(80px)',
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative',
              zIndex: 1,
              transform: `perspective(2400px) rotateX(2deg) rotateY(${flip ? '-1.5deg' : '1.5deg'})`,
            }}>
              <BrowserFrame url={url}>
                {mockup}
              </BrowserFrame>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
