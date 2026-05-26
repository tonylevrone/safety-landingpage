import Asterisk from '../ui/Asterisk';
import PhoneFrame from '../ui/PhoneFrame';
import { MobileHome, MobileInventory } from '../mockups/MobileMockup';

export default function Mobile() {
  return (
    <section id="mobile" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
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
              04 / Mobile
            </div>
            <div aria-hidden="true" style={{
              position: 'absolute',
              left: 4,
              top: 36,
              width: 1,
              height: 'calc(100% - 36px)',
              background: 'linear-gradient(180deg, var(--hairline-strong), transparent)',
            }} />
          </div>

          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 18 }}>
              <Asterisk size={22} />
              <span className="italic-tag" style={{ fontSize: 19, color: 'var(--text-soft)' }}>
                SafetyZ° Mobile
              </span>
            </div>

            <h2 className="display-1" data-reveal data-reveal-delay="1" style={{ maxWidth: 900 }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
              }}>A mesma força,</span>
              <br />
              <span style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}>na palma da mão</span>
              <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>.</span>
            </h2>

            <p className="lead" data-reveal data-reveal-delay="2" style={{ marginTop: 32 }}>
              O técnico em campo registra a intervenção no momento.
              O gestor recebe a confirmação na hora. Bottom-nav nativa, modo offline e
              sincronização ao retornar.
            </p>
          </div>
        </div>

        {/* Phone frames com perspective mais dramática */}
        <div
          data-reveal
          style={{
            marginTop: 'clamp(64px, 8vw, 100px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
            flexWrap: 'wrap',
            perspective: 1800,
          }}
        >
          <div style={{
            transform: 'translateY(30px) rotateY(12deg) rotateX(-3deg) rotateZ(-2deg)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(20px) rotateY(8deg) rotateX(-1deg) rotateZ(0deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(30px) rotateY(12deg) rotateX(-3deg) rotateZ(-2deg)'}
          >
            <PhoneFrame width={290}>
              <MobileHome />
            </PhoneFrame>
          </div>
          <div className="show-md" style={{
            transform: 'translateY(-30px) rotateY(-12deg) rotateX(-3deg) rotateZ(2deg)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-20px) rotateY(-8deg) rotateX(-1deg) rotateZ(0deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-30px) rotateY(-12deg) rotateX(-3deg) rotateZ(2deg)'}
          >
            <PhoneFrame width={290}>
              <MobileInventory />
            </PhoneFrame>
          </div>
        </div>

        {/* Sparks decorativas em volta dos phones */}
        <span className="spark" style={{ top: '40%', left: '10%', animationDelay: '0.5s' }} />
        <span className="spark" style={{ top: '60%', left: '85%', animationDelay: '2.2s' }} />
      </div>
    </section>
  );
}
