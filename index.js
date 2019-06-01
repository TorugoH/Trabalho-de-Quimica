const target = document.querySelectorAll('[data-anime]');

const animacaoClass='animacao';

function aScroll(){
  const janela =window.pageYOffset+((window.innerHeight*3)/4);//para a altura n ser no topo
  target.forEach(function(e){
    if((janela)> e.offsetTop){
      e.classList.add(animacaoClass);
    }
    else{
        e.classList.remove(animacaoClass);
    }
  })
}
aScroll();
if(target.length){
window.addEventListener('scroll',function(){
  aScroll();
  })
}
