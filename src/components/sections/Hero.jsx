import { ArrowDownLeft, Download } from 'lucide-react';
import Sphere from '../ui/Sphere';
import BrowserFrame from '../ui/BrowserFrame';
import DashboardMockup from '../mockups/DashboardMockup';

/**
 * Hero v3.1 — editorial magazine, layered typography:
 * - "Controle." DM Sans bold + "Clareza." Fraunces italic wonky + "Conformidade." mixed
 * - Esfera 3D blue glow asymétrica
 * - Vertical section marker à esquerda (rotated)
 * - Sparks decorativas espalhadas
 * - CTA dual: demo + download trial
 */
export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: 'clamp(64px, 10vw, 120px)',
      paddingBottom: 'clamp(48px, 7vw, 96px)',
      overflow: 'hidden',
    }}>
      {/* Crosshatch background — subtle grid for atmosphere */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.65,
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
      }} className="crosshatch" />

      {/* Sparks (decorative dots) */}
      <span className="spark" style={{ top: '12%', left: '6%', animationDelay: '0s' }} />
      <span className="spark" style={{ top: '34%', left: '88%', animationDelay: '1.2s' }} />
      <span className="spark" style={{ top: '78%', left: '14%', animationDelay: '2.4s' }} />
      <span className="spark" style={{ top: '22%', left: '52%', animationDelay: '3.1s' }} />
      <span className="spark" style={{ top: '65%', left: '72%', animationDelay: '1.8s' }} />

      {/* Vertical "INDEX 2026" marker — rotated 90° on left edge */}
      <div className="show-lg" style={{
        position: 'absolute',
        left: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 3,
      }}>
        <span className="section-num-vertical">
          INDEX — 2026 / SAFETYZ°
        </span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="editorial-grid">
          {/* Rail — content shifted to feature info */}
          <div className="show-lg" style={{
            paddingTop: 10,
            color: 'var(--text-muted)',
            fontSize: 12,
            lineHeight: 1.45,
            maxWidth: 130,
          }}>
            <div className="mono" style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 10,
            }}>
              Ed. 01 / 2026
            </div>
            <div className="italic-tag" style={{ fontSize: 14, color: 'var(--text-soft)' }}>
              Operações que não toleram improviso.
            </div>
          </div>

          {/* Main — mixed type headline */}
          <div style={{ position: 'relative' }}>
            <h1 className="display-mega" data-reveal-words style={{ position: 'relative' }}>
              <span data-word className="display-mega-sans" style={{ display: 'inline-block' }}>
                Controle<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
              <br />
              <span data-word className="italic-display" style={{
                display: 'inline-block',
                color: 'var(--text)',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                fontWeight: 600,
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}>
                Clareza<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
              <br />
              <span data-word className="display-mega-sans" style={{ display: 'inline-block' }}>
                Conformidade
              </span>
              <span data-word style={{
                display: 'inline-block',
                color: 'var(--accent)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '0.65em',
                marginLeft: '0.05em',
                verticalAlign: 'baseline',
                lineHeight: 1,
              }}>°</span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="4"
              className="lead"
              style={{
                marginTop: 40,
                maxWidth: 600,
              }}
            >
              SafetyZ centraliza inventário, manutenção, alertas e auditoria —
              para que sua operação seja organizada, rastreável e sem surpresas.
            </p>

            {/* CTA row — primary download + ghost demo */}
            <div data-reveal data-reveal-delay="5" style={{
              marginTop: 'clamp(36px, 5vw, 60px)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              flexWrap: 'wrap',
            }}>
              <a href="#download" className="btn btn-primary btn-lg">
                <Download size={16} strokeWidth={2.2} />
                Baixar trial · 7 dias
              </a>
              <a href="#contact" className="btn btn-ghost btn-lg">
                Solicitar demo
              </a>
            </div>

            {/* Section marker — moved below CTA, more discreet */}
            <div data-reveal data-reveal-delay="5" style={{
              marginTop: 'clamp(40px, 6vw, 72px)',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}>
              <a href="#inventory" aria-label="Ir para Inventário" style={{
                width: 50, height: 50,
                borderRadius: '50%',
                border: '1px solid var(--hairline-strong)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                transition: 'background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.18s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--hairline-strong)';
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <ArrowDownLeft size={18} strokeWidth={1.5} />
              </a>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span className="section-num">01 / 05</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 17,
                  color: 'var(--text-soft)',
                  fontVariationSettings: '"opsz" 24, "SOFT" 100, "WONK" 1',
                }}>
                  Plataforma
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup — rotated slightly for editorial energy */}
        <div
          data-reveal
          style={{
            marginTop: 'clamp(64px, 9vw, 120px)',
            maxWidth: 1240,
            margin: 'clamp(64px, 9vw, 120px) auto 0',
            position: 'relative',
          }}
        >
          {/* Glow azul atrás */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: '12% 5% -10% 5%',
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(77, 163, 255, 0.28), transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }} />
          <div style={{ position: 'relative', zIndex: 1, transform: 'perspective(2200px) rotateX(2deg)' }}>
            <BrowserFrame url="app.safetyz.io/dashboard">
              <DashboardMockup />
            </BrowserFrame>
          </div>
        </div>
      </div>

      {/* Esfera 3D azul principal — orbital decorative */}
      <div
        className="hero-sphere orbit-bob"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-6%',
          top: '8%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.85,
        }}
      >
        <Sphere size={340} withRing />
      </div>

      {/* Segunda esfera menor */}
      <div
        className="hero-sphere-2"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-5%',
          top: '45%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.45,
        }}
      >
        <Sphere size={160} />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-sphere { right: -22%; top: 54%; opacity: 0.55; }
          .hero-sphere > div { width: 260px !important; height: 260px !important; }
          .hero-sphere-2 { display: none; }
        }
        @media (max-width: 640px) {
          .hero-sphere { right: -32%; top: 60%; opacity: 0.45; }
          .hero-sphere > div { width: 200px !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
