import {
  Home, Boxes, Calendar, BarChart3, Clock, Search, Bell,
  ShieldCheck, Wrench, ShieldAlert, Activity, ArrowUpRight,
} from 'lucide-react';
import Logo from '../ui/Logo';

const T = {
  bg:      '#0A0F1E',
  bg2:     '#0F1729',
  bg3:     '#18213A',
  border:  'rgba(148, 163, 184, 0.12)',
  text:    '#F5F5F7',
  textSoft:'#D2D2D7',
  textMut: '#86868B',
  textFnt: '#6E6E73',
  brand:   '#2997FF',
  brand2:  '#66B2FF',
  ok:      '#30D158',
  warn:    '#FF9F0A',
  err:     '#FF453A',
};

export default function DashboardMockup() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '210px 1fr',
      background: T.bg,
      color: T.text,
      fontFamily: 'var(--font-body)',
      minHeight: 540,
    }}>
      {/* Sidebar */}
      <aside style={{
        borderRight: `1px solid ${T.border}`,
        padding: '18px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '4px 8px' }}>
          <Logo size={22} />
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
            letterSpacing: '-0.025em',
          }}>
            Safety<span style={{ color: T.brand2 }}>Z</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { Icon: Home,      label: 'Visão geral', active: true },
            { Icon: Boxes,     label: 'Inventário', count: 218 },
            { Icon: Calendar,  label: 'Agenda',     count: 12 },
            { Icon: BarChart3, label: 'Análise' },
            { Icon: Clock,     label: 'Auditoria' },
          ].map(({ Icon, label, active, count }, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 11px',
              borderRadius: 10,
              background: active ? T.bg3 : 'transparent',
              color: active ? T.text : T.textMut,
              fontSize: 13,
              fontWeight: active ? 600 : 500,
            }}>
              <Icon size={15} strokeWidth={1.9} />
              <span style={{ flex: 1 }}>{label}</span>
              {count && (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5, color: T.textFnt,
                }}>{count}</span>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'auto', padding: '10px 8px',
          fontSize: 10.5, color: T.textFnt,
          fontFamily: 'var(--font-mono)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: T.ok,
            animation: 'pulse-dot 1.6s infinite',
          }} />
          v2.0 · online
        </div>
      </aside>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 20px',
          borderBottom: `1px solid ${T.border}`,
        }}>
          <div style={{
            flex: 1, maxWidth: 380,
            display: 'inline-flex', alignItems: 'center', gap: 9,
            padding: '8px 12px',
            background: T.bg2,
            border: `1px solid ${T.border}`,
            borderRadius: 10,
            color: T.textMut,
            fontSize: 12.5,
          }}>
            <Search size={13} strokeWidth={2} />
            <span style={{ flex: 1 }}>Buscar equipamento, local, técnico…</span>
            <span style={{
              fontFamily: 'var(--font-mono)', color: T.textFnt, fontSize: 10.5,
              padding: '1px 5px', background: T.bg3, borderRadius: 4,
            }}>⌘ K</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <button style={{
              position: 'relative',
              width: 32, height: 32, borderRadius: 9,
              background: T.bg2, border: `1px solid ${T.border}`,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: T.textSoft,
            }}>
              <Bell size={14} strokeWidth={2} />
              <span style={{
                position: 'absolute', top: -3, right: -3,
                width: 14, height: 14, borderRadius: 999,
                background: T.err, color: '#fff',
                fontSize: 9, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${T.bg}`,
              }}>3</span>
            </button>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '4px 10px 4px 4px',
              background: T.bg2,
              border: `1px solid ${T.border}`,
              borderRadius: 999,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'linear-gradient(135deg, #2997FF, #0071E3)',
                color: '#fff',
                fontSize: 10, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>MS</div>
              <span style={{ fontSize: 12, color: T.textSoft, fontWeight: 500 }}>Mariana</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em',
            }}>
              Boa tarde, Mariana.
            </div>
            <div style={{ fontSize: 13, color: T.textMut, marginTop: 4 }}>
              7 equipamentos operacionais · 2 em manutenção · 1 crítico
            </div>
          </div>

          {/* KPI grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { Icon: ShieldCheck,  label: 'Operacionais',  value: 218, delta: '+12', color: T.ok },
              { Icon: Wrench,       label: 'Manutenção',    value: 16,  delta: '−4',  color: T.warn },
              { Icon: ShieldAlert,  label: 'Críticos',      value: 3,   delta: '−1',  color: T.err  },
              { Icon: Activity,     label: 'Saúde média',   value: '92%', delta: '+3', color: T.brand2 },
            ].map(({ Icon, label, value, delta, color }, i) => (
              <div key={i} style={{
                border: `1px solid ${T.border}`,
                borderRadius: 14,
                background: T.bg2,
                padding: 14,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: T.bg3, color,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 12,
                }}>
                  <Icon size={14} strokeWidth={2} />
                </div>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 6,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24, fontWeight: 700, letterSpacing: '-0.035em',
                  }}>
                    {value}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: T.textFnt,
                  }}>{delta}</span>
                </div>
                <div style={{ fontSize: 11.5, color: T.textMut, marginTop: 2 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Two columns: chart + alerts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
            {/* Chart card */}
            <div style={{
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              background: T.bg2,
              padding: 16,
              minHeight: 180,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 14,
              }}>
                <div>
                  <div style={{ fontSize: 11, color: T.textMut, fontWeight: 500, marginBottom: 2 }}>
                    Conformidade — 30 dias
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 26, fontWeight: 700, letterSpacing: '-0.035em',
                    }}>
                      96.4<span style={{ fontSize: 16, color: T.textMut }}>%</span>
                    </span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 2,
                      fontSize: 11, fontWeight: 700, color: T.ok,
                      background: 'rgba(48, 209, 88, 0.12)',
                      padding: '2px 7px', borderRadius: 999,
                    }}>
                      <ArrowUpRight size={11} strokeWidth={2.5} />
                      2.1%
                    </span>
                  </div>
                </div>
              </div>

              {/* Area chart */}
              <svg width="100%" height="110" viewBox="0 0 400 110" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"  stopColor={T.brand2} stopOpacity="0.45" />
                    <stop offset="100%" stopColor={T.brand2} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 L40 70 L80 75 L120 55 L160 60 L200 40 L240 45 L280 30 L320 38 L360 22 L400 28 L400 110 L0 110 Z"
                  fill="url(#areaG)"
                />
                <path
                  d="M0 80 L40 70 L80 75 L120 55 L160 60 L200 40 L240 45 L280 30 L320 38 L360 22 L400 28"
                  stroke={T.brand2} strokeWidth="2" fill="none"
                />
                {/* Grid lines */}
                {[25, 55, 85].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y}
                    stroke={T.border} strokeDasharray="3 4" strokeWidth="1" />
                ))}
              </svg>
            </div>

            {/* Alerts card */}
            <div style={{
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              background: T.bg2,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 14px',
                borderBottom: `1px solid ${T.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: T.textMut,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Alertas
                </span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: T.ok,
                    animation: 'pulse-dot 1.6s infinite',
                  }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: T.textFnt }}>ao vivo</span>
                </span>
              </div>
              {[
                { Icon: ShieldAlert, label: 'Validade — 7 dias',  sub: 'Detector · Almox.',  color: T.warn },
                { Icon: Activity,    label: 'Manutenção atrasada', sub: 'Sensor · Sala 3',   color: T.err  },
                { Icon: ShieldCheck, label: 'Calibração OK',       sub: 'Câmera · Recepção', color: T.ok   },
              ].map((r, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 14px',
                  borderTop: i > 0 ? `1px solid ${T.border}` : 'none',
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 7,
                    background: T.bg3, color: r.color,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <r.Icon size={12} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{r.label}</div>
                    <div style={{ fontSize: 10.5, color: T.textMut }}>{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
