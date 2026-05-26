import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('[data-reveal], [data-word]');
    if (reduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // Word stagger inside a [data-reveal-words] container
          if (e.target.matches('[data-reveal-words]')) {
            const words = e.target.querySelectorAll('[data-word]');
            words.forEach((w, i) => {
              setTimeout(() => w.classList.add('is-visible'), i * 110);
            });
            io.unobserve(e.target);
            return;
          }
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal], [data-reveal-words]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
