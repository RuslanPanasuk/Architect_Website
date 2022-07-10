// Loading spinner

window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display');
  }, 4000);
};


// Hamburger toggle

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});



// Smooth scroll behavior on/off by scroll-btn

// document.querySelector('.scroll-btn').addEventListener('click', () => {
//   document.querySelector('html').style.scrollBehavior = "smooth";
//   setTimeout(() => {
//     document.querySelector('html').style.scrollBehavior = "unset";
//   }, 1000)
// });