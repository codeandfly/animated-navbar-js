const sections = document.querySelectorAll('section');
// const nav = document.querySelectorAll('#nav li a');
const navEffect = document.querySelector('.navEffect');
const gradients = [
  'linear-gradient(to right, #4776e6, #8e54e9)',
  'linear-gradient(to right, #ec008c, #fc6767)',
  'linear-gradient(to right, #f46b45, #eea849)',
  'linear-gradient(to right, #4cb8c4, #3cd3ad)'
];

const navCheck = entries => {
  // function navCheck(entries) {
  entries.forEach(entry => {
    // console.log(entry.target)
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };

    if (entry.isIntersecting) {
      // remove previous active class
      document.querySelector('.active').classList.remove('active');
      // add active class to newly observed section
      activeAnchor.classList.add('active');

      // apply border effect to active link
      navEffect.style.setProperty('left', `${directions.left}px`);
      navEffect.style.setProperty('top', `${directions.top}px`);
      navEffect.style.setProperty('width', `${directions.width}px`);
      navEffect.style.setProperty('height', `${directions.height}px`);
      navEffect.style.background = gradients[gradientIndex];
    }
  });
};

const options = {
  threshold: 0.8
};

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {
  observer.observe(section);
});
