import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';

const T = {
  bg: '#0A0F1E', bg2: '#0F1729', bg3: '#18213A',
  border: 'rgba(148, 163, 184, 0.12)',
  text: '#F5F5F7', textSoft: '#D2D2D7', textMut: '#86868B', textFnt: '#6E6E73',
  brand2: '#66B2FF',
  ok: '#30D158', warn: '#FF9F0A', err: '#FF453A',
};

const items = [
  { id: 'EQ-2147', name: 'Detector de fumaça',     loc: 'Almox. Central',  status: 'ok',   health: 98 },
  { id: 'EQ-2148', name: 'Extintor ABC 6kg',       loc: 'Bloco A · 2º',    status: 'warn', health: 72 },
  { id: 'EQ-2149', name: 'Câmera IP Hikvision',    loc: 'Recepção',        status: 'ok',   health: 100 },
  { id: 'EQ-2150', name: 'Sensor PIR',             loc: 'Sala servidores', status: 'err',  health: 42 },
  { id: 'EQ-2151', name: 'Sirene de evacuação',    loc: 'Corredor 3',      status: 'ok',   health: 95 },
];

const statusBadge = (s) => {
  const map = {
    ok:   { color: T.ok,   label: 'Operacional' },
    warn: { color: T.warn, label: 'Atenção' },
    err:  { color: T.err,  label: 'Crítico' },
  };
  const { color, label } = map[s];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 11, fontWeight: 600, color,
      background: `${color}1F`,
      padding: '3px 8px', borderRadius: 999,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
      {label}
    </span>
  );
};

export default function InventoryMockup() {
  return (
    <div style={{
      background: T.bg, color: T.text,
      fontFamily: 'var(--font-body)', minHeight: 460,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 16,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em',
            }}>
              Inventário
            </div>
            <div style={{ fontSize: 12.5, color: T.textMut, marginTop: 2 }}>
              218 equipamentos · 12 categorias · 4 unidades
            </div>
          </div>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 999,
            background: T.brand2, color: '#000',
            fontSize: 12.5, fontWeight: 600,
          }}>
            <Plus size={14} strokeWidth={2.5} />
            Novo equipamento
          </button>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{
            flex: 1, maxWidth: 320,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 12px',
            background: T.bg2, border: `1px solid ${T.border}`,
            borderRadius: 10, color: T.textMut, fontSize: 12.5,
          }}>
            <Search size={13} strokeWidth={2} />
            <span style={{ flex: 1 }}>Buscar por nome, ID, local…</span>
          </div>
          {['Todos', 'Operacionais', 'Atenção', 'Críticos'].map((f, i) => (
            <button key={f} style={{
              padding: '7px 13px', borderRadius: 999,
              background: i === 0 ? T.bg3 : 'transparent',
              border: `1px solid ${i === 0 ? T.border : 'transparent'}`,
              fontSize: 12, fontWeight: 500,
              color: i === 0 ? T.text : T.textMut,
            }}>
              {f}
            </button>
          ))}
          <button style={{
            marginLeft: 'auto',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 12px', borderRadius: 10,
            background: T.bg2, border: `1px solid ${T.border}`,
            fontSize: 12, color: T.textSoft,
          }}>
            <Filter size={13} strokeWidth={2} />
            Filtros
          </button>
        </div>
      </div>

      {/* Table */}
      <div>
        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '110px 1.6fr 1.2fr 130px 130px 40px',
          padding: '12px 24px',
          fontSize: 10.5, fontWeight: 600, color: T.textFnt,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          borderBottom: `1px solid ${T.border}`,
        }}>
          <span>ID</span>
          <span>Equipamento</span>
          <span>Local</span>
          <span>Status</span>
          <span>Saúde</span>
          <span />
        </div>

        {/* Rows */}
        {items.map((it, i) => (
          <div key={it.id} style={{
            display: 'grid',
            gridTemplateColumns: '110px 1.6fr 1.2fr 130px 130px 40px',
            padding: '14px 24px',
            alignItems: 'center',
            borderBottom: i < items.length - 1 ? `1px solid ${T.border}` : 'none',
            background: i === 1 ? 'rgba(102, 178, 255, 0.04)' : 'transparent',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: T.textFnt,
            }}>{it.id}</span>
            <span style={{ fontSize: 13.5, fontWeight: 500 }}>{it.name}</span>
            <span style={{ fontSize: 13, color: T.textMut }}>{it.loc}</span>
            <span>{statusBadge(it.status)}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                flex: 1, maxWidth: 80, height: 4, borderRadius: 2,
                background: T.bg3, overflow: 'hidden',
              }}>
                <div style={{
                  width: `${it.health}%`, height: '100%',
                  background: it.health > 75 ? T.ok : it.health > 50 ? T.warn : T.err,
                }} />
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11.5,
                color: T.textSoft, minWidth: 30, textAlign: 'right',
              }}>{it.health}%</span>
            </div>
            <button style={{
              width: 24, height: 24, borderRadius: 6,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: T.textMut,
            }}>
              <MoreHorizontal size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
