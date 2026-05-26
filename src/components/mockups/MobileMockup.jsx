import { Search, Bell, Plus, ShieldCheck, Wrench, ShieldAlert, Home, Boxes, Calendar, BarChart3 } from 'lucide-react';

const T = {
  bg: '#FFFFFF', bg2: '#F5F5F7', bg3: '#E5E5EA',
  text: '#1D1D1F', textMut: '#86868B', textFnt: '#AEAEB2',
  brand: '#2997FF', brand2: '#0071E3',
  ok: '#30D158', warn: '#FF9F0A', err: '#FF453A',
};

export function MobileHome() {
  return (
    <div style={{
      background: T.bg, color: T.text,
      fontFamily: 'var(--font-body)',
      height: '100%',
      display: 'flex', flexDirection: 'column',
      padding: '50px 16px 8px',
      fontSize: 13,
    }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: T.textMut, fontWeight: 500 }}>Boa tarde,</div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22, fontWeight: 700, letterSpacing: '-0.030em',
        }}>
          Mariana
        </div>
      </div>

      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '9px 12px',
        background: T.bg2, borderRadius: 12,
        marginBottom: 14, color: T.textMut, fontSize: 12.5,
      }}>
        <Search size={13} strokeWidth={2} />
        <span>Buscar equipamento</span>
      </div>

      {/* KPI row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 7,
        marginBottom: 14,
      }}>
        {[
          { label: 'OK', value: 218, color: T.ok },
          { label: 'Manut.', value: 16, color: T.warn },
          { label: 'Crít.', value: 3, color: T.err },
        ].map((k) => (
          <div key={k.label} style={{
            padding: '10px 8px', borderRadius: 12,
            background: T.bg2,
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18, fontWeight: 700, color: k.color,
              letterSpacing: '-0.025em',
            }}>{k.value}</div>
            <div style={{ fontSize: 10, color: T.textMut }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* Recent */}
      <div style={{
        fontSize: 10, fontWeight: 600, color: T.textFnt,
        textTransform: 'uppercase', letterSpacing: '0.08em',
        marginBottom: 6, paddingLeft: 4,
      }}>
        Próximas ações
      </div>
      <div style={{
        borderRadius: 14, background: T.bg2,
        overflow: 'hidden',
        flex: 1,
      }}>
        {[
          { Icon: ShieldAlert, label: 'Validade 7d',  sub: 'Detector · Almox.', color: T.warn },
          { Icon: Wrench,      label: 'Preventiva',   sub: 'Câmera · Recep.',   color: T.brand },
          { Icon: ShieldCheck, label: 'Calibração',   sub: 'Sirene · Bloco A',  color: T.ok },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: '10px 12px',
            borderTop: i > 0 ? `1px solid ${T.bg3}` : 'none',
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: 7,
              background: '#fff', color: r.color,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <r.Icon size={12} strokeWidth={2.2} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{r.label}</div>
              <div style={{ fontSize: 10.5, color: T.textMut }}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{
        marginTop: 10,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '6px 0',
        borderTop: `1px solid ${T.bg3}`,
      }}>
        {[
          { Icon: Home, label: 'Início', active: true },
          { Icon: Boxes, label: 'Itens' },
          { Icon: Calendar, label: 'Agenda' },
          { Icon: BarChart3, label: 'Dados' },
        ].map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            color: t.active ? T.brand : T.textMut,
            fontSize: 9, fontWeight: 500,
          }}>
            <t.Icon size={16} strokeWidth={t.active ? 2.4 : 2} />
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileInventory() {
  return (
    <div style={{
      background: T.bg, color: T.text,
      fontFamily: 'var(--font-body)',
      height: '100%',
      display: 'flex', flexDirection: 'column',
      padding: '50px 0 8px',
      fontSize: 13,
    }}>
      <div style={{
        padding: '0 16px 12px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <div>
          <div style={{ fontSize: 11, color: T.textMut, fontWeight: 500 }}>218 itens</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22, fontWeight: 700, letterSpacing: '-0.030em',
          }}>
            Inventário
          </div>
        </div>
        <button style={{
          width: 32, height: 32, borderRadius: 999,
          background: T.brand, color: '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Chips */}
      <div style={{
        padding: '0 16px 10px',
        display: 'flex', gap: 6, overflowX: 'hidden',
      }}>
        {[
          { label: 'Todos',  active: true },
          { label: 'OK' },
          { label: 'Atenção' },
          { label: 'Crít.' },
        ].map((c) => (
          <span key={c.label} style={{
            padding: '5px 12px', borderRadius: 999,
            background: c.active ? T.text : T.bg2,
            color: c.active ? '#fff' : T.textMut,
            fontSize: 11.5, fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {c.label}
          </span>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {[
          { id: 'EQ-2147', name: 'Detector de fumaça', loc: 'Almox. Central',  color: T.ok,   health: 98 },
          { id: 'EQ-2148', name: 'Extintor ABC 6kg',   loc: 'Bloco A · 2º',    color: T.warn, health: 72 },
          { id: 'EQ-2149', name: 'Câmera Hikvision',   loc: 'Recepção',        color: T.ok,   health: 100 },
          { id: 'EQ-2150', name: 'Sensor PIR',         loc: 'Sala servidores', color: T.err,  health: 42 },
        ].map((it, i) => (
          <div key={it.id} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 16px',
            borderTop: `1px solid ${T.bg3}`,
          }}>
            <div style={{
              width: 6, height: 36, borderRadius: 3,
              background: it.color,
              flexShrink: 0,
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600 }}>{it.name}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: T.textFnt,
                }}>{it.id}</span>
              </div>
              <div style={{ fontSize: 11, color: T.textMut, marginTop: 1 }}>
                {it.loc}
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: T.text, fontWeight: 600,
            }}>{it.health}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
