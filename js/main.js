import {elements} from './constants.js'

function timer() {
  setInterval(() => {
    elements.SECONDS.textContent = parseInt(elements.SECONDS.textContent) - 1

    if (elements.SECONDS.textContent.length < 2) {
      elements.SECONDS.textContent = `0${elements.SECONDS.textContent}`
    }

    if (elements.SECONDS.textContent === '-1') {
      elements.SECONDS.textContent = 59
      elements.MINUTES.textContent = parseInt(elements.MINUTES.textContent) - 1
    }

    if (elements.MINUTES.textContent.length < 2) {
      elements.MINUTES.textContent = `0${elements.MINUTES.textContent}`
    }

    if (elements.MINUTES.textContent === '00') {
      elements.MINUTES.textContent = 59
      elements.OURS.textContent = parseInt(elements.OURS.textContent) - 1
    }

    if (elements.OURS.textContent.length < 2) {
      elements.OURS.textContent = `0${elements.OURS.textContent}`
    }
  }, 1000)
}
timer()

function chooseShoes(e) {
  elements.BIGIMAGE.src = e.target.src
  if (e.target.src === elements.BLACKSHOES.src) {
    elements.SELECTCOLOR.value = 'Black'
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  } else if (e.target.src === elements.ORANGESHOES.src) {
    elements.SELECTCOLOR.value = 'Orange'
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  } else if (e.target.src === elements.PINKSHOES.src) {
    elements.SELECTCOLOR.value = 'Pink'
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  } else if (e.target.src === elements.YELLOWSHOES.src) {
    elements.SELECTCOLOR.value = 'Yellow'
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }
}
elements.SHOESELEMENT.forEach(el => el.addEventListener('click', chooseShoes))
function chooseShoesColor() {
  if (elements.SELECTCOLOR.value === 'Black') {
    elements.BIGIMAGE.src = elements.BLACKSHOES.src

    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    elements.BLACKSHOES.classList.add('active')
  } else if (elements.SELECTCOLOR.value === 'Orange') {
    elements.BIGIMAGE.src = elements.ORANGESHOES.src
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    elements.ORANGESHOES.classList.add('active')
  } else if (elements.SELECTCOLOR.value === 'Pink') {
    elements.BIGIMAGE.src = elements.PINKSHOES.src
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    elements.PINKSHOES.classList.add('active')
  } else if (elements.SELECTCOLOR.value === 'Yellow') {
    elements.BIGIMAGE.src = elements.YELLOWSHOES.src
    elements.SHOESELEMENT.forEach(el => el.classList.remove('active'))
    elements.YELLOWSHOES.classList.add('active')
  }
}
elements.SELECTCOLOR.addEventListener('click', chooseShoesColor)
