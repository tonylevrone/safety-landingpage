/**
 * Asterisk — marcador editorial ✱ com rotação lenta infinita
 * Assinatura visual da v3.1
 */
export default function Asterisk({ size = 22, color = 'var(--accent)', spin = true }) {
  return (
    <span
      aria-hidden="true"
      className={spin ? 'asterisk-rotate' : ''}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 22 22">
        <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
          <line x1="11" y1="2"  x2="11" y2="20" />
          <line x1="2"  y1="11" x2="20" y2="11" />
          <line x1="4.5" y1="4.5"  x2="17.5" y2="17.5" />
          <line x1="17.5" y1="4.5" x2="4.5" y2="17.5" />
        </g>
      </svg>
    </span>
  );
}
