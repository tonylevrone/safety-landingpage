import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Wordmark } from '../ui/Logo';

const LINKS = [
  { label: 'Inventário', href: '#inventory' },
  { label: 'Trial',      href: '#download' },
  { label: 'Manutenção', href: '#maintenance' },
  { label: 'Mobile',     href: '#mobile' },
  { label: 'Impacto',    href: '#impact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header style={{
      position: 'sticky',
      top: 0, zIndex: 50,
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      background: scrolled ? 'rgba(6, 7, 12, 0.78)' : 'rgba(6, 7, 12, 0.30)',
      borderBottom: `1px solid ${scrolled ? 'var(--hairline)' : 'transparent'}`,
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        minHeight: 'var(--nav-h)',
      }}>
        <a href="#hero" style={{ display: 'inline-flex' }}>
          <Wordmark size={14} />
        </a>

        <nav className="show-lg" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 32,
          marginLeft: 44,
          flex: 1,
        }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navlink-v3">
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span className="show-md mono" style={{
            fontSize: 11,
            color: 'var(--text-faint)',
            letterSpacing: '0.08em',
          }}>
            SP · BR
          </span>
          <a href="#download" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>
            <Download size={14} strokeWidth={2.2} />
            Trial 7 dias
          </a>
          <button
            className="hide-md"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              width: 38, height: 38, borderRadius: 999,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--hairline)',
              color: 'var(--text)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="hide-md" style={{
          position: 'fixed',
          inset: 'var(--nav-h) 0 0 0',
          background: 'rgba(6, 7, 12, 0.98)',
          backdropFilter: 'blur(28px)',
          padding: 28, zIndex: 40,
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: i % 2 === 0 ? 'var(--font-sans)' : 'var(--font-serif)',
              fontStyle: i % 2 === 0 ? 'normal' : 'italic',
              fontSize: 42,
              fontWeight: i % 2 === 0 ? 700 : 500,
              color: 'var(--text)',
              letterSpacing: i % 2 === 0 ? '-0.030em' : '-0.020em',
              padding: '18px 0',
              borderBottom: '1px solid var(--hairline)',
            }}>
              {l.label}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </a>
          ))}
        </div>
      )}

      <style>{`
        .navlink-v3 {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-soft);
          transition: color 0.15s ease;
          position: relative;
        }
        .navlink-v3::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .navlink-v3:hover, .navlink-v3:focus-visible {
          color: var(--accent);
        }
        .navlink-v3:hover::after { transform: scaleX(1); }
      `}</style>
    </header>
  );
}
