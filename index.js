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
/*efeitor do titulo aprecer*/
function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
  }
  const titulo = document.querySelector('h1');
  escrever(titulo);
