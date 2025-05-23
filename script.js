document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll('img');
    let current = 0;

    // Erstes Bild sicher anzeigen
    images.forEach((img, i) => {
      img.classList.toggle('active', i === 0);
    });

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000);
  });
});

