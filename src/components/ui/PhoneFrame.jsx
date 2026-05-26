export default function PhoneFrame({ children, tilt = 0, width = 280 }) {
  return (
    <div style={{
      width,
      borderRadius: 44,
      padding: 9,
      background: 'linear-gradient(180deg, #1A2740, #0A1020)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xl)',
      transform: `rotate(${tilt}deg)`,
    }}>
      <div style={{
        borderRadius: 36,
        background: '#FFFFFF',
        overflow: 'hidden',
        position: 'relative',
        aspectRatio: '9 / 19.5',
      }}>
        <div style={{
          position: 'absolute', top: 7, left: '50%',
          transform: 'translateX(-50%)',
          width: 96, height: 22,
          background: '#000308', borderRadius: 999,
          zIndex: 2,
        }} />
        {children}
      </div>
    </div>
  );
}
