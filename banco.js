let busca=document.querySelector('.busca');
let it=document.querySelector('.item');
let resu=document.querySelector('.resultado');
let descri=document.querySelector('.descri');
let nome=document.querySelector('.nome');
 let dados={
       feijão:{
        descricao:'O feijão contem em uma porção:'+'</br>' +' 5.4 mg de sodio'+'</br>'+ ' 37mg calcio ' +'</br>'+'3 mg de ferro',
        },
        carne:{
            descricao:'Fósforo'+'</br>'+'Potássio'+'</br>'+'Sódio,Magnésio'+'</br>'+ 'Cálcio'+'</br>'+'Contém também cloro, enxofre e silício',
        },
        strogonoff:{
            name:'frango ou carne',
            composicao:'peito de frango(ou carne)'+'</br>'+
            'alho'+'</br>'+'maionese'+'</br>'+'maionese'+
            '</br>'+'manteiga'+'</br>'+'ketchup'+'</br>'+'mostarda'+'</br>'+'creme de leite',
            descricao:'Na carne contem: Fósforo,Potássio,Sódio,Magnésio,Cálcio.Contém também cloro, enxofre e silício'+
            '</br>'+'Para a composição da mionese podemos ver em '+
            '<a href="https://pt.wikipedia.org/wiki/Maionese">maionese</a>'+'</br>',
        },
        v:{
            descricao:'',
        },
    };


busca.addEventListener('click',function(){
    /*so para mostra no console pra ver o q tem*/
    console.log(dados[it.value].descricao);
    console.log(dados[it.value].composicao);
    console.log(dados[it.value].name);
    /*aqui adiciona o objeto pesquisado*/   
    nome.innerHTML=dados[it.value].name;
    descri.innerHTML=dados[it.value].composicao;
    resu.innerHTML=dados[it.value].descricao;
});
