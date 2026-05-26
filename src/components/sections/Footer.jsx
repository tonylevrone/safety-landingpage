import { Wordmark } from '../ui/Logo';

const COLS = [
  { title: 'Produto', items: ['Dashboard', 'Inventário', 'Manutenção', 'Mobile', 'Download'] },
  { title: 'Empresa', items: ['Sobre', 'Contato', 'Imprensa'] },
  { title: 'Suporte', items: ['Documentação', 'Status', 'Privacidade'] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid var(--hairline)',
      padding: '64px 0 36px',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle hairline glow on top */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: 0, left: '20%', right: '20%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent-glow), transparent)',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 48,
        }}>
          {/* Pull quote — moved to top of footer, bigger */}
          <div data-reveal style={{ paddingBottom: 36, borderBottom: '1px solid var(--hairline)' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(22px, 3vw, 38px)',
              lineHeight: 1.15,
              letterSpacing: '-0.020em',
              maxWidth: 1000,
              color: 'var(--text-soft)',
              fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
            }}>
              &ldquo;Não dá pra cuidar do que não se mede.
              <br />
              <span style={{ color: 'var(--text)' }}>
                Não dá pra confiar no que não se rastreia.
              </span>&rdquo;
            </div>
          </div>

          {/* Brand + cols */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1fr) auto',
            gap: 48, alignItems: 'flex-start',
          }} className="footer-grid">
            <div style={{ maxWidth: 380 }}>
              <Wordmark size={15} />
              <p style={{
                color: 'var(--text-muted)',
                fontSize: 14, lineHeight: 1.55,
                marginTop: 18,
              }}>
                Plataforma corporativa de gestão de equipamentos de segurança.
                Desenhada para operações que tratam segurança como prioridade.
              </p>
            </div>

            <div style={{
              display: 'flex', gap: 64, flexWrap: 'wrap',
            }}>
              {COLS.map((col) => (
                <div key={col.title}>
                  <div className="mono" style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    color: 'var(--text-faint)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 16,
                  }}>
                    / {col.title}
                  </div>
                  <ul style={{
                    listStyle: 'none', padding: 0, margin: 0,
                    display: 'flex', flexDirection: 'column', gap: 10,
                  }}>
                    {col.items.map((it) => (
                      <li key={it}>
                        <a href={it === 'Download' ? '#download' : '#'} className="footer-link-v3">{it}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            flexWrap: 'wrap',
            paddingTop: 28,
            borderTop: '1px solid var(--hairline)',
            fontSize: 12.5, color: 'var(--text-faint)',
          }}>
            <span className="mono">© {year} SafetyZ° · v3.1</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              Desenhado em São Paulo. Servindo operações onde estiverem.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-v3 {
          color: var(--text-soft);
          font-family: var(--font-body);
          font-size: 14px;
          transition: color 0.15s ease, padding-left 0.15s ease;
          display: inline-block;
        }
        .footer-link-v3:hover, .footer-link-v3:focus-visible {
          color: var(--accent);
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
}
