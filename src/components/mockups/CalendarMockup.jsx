import { Calendar as CalIcon, ChevronLeft, ChevronRight, Wrench, ShieldAlert } from 'lucide-react';

const T = {
  bg: '#0A0F1E', bg2: '#0F1729', bg3: '#18213A',
  border: 'rgba(148, 163, 184, 0.12)',
  text: '#F5F5F7', textSoft: '#D2D2D7', textMut: '#86868B', textFnt: '#6E6E73',
  brand2: '#66B2FF', brand: '#2997FF',
  ok: '#30D158', warn: '#FF9F0A', err: '#FF453A',
};

// Mini calendário Maio (com markers)
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const offset = 4; // 1 de Maio = Sex (5)
const markers = {
  6:  { type: 'prev', color: T.ok   },
  9:  { type: 'corr', color: T.warn },
  14: { type: 'prev', color: T.ok   },
  18: { type: 'corr', color: T.err  },
  18: { type: 'corr', color: T.err  },
  22: { type: 'prev', color: T.ok   },
  27: { type: 'prev', color: T.ok   },
  29: { type: 'corr', color: T.warn },
};

const selectedDay = 18;

export default function CalendarMockup() {
  return (
    <div style={{
      background: T.bg, color: T.text,
      fontFamily: 'var(--font-body)', minHeight: 480,
      display: 'grid', gridTemplateColumns: '1fr 320px',
    }}>
      {/* Calendar */}
      <div style={{ padding: 22, borderRight: `1px solid ${T.border}` }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 18,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em',
            }}>
              Maio 2026
            </div>
            <div style={{ fontSize: 12, color: T.textMut, marginTop: 2 }}>
              12 manutenções agendadas
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button style={navBtn}><ChevronLeft size={14} /></button>
            <button style={{ ...navBtn, background: T.bg3, color: T.text }}>Hoje</button>
            <button style={navBtn}><ChevronRight size={14} /></button>
          </div>
        </div>

        {/* Weekday header */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 4, marginBottom: 6,
        }}>
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
            <div key={i} style={{
              textAlign: 'center', fontSize: 10, fontWeight: 600,
              color: T.textFnt, padding: '4px 0',
              textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>{d}</div>
          ))}
        </div>

        {/* Day grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4,
        }}>
          {Array.from({ length: offset }).map((_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {days.map((d) => {
            const m = markers[d];
            const isSel = d === selectedDay;
            return (
              <div key={d} style={{
                aspectRatio: '1 / 1',
                position: 'relative',
                borderRadius: 8,
                background: isSel ? T.brand : 'transparent',
                color: isSel ? '#fff' : (m ? T.text : T.textMut),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: isSel ? 600 : 500,
                cursor: 'pointer',
                transition: 'background 0.15s ease',
              }}>
                <span>{d}</span>
                {m && (
                  <span style={{
                    position: 'absolute', bottom: 5, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 4, height: 4, borderRadius: '50%',
                    background: isSel ? '#fff' : m.color,
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Day detail */}
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ fontSize: 11, color: T.textMut, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Segunda-feira
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 30, fontWeight: 700, letterSpacing: '-0.035em',
            marginTop: 2,
          }}>
            18 de maio
          </div>
        </div>

        <div style={{
          padding: 12, borderRadius: 12,
          background: T.bg2, border: `1px solid ${T.border}`,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {[
            { time: '09:00', Icon: Wrench,       title: 'Preventiva — Detector',  who: 'Carlos S.', color: T.ok   },
            { time: '11:30', Icon: ShieldAlert,  title: 'Corretiva — Sensor PIR', who: 'Beatriz M.', color: T.err  },
            { time: '14:00', Icon: Wrench,       title: 'Calibração — Sirene',    who: 'Equipe A',  color: T.ok   },
          ].map((e, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '8px 6px', borderRadius: 8,
              background: i === 1 ? 'rgba(255, 69, 58, 0.06)' : 'transparent',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: T.bg3, color: e.color,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <e.Icon size={13} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 8,
                  marginBottom: 2,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: T.brand2, fontWeight: 600,
                  }}>{e.time}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 500 }}>{e.title}</span>
                </div>
                <div style={{ fontSize: 11, color: T.textMut }}>
                  Técnico: {e.who}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const navBtn = {
  width: 30, height: 30, borderRadius: 8,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: T.bg2, color: T.textSoft,
  border: `1px solid ${T.border}`,
  fontSize: 12, fontWeight: 500,
  padding: '0 8px',
};
