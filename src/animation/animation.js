import { gsap } from 'gsap'

export const HomePageTitleAnimation = () => {
  const tl = gsap.timeline()
  tl.to('.animateMask', {
    width: '100%',
    duration: 0.5,
    stagger: 0.2,
    ease: 'power3.inOut'
  })
    .to('.animateMask', { height: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' })
    .from('.animateTitle', { y: 100, duration: 1, stagger: 0.2, ease: 'power3.out' }, '<')
    .from('.animateBtn', { y: 100, duration: 1, stagger: 0, ease: 'power3.out' }, '<0.5')
}

export const ChangeBGImages = (imgs) => {
  imgs.forEach((img, i) => {
    const tl = gsap.timeline({ delay: i * 4 })
    tl.to('#homeViewBg', { opacity: 0, duration: 1 })
      .set('#homeViewBg', { attr: { src: img } })
      .to('#homeViewBg', { opacity: 1, duration: 1 })
  });
}

export const CategoryTitleAnimation = () => {
  const tl = gsap.timeline()
  tl.to('.animateMask', { width: '100%', duration: 0.5, ease: 'power3.inOut' })
    .to('.animateMask', { height: 0, duration: 0.5, ease: 'power3.out', stagger: 0.2 })
    .from('.animateTitle', { y: 110, duration: 0.8, ease: 'power3.out' }, '<')
    .fromTo('.underscore', { opacity: 0 }, { opacity: 1, repeat: 4, ease: 'steps(1)', yoyo: true })
}

export const CategorySwitchAnimation = () => {
  gsap
    .timeline()
    .from('.animateTitle', { y: 110, duration: 0.8, ease: 'power3.out' })
    .fromTo(
      '.underscore',
      { opacity: 0 },
      { opacity: 1, repeat: 4, ease: 'steps(1)', yoyo: true }
    )
}

export const FilmCardAnimation = () => {
  gsap.fromTo(
    '.animateFilmCard',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'sine'
    }
  )
}

export const CalendarAnimation = () => {
  gsap
    .timeline()
    .to('.animateMask', {
      width: '100%',
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.inOut'
    })
    .to('.animateMask', { height: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' })
    .from('.animateTitle', { y: 150, duration: 1, stagger: 0.2, ease: 'power3.out' }, '<')
    .to('.animateTitle', { width: '100vw', duration: 0.1, ease: 'power4.out' })
    .from('#timeLine', { width: 0, duration: 1, ease: 'power4.out' }, '>')
    .from('.animateRiver', { y: 200, duration: 1, stagger: 0.2, ease: 'power3.out' })
    .fromTo(
      '.animateScreeningCard',
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.in' },
      '<0.5'
    )
}

export const ScreeningCardAnimation = () => {
  gsap.fromTo(
    '.animateScreeningCard',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.in' }
  )
}

export const moveTimeLine = (offset, n, startingSlideIndex) => {
  const tl = gsap.timeline()
  tl.to('.container', {
    duration: 1,
    x: -offset * (n - startingSlideIndex),
    ease: 'power2.inOut'
  })
    .to('.slide', { duration: 0.5, scale: 1, fontWeight: 400, ease: 'power2.inOut' }, '<')
    .to(
      `#slide${n}`,
      {
        duration: 1,
        scale: 1.5,
        fontWeight: 700,
        ease: 'power2.inOut'
      },
      '<'
    )
    .to('.day', { display: 'none', duration: 0.5, ease: 'power2.inOut' }, '<')
    .to(
      [`#slide${n + 1}`, `#slide${n - 1}`],
      { duration: 0.5, scale: 1.3, ease: 'power2.inOut' },
      '<0.2'
    )
    .to(`#slide${n} .day`, { display: 'block', duration: 0.5, ease: 'power2.inOut' }, '<0.2')
}


