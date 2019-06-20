let busca=document.querySelector('.busca');
let it=document.querySelector('.item');
let resu=document.querySelector('.resultado');
let descri=document.querySelector('.descri');
let linha= document.createElement('br')
 let dados={
       feijão:{
        descricao:'O feijão contem em uma porção:'+'</br>' +' 5.4 mg de sodio'+'</br>'+ ' 37mg calcio ' +'</br>'+'3 mg de ferro',
        },
        carne:{
            descricao:'Fósforo - 276mg'+'</br>'+'Potássio - 334mg'+'</br>'+'Sódio - 69mg,Magnésio'+'</br>'+ ' 24,5mg,Cálcio - 5,4mg'+'</br>'+'Contém também cloro, enxofre e silício',
        },
        strogonoff:{
            descricao:'frango ou carne',
            composicao:'peito de frango(ou carne)'+'</br>'+'alho'+'</br>'+'maionese'+'</br>'+'maionese'+'</br>'+'manteiga'+'</br>'+'ketchup'+'</br>'+'mostarda'+'</br>'+'creme de leite',
        },
        vitor:{
            descricao:'falso',
        },
    };


busca.addEventListener('click',function(){
    /*so para mostra no console pra ver o q tem*/
    console.log(dados[it.value].descricao);
    /*aqui adiciona o objeto pesquisado*/
    resu.innerHTML=dados[it.value].descricao;
    descri.innerHTML=dados[it.value].composicao;
});
