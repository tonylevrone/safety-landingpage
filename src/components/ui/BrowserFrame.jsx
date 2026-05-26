/**
 * BrowserFrame — chrome macOS minimalista.
 * Versão v2: bordas mais soltas, shadow mais profundo, transparência sutil.
 */
export default function BrowserFrame({ url, children }) {
  return (
    <div style={{
      borderRadius: 'var(--r-xl)',
      background: '#0A0F1E',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '11px 16px',
        borderBottom: '1px solid var(--hairline)',
        background: 'rgba(0, 0, 0, 0.35)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
        </div>
        {url && (
          <div style={{
            flex: 1, textAlign: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--text-faint)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hairline)',
            borderRadius: 999,
            padding: '5px 14px',
            maxWidth: 380, margin: '0 auto',
          }}>{url}</div>
        )}
        <div style={{ width: 48 }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
