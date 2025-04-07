const counters = document.querySelectorAll('.count-up');
let hasAnimated = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // in ms
    const isPercent = counter.textContent.includes('%');

    const startTimestamp = performance.now();

    const updateCounter = (now) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1); // clamp to [0,1]

      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(target * easedProgress);
      counter.textContent = isPercent
        ? `${currentValue}%`
        : currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = isPercent
          ? `${target}%`
          : target.toLocaleString(); // Ensure exact final value
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
    }
  });
}, {threshold: 0.3});

observer.observe(document.querySelector('.stats-row'));
