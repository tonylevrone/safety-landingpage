import { useEffect, useRef, useState } from 'react';

export default function useCountUp(value, { duration = 1600 } = {}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const m = String(value).match(/^(\D*?)([\d.,]+)(.*)$/);
    if (!m) { setDisplay(value); return; }
    const [, prefix, numStr, suffix] = m;
    const num = parseFloat(numStr.replace(',', '.'));
    if (Number.isNaN(num)) { setDisplay(value); return; }
    const isInt = !numStr.includes('.') && !numStr.includes(',');
    const fmt = (n) => isInt ? Math.round(n).toString() : n.toFixed(1);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value); return;
    }

    setDisplay(`${prefix}0${suffix}`);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          io.unobserve(el);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(`${prefix}${fmt(num * eased)}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return [ref, display];
}
