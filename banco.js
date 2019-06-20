let busca=document.querySelector('.busca');
let it=document.querySelector('.item');
let resu=document.querySelector('.resultado');
let linha= document.createElement('br')
 let objeto={
       feijão:{
        descricao:'O feijão contem em uma porção 5,4mg '+document.write('<br>')+' de sodio,37mg de calcio ,3 mg de ferro',
        },
        carne:{
            descricao:'Ferro - 4,3mg/100g',
            descricao:'Fósforo - 276mg/100g,Potássio - 334mg/100g,Sódio - 69mg/100g,Magnésio - 24,5mg/100g,Cálcio - 5,4mg/100g,Contém também cloro, enxofre e silício',
        },
        wilson:{
            descricao:'ok',
        },
        vitor:{
            descricao:'falso',
        },
    };


busca.addEventListener('click',function(){
    console.log(objeto[it.value].descricao);
    if(objeto[it.value]==' '){
        resu.innerHTML='Não temos não';
    }
    else{
    resu.innerHTML=objeto[it.value].descricao;
    }
});
