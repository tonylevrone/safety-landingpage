import Asterisk from '../ui/Asterisk';
import Sphere from '../ui/Sphere';

/**
 * Manifesto — bloco editorial "story", entre os cases e capabilities.
 * Esfera laranja como contraponto visual, texto grande à esquerda.
 */
export default function Manifesto() {
  return (
    <section id="manifesto" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="editorial-grid">
          {/* Rail */}
          <div className="show-lg" style={{ paddingTop: 6 }}>
            <div className="mono" style={{
              fontSize: 10,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 8,
            }}>
              Stories
            </div>
          </div>

          {/* Main */}
          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 22 }}>
              <Asterisk size={20} />
              <span className="italic-tag" style={{ fontSize: 18, color: 'var(--text-soft)' }}>
                Why we built SafetyZ
              </span>
            </div>

            <h2 className="display-1" data-reveal data-reveal-delay="1" style={{ maxWidth: 980 }}>
              <span style={{ color: 'var(--text)' }}>
                Toda operação que cuida de segurança
              </span>
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                cuida também da própria reputação.
              </span>
              <span style={{ color: 'var(--accent)' }}>°</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 24,
              marginTop: 48,
              maxWidth: 760,
            }}>
              <p data-reveal data-reveal-delay="2" className="lead">
                Por décadas, gestão de equipamentos de segurança viveu em planilhas:
                versões conflitantes, alertas perdidos, manutenções esquecidas.
                Auditorias fechadas às pressas no prazo.
              </p>
              <p data-reveal data-reveal-delay="3" className="lead" style={{ color: 'var(--text-soft)' }}>
                SafetyZ° é a tentativa de tirar essa complexidade da sua mesa.
                Uma plataforma única, rastreável, que entende a operação de segurança
                como ela é — não como o Excel obriga.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Esfera flutuando à direita como contraponto */}
      <div
        aria-hidden="true"
        className="manifesto-sphere"
        style={{
          position: 'absolute',
          right: '-12%',
          top: '20%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.55,
        }}
      >
        <Sphere size={420} />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .manifesto-sphere { display: none; }
        }
      `}</style>
    </section>
  );
}
