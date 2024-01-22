let openSide = function () {
    leftCont.classList.remove('close-side')
    leftCont.classList.add('open-side') 
    blurredArea.classList.remove('maker--none')
    blurredArea.classList.add('maker--visible')
    modalBurger.classList.remove('maker--none')
    modalBurger.classList.add('maker--visible')
    modalTel.classList.remove('maker--visible')
    modalTel.classList.add('maker--none')
  
    leftCont.classList.remove('position--right')
    modalBurger.classList.remove('position--right')
    modalChat.classList.remove('position--right')
    modalTel.classList.remove('position--right')
  
    leftCont.classList.add('position--left')
  
  
  }
  buttonBurger.addEventListener('click', openSide)
  
  let closeSide = function () {
    leftCont.classList.remove('open-side')
    leftCont.classList.add('close-side')
    blurredArea.classList.remove('maker--visible')
    blurredArea.classList.add('maker--none')
  
    leftCont.classList.remove('position--right')
    leftCont.classList.add('position--left')
  }
  buttonCross.addEventListener('click', closeSide)
  
  //button open&close chat side
  
  
  let openChat = function () {
    leftCont.classList.remove('close-side')
    blurredArea.classList.remove('maker--none')
    modalChat.classList.remove('maker--none')
    modalBurger.classList.remove('maker--visible')
    leftCont.classList.remove('position--left')
    modalChat.classList.remove('position--left')
    
  
    leftCont.classList.add('open-side')
    blurredArea.classList.add('maker--visible')
    modalChat.classList.add('maker--visible')
    modalBurger.classList.add('maker--none')
    leftCont.classList.add('position--right')
    modalChat.classList.add('position--right')
    modalBurger.classList.add('position--right')
    modalTel.classList.add('position--right')
  
  }
  
  
  let closeChat = function () {
    blurredArea.classList.remove('maker--visible')
    blurredArea.classList.add('maker--none')
  
    modalChat.classList.remove('maker--visible')
    modalChat.classList.add('maker--none')
  
    leftCont.classList.remove('open-side')
    leftCont.classList.add('close-side')
    
  }
  buttonCrossChat.addEventListener('click', closeChat)
  
  //button open&close tel-side
  
  
  
  let openTel = function () {
    leftCont.classList.remove('close-side')
    leftCont.classList.add('open-side')
    blurredArea.classList.remove('maker--none')
    blurredArea.classList.add('maker--visible')
    leftCont.classList.remove('position--left')
    leftCont.classList.add('position--right')
  
    
    modalTel.classList.remove('maker--none')
    modalTel.classList.add('maker--visible')
    modalBurger.classList.remove('maker--visible')
    modalBurger.classList.add('maker--none')
  
  
  }
  
  let closeTel = function () {
    blurredArea.classList.remove('maker--visible')
    blurredArea.classList.add('maker--none')
  
    modalTel.classList.remove('maker--visible')
    modalTel.classList.add('maker--none')
  
    leftCont.classList.remove('open-side')
    leftCont.classList.add('close-side')
  
   
  }