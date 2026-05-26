/**
 * Logo Editorial: pequeno círculo laranja + wordmark "SafetyZ°"
 * O grau (°) é uma assinatura editorial — referência a calibração/precisão.
 */
export default function Logo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="9.5" fill="none" stroke="#2997FF" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="#2997FF" />
    </svg>
  );
}

export function Wordmark({ size = 16 }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: '-0.030em',
      color: 'var(--text)',
    }}>
      <Logo size={size + 4} />
      SafetyZ
      <span style={{
        color: 'var(--accent)',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: size + 2,
        marginLeft: -3,
      }}>°</span>
    </span>
  );
}
