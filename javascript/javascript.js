function run() {
  // переключение картинок
  document.querySelector('#castle-btn-icon-1').addEventListener('click', (event) => {
    document.querySelector('#castle-1').style.display = 'none'
    document.querySelector('#castle-2').style.display = 'block'
    console.log('switched to slide 2')
  })

  document.querySelector('#castle-btn-icon-2').addEventListener('click', (event) => {
    document.querySelector('#castle-2').style.display = 'none'
    document.querySelector('#castle-3').style.display = 'block'
    console.log('switched to slide 3')
  })

  document.querySelector('#castle-btn-icon-3').addEventListener('click', (event) => {
    document.querySelector('#castle-3').style.display = 'none'
    document.querySelector('#castle-1').style.display = 'block'
    console.log('switched to slide 1')
  })

  document.querySelector('#castle-btn-icon-4').addEventListener('click', (event) => {
    document.querySelector('#castle-4').style.display = 'none'
    document.querySelector('#castle-5').style.display = 'block'
    console.log('switched to slide 5')
  })

  document.querySelector('#castle-btn-icon-5').addEventListener('click', (event) => {
    document.querySelector('#castle-5').style.display = 'none'
    document.querySelector('#castle-6').style.display = 'block'
    console.log('switched to slide 6')
  })

  document.querySelector('#castle-btn-icon-6').addEventListener('click', (event) => {
    document.querySelector('#castle-6').style.display = 'none'
    document.querySelector('#castle-4').style.display = 'block'
    console.log('switched to slide 4')
  })

  document.querySelector('#castle-btn-icon-7').addEventListener('click', (event) => {
    document.querySelector('#castle-7').style.display = 'none'
    document.querySelector('#castle-8').style.display = 'block'
    console.log('switched to slide 8')
  })

  document.querySelector('#castle-btn-icon-8').addEventListener('click', (event) => {
    document.querySelector('#castle-8').style.display = 'none'
    document.querySelector('#castle-9').style.display = 'block'
    console.log('switched to slide 9')
  })

  document.querySelector('#castle-btn-icon-9').addEventListener('click', (event) => {
    document.querySelector('#castle-9').style.display = 'none'
    document.querySelector('#castle-7').style.display = 'block'
    console.log('switched to slide 7')
  })

  document.querySelector('#castle-btn-icon-10').addEventListener('click', (event) => {
    document.querySelector('#castle-10').style.display = 'none'
    document.querySelector('#castle-11').style.display = 'block'
    console.log('switched to slide 11')
  })

  document.querySelector('#castle-btn-icon-11').addEventListener('click', (event) => {
    document.querySelector('#castle-11').style.display = 'none'
    document.querySelector('#castle-12').style.display = 'block'
    console.log('switched to slide 12')
  })

  document.querySelector('#castle-btn-icon-12').addEventListener('click', (event) => {
    document.querySelector('#castle-12').style.display = 'none'
    document.querySelector('#castle-10').style.display = 'block'
    console.log('switched to slide 10')
  })

  document.querySelector('#castle-btn-icon-13').addEventListener('click', (event) => {
    document.querySelector('#castle-13').style.display = 'none'
    document.querySelector('#castle-14').style.display = 'block'
    console.log('switched to slide 14')
  })

  document.querySelector('#castle-btn-icon-14').addEventListener('click', (event) => {
    document.querySelector('#castle-14').style.display = 'none'
    document.querySelector('#castle-15').style.display = 'block'
    console.log('switched to slide 15')
  })

  document.querySelector('#castle-btn-icon-15').addEventListener('click', (event) => {
    document.querySelector('#castle-15').style.display = 'none'
    document.querySelector('#castle-13').style.display = 'block'
    console.log('switched to slide 13')
  })



  document.querySelector('.castlewrap').addEventListener('click', (event) => {
    let elem = event.srcElement
    if (!elem.classList.contains('btnback')) {
      let fill = elem.getAttribute('fill')
      if (fill === '#F44719') {
        elem.setAttribute('fill', '#34A3B2')
      } else if (fill === '#34A3B2') {
        elem.setAttribute('fill', '#FF9045')
      } else if (fill === '#FF9045') {
        elem.setAttribute('fill', '#F44719')
      }
    }
  })

  document.querySelector('.castlewrap2').addEventListener('click', (event) => {
    let elem = event.srcElement
    if (!elem.classList.contains('btnback')) {
      let fill = elem.getAttribute('fill')
      if (fill === '#F44719') {
        elem.setAttribute('fill', '#34A3B2')
      } else if (fill === '#34A3B2') {
        elem.setAttribute('fill', '#FF9045')
      } else if (fill === '#FF9045') {
        elem.setAttribute('fill', '#F44719')
      }
    }
  })

  document.querySelector('.castlewrap3').addEventListener('click', (event) => {
    let elem = event.srcElement
    if (!elem.classList.contains('btnback')) {
      let fill = elem.getAttribute('fill')
      if (fill === '#F44719') {
        elem.setAttribute('fill', '#34A3B2')
      } else if (fill === '#34A3B2') {
        elem.setAttribute('fill', '#FF9045')
      } else if (fill === '#FF9045') {
        elem.setAttribute('fill', '#F44719')
      }
    }
  })

  document.querySelector('.castlewrap4').addEventListener('click', (event) => {
    let elem = event.srcElement
    if (!elem.classList.contains('btnback')) {
      let fill = elem.getAttribute('fill')
      if (fill === '#F44719') {
        elem.setAttribute('fill', '#34A3B2')
      } else if (fill === '#34A3B2') {
        elem.setAttribute('fill', '#FF9045')
      } else if (fill === '#FF9045') {
        elem.setAttribute('fill', '#F44719')
      }
    }
  })

  document.querySelector('.castlewrap5').addEventListener('click', (event) => {
    let elem = event.srcElement
    if (!elem.classList.contains('btnback')) {
      let fill = elem.getAttribute('fill')
      if (fill === '#F44719') {
        elem.setAttribute('fill', '#34A3B2')
      } else if (fill === '#34A3B2') {
        elem.setAttribute('fill', '#FF9045')
      } else if (fill === '#FF9045') {
        elem.setAttribute('fill', '#F44719')
      }
    }
  })

  document.querySelector('#question1').addEventListener('click', (event) => {
    document.querySelector('#question1').style.display = 'none'
    document.querySelector('#answer1').style.display = 'block'
    console.log('switched to slide 2')
  })

  document.querySelector('#answer1').addEventListener('click', (event) => {
    document.querySelector('#answer1').style.display = 'none'
    document.querySelector('#question1').style.display = 'block'
    console.log('switched to slide 1')
  })

  document.querySelector('#question2').addEventListener('click', (event) => {
    document.querySelector('#question2').style.display = 'none'
    document.querySelector('#answer2').style.display = 'block'
    console.log('switched to slide 2')
  })

  document.querySelector('#answer2').addEventListener('click', (event) => {
    document.querySelector('#answer2').style.display = 'none'
    document.querySelector('#question2').style.display = 'block'
    console.log('switched to slide 1')
  })

  document.querySelector('#question3').addEventListener('click', (event) => {
    document.querySelector('#question3').style.display = 'none'
    document.querySelector('#answer3').style.display = 'block'
    console.log('switched to slide 2')
  })

  document.querySelector('#answer3').addEventListener('click', (event) => {
    document.querySelector('#answer3').style.display = 'none'
    document.querySelector('#question3').style.display = 'block'
    console.log('switched to slide 1')
  })

  document.querySelector('.lab').addEventListener('click', (event) => {
    let elem = event.srcElement, // элемент, который нужно повернуть
        str  = elem.style.transform // начальное положение элемента, которое нужно заменить на новое
    str = Number(str.replace('rotate(', '').replace('deg)', '')) + 90 // новое значение
    elem.style.transform = 'rotate(' + str + 'deg)'
  })

  // init after document was loaded
  Array.from(document.querySelector('.lab').children).forEach((item, i) => {
    item.style.transform = 'rotate(' + (90 * i) + 'deg)'
  });

  document.querySelector('#lock').addEventListener('click', (event) => {
    document.querySelector('#lock').style.display = 'none'
    document.querySelector('#letter').style.display = 'block'
  })

  document.querySelector('#close').addEventListener('click', (event) => {
    document.querySelector('#letter').style.display = 'none'
  })


  document.querySelector('.fountainbutton').addEventListener('click', (event) => {
    let fountain = event.srcElement,
        water    = document.querySelector('#water'),
        top      = Math.round(water.offsetTop / water.offsetParent.offsetHeight * 100),
        height   = Math.round(water.offsetHeight / water.offsetParent.offsetHeight * 100),
        step     = 1
    console.log(top, height)

    if (!fountain.dataset.direction) {
      fountain.dataset.direction = -1
    }

    if (top === 29 || top === 56) {
      fountain.dataset.direction = -fountain.dataset.direction
    }
    water.style.top    = (top    - step * fountain.dataset.direction) + '%'
    water.style.height = (height + step * fountain.dataset.direction) + '%'

  })

}

window.onload = run
