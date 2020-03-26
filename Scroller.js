class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector)
    this.sections = document.querySelectorAll('section')
    const vissibleSection = [...this.sections]


    const currentSectionIndex = vissibleSection.findIndex((element) => this.isScrolledIntoView(element))

    // this.currentSectionIndex = vissibleSection.findIndex((element) => {
    //   return this.isScrolledIntoView(element)})
    //POWYZEJ SKROCONA WERSJA TEGO ZAPISU

    this.currentSectionIndex = Math.max(currentSectionIndex, 0)

    // this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex
    //  zapis zabezpieczający, żeby nie było wartości niższej od zera, 0 jest minimalną wartością, jak jest większa wartość to ona zostanie przypisana


    this.isThrottled = false

  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect()
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom)
    const isVissible = (elemTop >= 0) && (elemBottom <= window.innerHeight)

    return isVissible
  }

  listenScroll = (event) => {

    if (this.isThrottled) return
    this.isThrottled = true
    setTimeout(() => {

      this.isThrottled = false
    }, 1000)


    const direction = event.wheelDelta < 0 ? 1 : -1

    this.scroll(direction)

  }
  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1
      if (isLastSection) return
    }
    if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0
      if (isFirstSection) return
    }
    this.currentSectionIndex += direction
    this.scrollToCurrentSectionIndex()
  }
  scrollToCurrentSectionIndex = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}