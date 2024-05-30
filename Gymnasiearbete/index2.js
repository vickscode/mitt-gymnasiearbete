document.addEventListener('DOMContentLoaded', function () {
  const movingImage = document.getElementById('movingImage');
  const targetSection1 = document.querySelector('.box1');
  const movingImage2 = document.getElementById('movingImage2');
  const targetSection2 = document.querySelector('.box2');
  const movingImage3 = document.getElementById('movingImage3');
  const targetSection3 = document.querySelector('.box3');

  movingImage.addEventListener('click', () => {
    const targetOffset = targetSection1.getBoundingClientRect().top;

    window.scrollTo({
      top: window.scrollY + targetOffset,
      behavior: 'smooth'
    });
  });

  movingImage2.addEventListener('click', () => {
    const targetOffset = targetSection2.getBoundingClientRect().top;

    window.scrollTo({
      top: window.scrollY + targetOffset,
      behavior: 'smooth'
    });
  });

  movingImage3.addEventListener('click', () => {
    const targetOffset = targetSection3.getBoundingClientRect().top;

    window.scrollTo({
      top: window.scrollY + targetOffset,
      behavior: 'smooth'
    });
  });
});
