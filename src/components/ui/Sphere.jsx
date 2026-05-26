/**
 * Sphere — esfera 3D glossy laranja/preto.
 * Pure CSS via radial-gradients + inset shadows.
 * O elemento decorativo signature da v3.
 */
export default function Sphere({ size = 320, style, withRing = false }) {
  return (
    <div
      aria-hidden="true"
      className="sphere sphere-float"
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {withRing && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-12%',
            border: '1px solid rgba(41, 151, 255, 0.18)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
