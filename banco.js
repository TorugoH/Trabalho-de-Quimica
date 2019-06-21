let busca=document.querySelector('.busca');
let it=document.querySelector('.item');
let resu=document.querySelector('.resultado');
let descri=document.querySelector('.descri');
let nome=document.querySelector('.nome');
/*Pegando o valor nutricional dos aliementos*/
 let dados={
        strogonoff:{
            name:'frango ou carne',
            composicao:'peito de frango(ou carne)'+'</br>'+
            'alho'+'</br>'+'maionese'+'</br>'+'maionese'+
            '</br>'+'manteiga'+'</br>'+'ketchup'+'</br>'+'mostarda'+'</br>'+'creme de leite',
            descricao:'Quando você ingere 100g de strogonofe de carne voçê esta consumondo:'+'</br>'
            +'28g de Calcio'+'</br>'
            +'22g de Magnesio'+'</br>'
            +'186mg de Fosforo'+'</br>'
            +'2.7g de Ferro'+'</br>'
            +'2g de Zinco'+'</br>',
        },
        bife_de_panela:{
            name:'bife de panela',
            composicao:'',
            descricao:'Quando você ingere 100g de strogonofe de carne voçê esta consumondo:'+'</br>'
            +'Sódio 255mg'+'</br>'
            +'Potássio 319mg'+'</br>',
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
