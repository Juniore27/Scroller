document.addEventListener('DOMContentLoaded', () => {
  console.log('dziala');
})
const rootElement = document.querySelector('#root')
const sections = document.querySelectorAll('section')

document.addEventListener('mousewheel', (event) => {
  console.log(event.wheelDelta);
})