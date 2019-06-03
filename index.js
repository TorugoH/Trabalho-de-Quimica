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
  //Grafico. se colocar em outor arquivo ele n aparece
  var ctx=document.getElementsByClassName("line-chart");
  var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
      labels:["0","20","30","40"],
      datasets:[
        {
        label:"fusao",
        data:[-37,2,3,4,5],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"ebuliçao,e muito alta para representar graficamente",
        data:[5,4,3,2,1],
        borderWidth:6,
        borderColor:'green',
        backgroundColor:'transparent',

      },
      ]
    }


  });
