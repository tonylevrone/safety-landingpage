import { ArrowRight, Calendar } from 'lucide-react';
import Asterisk from '../ui/Asterisk';
import Sphere from '../ui/Sphere';

/**
 * Get in Touch v3.1 — CTA editorial:
 *  - underline inputs com animação de pad-left no focus
 *  - mix sans/serif na headline
 *  - esfera azul atrás + spark decorativo
 */
export default function GetInTouch() {
  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="editorial-grid">
          <div className="show-lg" style={{ paddingTop: 6, position: 'relative' }}>
            <div className="mono" style={{
              fontSize: 10.5,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 8,
            }}>
              06 / Contact
            </div>
            <div aria-hidden="true" style={{
              position: 'absolute',
              left: 4,
              top: 36,
              width: 1,
              height: 80,
              background: 'linear-gradient(180deg, var(--hairline-strong), transparent)',
            }} />
            <div style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              lineHeight: 1.45,
              maxWidth: 130,
              marginTop: 100,
            }} className="italic-tag">
              Conte sobre você e sobre o projeto.
            </div>
          </div>

          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 18 }}>
              <Asterisk size={22} />
              <span className="italic-tag" style={{ fontSize: 19, color: 'var(--text-soft)' }}>
                Comece hoje
              </span>
            </div>

            <h2 className="display-1" data-reveal data-reveal-delay="1" style={{
              maxWidth: 1000,
              marginBottom: 22,
            }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Sua operação merece
              </span>
              <br />
              <span style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}>
                uma plataforma à altura
              </span>
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h2>

            <p className="lead" data-reveal data-reveal-delay="2" style={{
              marginBottom: 56,
            }}>
              Conheça o SafetyZ em uma apresentação guiada de 10 minutos.
              Você sai com clareza do que muda na sua operação.
            </p>

            {/* Form com inputs underline */}
            <form
              data-reveal
              data-reveal-delay="3"
              onSubmit={(e) => { e.preventDefault(); alert('Recebemos sua mensagem. Em breve entraremos em contato.'); }}
              style={{
                maxWidth: 760,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <input
                type="email"
                required
                placeholder="Seu e-mail"
                className="input-line"
                aria-label="Seu e-mail"
              />
              <input
                type="text"
                required
                placeholder="Sua empresa"
                className="input-line"
                aria-label="Sua empresa"
              />
              <input
                type="text"
                placeholder="Conte sobre sua operação (opcional)"
                className="input-line"
                aria-label="Conte sobre sua operação (opcional)"
              />

              <div style={{
                marginTop: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                flexWrap: 'wrap',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center', gap: 16,
                  fontSize: 12.5, color: 'var(--text-muted)',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: 'var(--accent)',
                      animation: 'pulse-dot 1.6s infinite',
                      boxShadow: '0 0 10px var(--accent-glow)',
                    }} />
                    Resposta em menos de 24h
                  </span>
                  <span>·</span>
                  <span>Sem cartão de crédito</span>
                </div>

                <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap' }}>
                  <button type="button" className="btn btn-ghost btn-lg">
                    <Calendar size={15} strokeWidth={2} />
                    Agendar demo
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: 26, paddingRight: 30 }}
                  >
                    Solicitar apresentação
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Esfera azul */}
      <div
        aria-hidden="true"
        className="contact-sphere orbit-bob"
        style={{
          position: 'absolute',
          right: '-12%',
          bottom: '-22%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.60,
        }}
      >
        <Sphere size={480} />
      </div>

      {/* Sparks */}
      <span className="spark" style={{ top: '20%', left: '4%', animationDelay: '0.4s' }} />
      <span className="spark" style={{ top: '70%', left: '92%', animationDelay: '2.6s' }} />

      <style>{`
        @media (max-width: 1023px) {
          .contact-sphere { display: none; }
        }
      `}</style>
    </section>
  );
}
