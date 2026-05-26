import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Asterisk from '../ui/Asterisk';

const CAPS = [
  {
    title: 'UX & product design',
    body: 'Cada tela do SafetyZ° foi desenhada para ser entendida em segundos. Hierarquia visual clara, microinterações que ensinam, e zero ruído. O técnico em campo abre o app e age sem treinamento.',
    detail: 'Design system próprio · 120+ componentes',
  },
  {
    title: 'Inventory & asset tracking',
    body: 'Cada equipamento ganha um identificador único, histórico vivo e indicador de saúde. Filtros combináveis, cadastro guiado em menos de 30 segundos, ações em massa.',
    detail: 'Capacidade testada · 50.000 itens',
  },
  {
    title: 'Maintenance scheduling',
    body: 'Calendário inteligente com preventivas, corretivas e calibrações. Atribuição por técnico, duração estimada, alerta antes do vencimento. Manutenção que se antecipa.',
    detail: 'Predictive layer · ML-assisted (roadmap)',
  },
  {
    title: 'Real-time alerts',
    body: 'Validades, falhas críticas e anomalias chegam ao canal certo — push mobile, e-mail, webhook, integração com Slack. Sem ruído. Só o que importa.',
    detail: 'Latência média · 1.4s',
  },
  {
    title: 'Compliance & audit trail',
    body: 'Trilha completa por equipamento. Cada cadastro, edição, intervenção registrada com responsável, momento e contexto. Pronto para NR-23, NR-10, NBR 12962.',
    detail: 'Audit-ready · ISO 27001 compliant',
  },
  {
    title: 'Mobile · field-first',
    body: 'O app foi pensado primeiro pro técnico em campo. Bottom nav nativa, captura de fotos da intervenção, modo offline com sincronização ao retornar.',
    detail: 'iOS · Android · PWA',
  },
];

function Row({ cap, i, isOpen, onToggle }) {
  return (
    <div
      data-reveal
      data-reveal-delay={String((i % 5) + 1)}
      style={{
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '28px 0',
          display: 'grid',
          gridTemplateColumns: '60px 1fr 200px 28px',
          gap: 24,
          alignItems: 'center',
          color: isOpen ? 'var(--accent)' : 'var(--text)',
          transition: 'color 0.18s ease',
        }}
        className="cap-trigger"
      >
        <span className="section-num" style={{ color: isOpen ? 'var(--accent)' : 'var(--text-muted)' }}>
          0{i + 1}
        </span>
        <span className="display-3" style={{
          fontWeight: 600,
          fontStyle: 'italic',
          fontFamily: 'var(--font-serif)',
          letterSpacing: 0,
        }}>
          {cap.title}
        </span>
        <span className="caption mono show-md" style={{
          textAlign: 'right',
          letterSpacing: '0.04em',
          color: isOpen ? 'var(--accent-soft)' : 'var(--text-faint)',
        }}>
          {cap.detail}
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28,
        }}>
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>

      {/* Body */}
      <div style={{
        overflow: 'hidden',
        maxHeight: isOpen ? 400 : 0,
        opacity: isOpen ? 1 : 0,
        transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
      }}>
        <div style={{
          padding: '0 0 32px 84px',
          maxWidth: 760,
        }}>
          <p className="lead" style={{ color: 'var(--text-soft)', marginTop: 0 }}>
            {cap.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const [open, setOpen] = useState(2); // "Maintenance scheduling" aberta por padrão

  return (
    <section id="capabilities" className="section">
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
              02 — Platform
            </div>
          </div>

          {/* Main */}
          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 14 }}>
              <Asterisk size={20} />
              <span className="italic-tag" style={{ fontSize: 18, color: 'var(--text-soft)' }}>
                Our Capabilities
              </span>
            </div>

            <h2 className="display-2" data-reveal data-reveal-delay="1" style={{
              maxWidth: 880,
              marginBottom: 52,
            }}>
              Seis competências.
              <br />
              <span style={{ color: 'var(--text-muted)' }}>Uma plataforma desenhada de ponta a ponta.</span>
            </h2>

            {/* Accordion */}
            <div>
              {CAPS.map((cap, i) => (
                <Row
                  key={cap.title}
                  cap={cap}
                  i={i}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
              <hr className="divider" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cap-trigger:hover { color: var(--accent) !important; }
        .cap-trigger:hover .section-num { color: var(--accent); }
        @media (max-width: 768px) {
          .cap-trigger { grid-template-columns: 40px 1fr 24px !important; gap: 14px !important; }
          .cap-trigger .caption { display: none !important; }
        }
      `}</style>
    </section>
  );
}
