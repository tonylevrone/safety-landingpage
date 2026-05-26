import Asterisk from '../ui/Asterisk';
import useCountUp from '../../hooks/useCountUp';

const STATS = [
  { num: '01', value: '218',   label: 'Equipamentos rastreados', hint: 'Em produção, hoje.' },
  { num: '02', value: '96%',   label: 'Conformidade',            hint: 'Dispositivos em dia com a calibração.' },
  { num: '03', value: '24/7',  label: 'Monitoramento',           hint: 'Alertas funcionam fora do expediente.' },
  { num: '04', value: '< 30s', label: 'Para cadastrar',          hint: 'Equipamento novo em menos de meio minuto.' },
];

function StatRow({ stat, alternate }) {
  const [ref, display] = useCountUp(stat.value);
  return (
    <div
      ref={ref}
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gap: 36,
        padding: '44px 0',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'baseline',
        position: 'relative',
      }}
    >
      <span className="section-num" style={{ paddingTop: 28 }}>{stat.num}</span>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 16,
      }}>
        <div style={{
          fontFamily: alternate ? 'var(--font-serif)' : 'var(--font-sans)',
          fontSize: 'clamp(42px, 6.5vw, 88px)',
          fontWeight: alternate ? 700 : 700,
          fontStyle: alternate ? 'italic' : 'normal',
          letterSpacing: alternate ? '-0.030em' : '-0.050em',
          lineHeight: 0.95,
          color: 'var(--text)',
          background: 'linear-gradient(180deg, #F2F1EC 20%, #80BAFF 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontVariantNumeric: 'tabular-nums',
          fontVariationSettings: alternate ? '"opsz" 144, "SOFT" 100, "WONK" 1' : 'normal',
        }}>
          {display}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 22,
          flexWrap: 'wrap',
        }}>
          <span className="italic-tag" style={{
            fontSize: 20, color: 'var(--text)',
          }}>
            {stat.label}
          </span>
          <span className="caption" style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>
            {stat.hint}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="section">
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
              05 / Impact
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
                Números que importam
              </span>
            </div>

            <div data-reveal data-reveal-delay="1" style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
              marginBottom: 32,
            }}>
              <h2 className="display-1" style={{ maxWidth: 880 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Indicadores que mudam
                </span>
                <br />
                <span style={{
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
                }}>
                  quando você passa pra SafetyZ°
                </span>
                <span style={{ color: 'var(--accent)' }}>.</span>
              </h2>
              <span className="section-num">01 / 04</span>
            </div>

            <div>
              {STATS.map((s, i) => (
                <StatRow key={s.label} stat={s} alternate={i === 1 || i === 3} />
              ))}
              <hr className="hairline-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
