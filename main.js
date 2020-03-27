// document.addEventListener('DOMContentLoaded', () => {
//   console.log('dziala');
// })
// const rootElement = document.querySelector('#root')
// const sections = document.querySelectorAll('section')
// let currentSectionIndex = 0
// let isThrottled = false

// document.addEventListener('mousewheel', (event) => {

//   if (isThrottled) return
//   isThrottled = true
//   setTimeout(() => {
//     isThrottled = false
//   }, 1000)


//   const direction = event.wheelDelta < 0 ? 1 : -1



//   scroll(direction)

//   scrollToCurrentSectionIndex()

// })

// function scroll(direction) {
//   if (direction === 1) {
//     const isLastSection = currentSectionIndex === sections.length - 1
//     if (isLastSection) return
//   }
//   if (direction === -1) {
//     const isFirstSection = currentSectionIndex === 0
//     if (isFirstSection) return
//   }
//   currentSectionIndex += direction
// }

// function scrollToCurrentSectionIndex() {
//   sections[currentSectionIndex].scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   })
// }

//  PROGRAMOWANIE W PODEJSCIU FUNKCYJNYM KOLEJNY ETAP PRZEROBIENIE PROGRAMU NA PROGRAMOWANIE OBIEKTOWE

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('dziala');
// })
const scroller = new Scroller("#root")


document.addEventListener('wheel', (event) => {
  scroller.listenScroll(event)
})

//  document.addEventListener('mousewheel', scroller.listenScroll)   //SKROCONA WERSJA ZAPISU POWYZEJ
document.addEventListener('swipeUp', () => scroller.scroll(1))
document.addEventListener('swipeDown', () => scroller.scroll(-1))
document.addEventListener('keydown', (e) => {

  switch (e.keyCode) {
    case 40:
      return scroller.scroll(1)
      break;
    case 38:
      return scroller.scroll(-1)
      break;

    default:
      break;
  }
})