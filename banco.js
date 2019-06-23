let busca=document.querySelector('.busca');
let item=document.querySelector('.item');
let resu=document.querySelector('.resultado');
let descri=document.querySelector('.descri');
let nome=document.querySelector('.nome');
let acompanhamento=document.querySelector('.acompanhamento');
let dados={
    /*dados das comidas*/     
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
                acompanhamentos:'arroz'+'</br>'+'feijão carioca'+'</br>'+'batata palha'+'</br>'+'repolho colorido'+'</br>'
                    +'alface crespa'+'</br>'+'cenoura ralada'+'</br>'+'beterraba cozida',
            },
    
        bife_de_panela:{
                name:'bife de panela',
                composicao:'',
                descricao:'Quando você ingere 100g  de carne voçê esta consumindo:'+'</br>'
                    +'Sódio 255mg'+'</br>'
                    +'Potássio 319mg'+'</br>',
                acompanhamentos:'arroz'+'</br>'+'feijão mexicano'+'</br>'+'mandioca ensopada'
                    +'</br>'+'rúcula com abacaxi'+'</br>'+'alface americana'+'</br>'+'beterraba ralada'+'</br>'+'vagem com milho',
            },  
    
       feijoada:{
            name:'feijoada',
            composicao:'feijão preto'+'</br>'+'linguiça’+’</br>’+’orelha de porco'+'</br>'+'rabo de porco'+'</br>'+'carne seca ',
            acompanhamentos:'arroz'+'</br> couve'+'</br>'+'torresmo',
            descricao:'Quando você ingere 100g de feijoada você está consumindo:'+'</br>'
                        +'11.6g  de Carboidratos'+'</br>'
                        +'32.4mg de Cálcio'+'</br>'
                        +'0.2mg  de Manganês'+'</br>'
                        +'31.9mg de Magnésio'+'</br>'
                        +'6.5g   de Lipídios'+'<br>'
                        +'105.5mg de Fósforo'+'<br>'
                        +'303.5mg de Potássio'+'</br>'
                        +'0.2ug  de Cobre'+'</br>'
                        +'0.8mg  de Zinco'+'</br>'
                        +'278.2mg de Sódio'+'</br>',
                },
        Peixe_ensopado:{
            name:'Peixe',
            composicao:'Peixe'+'</br>'+'molho',
            acompanhamentos:'arroz'+'</br>'+'feijão carioca'+'</br>'+'purê de batata'+'</br>'+'mix de alface',
            descricao:'Quando você ingere 100g de Peixe ensopado você está consumindo:'+'</br>'
                        +'8.3g de Lipídio'+'</br>',
                },
        fricassê_de_frango:{
            name:'Peito de frango desfiado',
            composicao:'Peito de  frango desfiado'+'</br>'+'milho verde'+'</br>'+'batata palha'+'</br>'+'requeijão cremoso'+'</br>'+'creme de leite',
            acompanhamentos:'arroz'+'</br>'+'feijão carioca'+'</br>'+'cenoura'+'</br>'+'alface americana',
            descricao:'Quando você ingere 100g de fricassê de frango você está consumindo:'+'</br>'
                        +'284mg  de Sódio'+'</br>'
                        +'121mg de Potássio'+'</br>',
            },
    Lagarto_ao_molho_madeira:{
            name:'Lagarto ao molho madeira',
            composicao:'largarto em fatias'+'</br>'+'tomates picados'+'</br>'+'vagem picada'+'</br>'+'vinho tinto seco'+'</br>'+'caldo de carne'+'</br>'+'cenoura picada'+'</br>'+'cebola roxa picada',
            acompanhamentos:'arroz'+'</br>'+'feijão carioca'+'</br>'+'rabanete'+'</br>'+'alface lisa'+'</br>'+'batata doce'+'</br>'+'couve ao alho',
            descricao:'Quando você ingere 100g de Lagarto ao molho madeira você está consumindo:'+'</br>'
                        +'385mg de Sódio'+'</br>',
    
            },
    Linguiça_de_frango_assada:{
            name:'linguiça de frango',
            composicao:'linguiça de frango'+'</br>'+'tomate'+'</br>'+'mandioca'+'</br>'+'cheiro verde'+'</br>'+'pimenta do reino'+'</br>'+'maionese',
            acompanhamentos:'arroz'+'</br>'+'feijão carioca'+'</br>'+'alface roxa'+'</br>'+'espaguete a bolonhesa'+'</br>'+'couve'+'</br>'+'pepino com limão',
            descricao:'Quando você ingere 100g de Linguiça de frango você está consumindo:'+'</br>'
                +'1214mg de Sódio'+'</br>'
                +'120mg de Potássio'+'</br>',
    
           },
    Feijão_tropeiro:{
        name:'feijão tropeiro',
        composicao:'feijão'+'</br>'+'bacon'+'</br>'+'linguiça calabresa'+'</br>'+'ovos cozidos'+'</br>'+'cebola picada'+'</br>'+'couve fatiado'+'</br>'+'alho picado',
        descricao:'Quando você ingere 100g de Feijão tropeiro você está consumindo:'+'</br>'
                +'398mg de Sódio'+'</br>'
                +'238mg de Potássio'+'</br>',
            },
    Medalhão_de_frango:{
                name:'medalhão de frango',
                composicao:'file de frango'+'</br>'+'bacon'+'</br>'+'presunto'+'</br>'+'dentes de alho'+'</br>'+'limão espremido'+'</br>'+'azeite',
                acompanhamento:'Arroz'+'</br>'+'feijão carioca'+'</br>'+'alface'+'</br>'+'couve'+'</br>'+'beterraba ralada'+'</br>'+'cenoura cozida',
                descricao:'Quando você ingere 100g de Medalhão de frango você está consumindo:'+'</br>'
                            +'625g de Sódio'+'</br>',
                
                },
    Costelinha_ao_molho_barbecue:{
                name:'Costela',
                composicao:'Costelinha de porco'+'</br>'+'limão'+'</br>'+'pimenta do reino'+'</br>’+’cebola picada'+'</br>'+'folha de louro'+'</br>'+'catchup'+'</br>'+'molho inglês',
                acompanhamento:'Arroz'+'</br>'+'feijão carioca'+'</br>'+'almeirão com laranja'+'</br>'+'alface americana'+'</br>'+'batata baroa'+'</br>'+'cenoura cozida'+'</br>'+'canjiquinha com linguiça',
                descricao:'Quando você ingere 100g de Costelinha ao Molho Barbecue você está consumindo:'+'</br>'
                    +'796mg de Sódio'+'</br>',
                    
                    },
    Lasanha:{
                name:'Lasanha',
                composicao:'mussarela'+'</br>'+'presunto'+'</br>'+'massa para lasanha'+'</br>'+'parmesão ralado'+'</br>'+'creme de leite'+'</br>'+'carne moída',
                descricao:'Quando você ingere 100g de Lasanha você está consumindo:'+'</br>'
                        +'373mg de Sódio'+'</br>'
                        +'196mg de Potássio'+'</br>'
                        +'88mg de Cálcio'+'</br>'
                        +'0.7mg de Ferro'+'</br>'
                        +'20mg de Magnésio'+'</br>',
                        },
    Frango_caipira:{
                name:'Frango Caipira',
                composicao:'frango'+'</br>'+'cheiro verde'+'</br>'+'cebola picada'+'</br>'+'pimenta do reino'+'</br>'+'dentes de alho amassados',            
                acompanhamento:'Arroz'+'</br>'+'feijão carioca'+'</br>'+'macarrão ao molho de tomate'+'</br>'+'alface'+'</br>'+'mostarda com abacaxi'+'</br>'+'vinagrete'+'</br>'+'cenoura cozida'+'</br>'+'lentilha',
                descricao:'Quando você ingere 100g de Frango Caipira você está consumindo:'+'</br>'
                        +'66.1mg de Cálcio'+'</br>'
                        +'23.2mg de Magnésio'+'</br>'
                        +'209.6mg de Fósforo'+'</br>'
                        +'2.1mg de Ferro'+'</br>'
                        +'223.6mg de Potássio'+'</br>'
                        +'0.2ug de Cobre'+'</br>'
                        +'2.7mg de Zinco'+'</br>'
                        +'53.2mg de Sódio'+'</br>',    
                            },
    Canjica:{
                name:'canjica',
                composicao:'leite comun ou leite de coco'+'</br>'+'milho branco ou verde ralado'+'</br>'+'açucar',
                descricao:'Quando você ingere 100g de Frango Caipira você está consumindo:'+'</br>'
                     +'2mg de Cálcio'+'</br>'
                     +'12.3mg de Magnésio'+'</br>'
                     +'48.5.6mg de Fósforo'+'</br>'
                     +'0.3mg de Ferro'+'</br>'
                     +'93mg de Potássio'+'</br>'
                     +'0.1ug de Cobre'+'</br>'
                     +'0.4mg de Zinco'+'</br>'
                     +'0.8mg de Sódio'+'</br>', 
                acompanhamento:'amendoin'+'</br>'+'canela',

            }                        
                              
                
    
    
        };
        
/*parte q faz tudo*/
busca.addEventListener('click',function(){
    /*so para mostra no console pra ver o q tem*/
    console.log(dados[item.value].descricao);
    console.log(dados[item.value].composicao);
    console.log(dados[item.value].name);
    /*aqui adiciona o objeto pesquisado*/   
    nome.innerHTML=dados[item.value].name;
    descri.innerHTML=dados[item.value].composicao;
    resu.innerHTML=dados[item.value].descricao;
    acompanhamento.innerHTML=dados[item.value].acompanhamentos;
});
