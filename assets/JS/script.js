const cordinha = document.querySelector('#cordinha');
const light = document.querySelector('.lamp-light');

  cordinha.addEventListener('click', () => {
    if (light.classList.contains('on')){
      light.classList.remove('on');
      light.classList.add('off');
      cordinha.classList.remove('on');
      cordinha.classList.add('off');
    } else {
      light.classList.remove('off');
      light.classList.add('on');
      cordinha.classList.remove('off');
      cordinha.classList.add('on');
    }
  });