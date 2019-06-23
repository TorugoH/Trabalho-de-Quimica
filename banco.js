let busca = document.querySelector('.busca');
let item = document.querySelector('.item');
let resu = document.querySelector('.resultado');
let descri = document.querySelector('.descri');
let nome = document.querySelector('.nome');
let acompanhamento = document.querySelector('.acompanhamento');
let dados = {
    /*dados das comidas*/
    strogonoff: {
        name: 'frango ou carne',
        composicao: 'peito de frango(ou carne)' + '</br>' +
            'alho' + '</br>' + 'maionese' + '</br>' + 'maionese' +
            '</br>' + 'manteiga' + '</br>' + 'ketchup' + '</br>' + 'mostarda' + '</br>' + 'creme de leite',
        descricao: 'Quando você ingere 100g de strogonofe de carne voçê esta consumondo:' + '</br>'
            + '28g de Calcio' + '</br>'
            + '22g de Magnesio' + '</br>'
            + '186mg de Fosforo' + '</br>'
            + '2.7g de Ferro' + '</br>'
            + '2g de Zinco' + '</br>',
        acompanhamentos: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'batata palha' + '</br>' + 'repolho colorido' + '</br>'
            + 'alface crespa' + '</br>' + 'cenoura ralada' + '</br>' + 'beterraba cozida',
    },

    bife_de_panela: {
        name: 'bife de panela',
        composicao: '',
        descricao: 'Quando você ingere 100g  de carne voçê esta consumindo:' + '</br>'
            + 'Sódio 255mg' + '</br>'
            + 'Potássio 319mg' + '</br>',
        acompanhamentos: 'arroz' + '</br>' + 'feijão mexicano' + '</br>' + 'mandioca ensopada'
            + '</br>' + 'rúcula com abacaxi' + '</br>' + 'alface americana' + '</br>' + 'beterraba ralada' + '</br>' + 'vagem com milho',
    },

    feijoada: {
        name: 'feijoada',
        composicao: 'feijão preto' + '</br>' + 'linguiça' + '</br>' + 'orelha de porco' + '</br>' + 'rabo de porco' + '</br>' + 'carne seca ',
        acompanhamentos: 'arroz' + '</br> couve' + '</br>' + 'torresmo',
        descricao: 'Quando você ingere 100g de feijoada você está consumindo:' + '</br>'
            + '11.6g  de Carboidratos' + '</br>'
            + '32.4mg de Cálcio' + '</br>'
            + '0.2mg  de Manganês' + '</br>'
            + '31.9mg de Magnésio' + '</br>'
            + '6.5g   de Lipídios' + '<br>'
            + '105.5mg de Fósforo' + '<br>'
            + '303.5mg de Potássio' + '</br>'
            + '0.2ug  de Cobre' + '</br>'
            + '0.8mg  de Zinco' + '</br>'
            + '278.2mg de Sódio' + '</br>',
    },
    peixe_ensopado: {
        name: 'Peixe',
        composicao: 'Peixe' + '</br>' + 'molho',
        acompanhamentos: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'purê de batata' + '</br>' + 'mix de alface',
        descricao: 'Quando você ingere 100g de Peixe ensopado você está consumindo:' + '</br>'
            + '8.3g de Lipídio' + '</br>',
    },
    fricassê_de_frango: {
        name: 'Peito de frango desfiado',
        composicao: 'Peito de  frango desfiado' + '</br>' + 'milho verde' + '</br>' + 'batata palha' + '</br>' + 'requeijão cremoso' + '</br>' + 'creme de leite',
        acompanhamentos: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'cenoura' + '</br>' + 'alface americana',
        descricao: 'Quando você ingere 100g de fricassê de frango você está consumindo:' + '</br>'
            + '284mg  de Sódio' + '</br>'
            + '121mg de Potássio' + '</br>',
    },
    lagarto_ao_molho_madeira: {
        name: 'Lagarto ao molho madeira',
        composicao: 'largarto em fatias' + '</br>' + 'tomates picados' + '</br>' + 'vagem picada' + '</br>' + 'vinho tinto seco' + '</br>' + 'caldo de carne' + '</br>' + 'cenoura picada' + '</br>' + 'cebola roxa picada',
        acompanhamentos: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'rabanete' + '</br>' + 'alface lisa' + '</br>' + 'batata doce' + '</br>' + 'couve ao alho',
        descricao: 'Quando você ingere 100g de Lagarto ao molho madeira você está consumindo:' + '</br>'
            + '385mg de Sódio' + '</br>',

    },
    linguiça_de_frango_assada: {
        name: 'linguiça de frango',
        composicao: 'linguiça de frango' + '</br>' + 'tomate' + '</br>' + 'mandioca' + '</br>' + 'cheiro verde' + '</br>' + 'pimenta do reino' + '</br>' + 'maionese',
        acompanhamentos: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'alface roxa' + '</br>' + 'espaguete a bolonhesa' + '</br>' + 'couve' + '</br>' + 'pepino com limão',
        descricao: 'Quando você ingere 100g de Linguiça de frango você está consumindo:' + '</br>'
            + '1214mg de Sódio' + '</br>'
            + '120mg de Potássio' + '</br>',

    },
    feijão_tropeiro: {
        name: 'feijão tropeiro',
        composicao: 'feijão' + '</br>' + 'bacon' + '</br>' + 'linguiça calabresa' + '</br>' + 'ovos cozidos' + '</br>' + 'cebola picada' + '</br>' + 'couve fatiado' + '</br>' + 'alho picado',
        descricao: 'Quando você ingere 100g de Feijão tropeiro você está consumindo:' + '</br>'
            + '398mg de Sódio' + '</br>'
            + '238mg de Potássio' + '</br>',
    },
    medalhão_de_frango: {
        name: 'medalhão de frango',
        composicao: 'file de frango' + '</br>' + 'bacon' + '</br>' + 'presunto' + '</br>' + 'dentes de alho' + '</br>' + 'limão espremido' + '</br>' + 'azeite',
        acompanhamento: 'Arroz' + '</br>' + 'feijão carioca' + '</br>' + 'alface' + '</br>' + 'couve' + '</br>' + 'beterraba ralada' + '</br>' + 'cenoura cozida',
        descricao: 'Quando você ingere 100g de Medalhão de frango você está consumindo:' + '</br>'
            + '625g de Sódio' + '</br>',

    },
    costelinha_ao_molho_barbecue: {
        name: 'Costela',
        composicao: 'Costelinha de porco' + '</br>' + 'limão' + '</br>' + 'pimenta do reino' + '</br>' + 'cebola picada' + '</br>' + 'folha de louro' + '</br>' + 'catchup' + '</br>' + 'molho inglês',
        acompanhamento: 'Arroz' + '</br>' + 'feijão carioca' + '</br>' + 'almeirão com laranja' + '</br>' + 'alface americana' + '</br>' + 'batata baroa' + '</br>' + 'cenoura cozida' + '</br>' + 'canjiquinha com linguiça',
        descricao: 'Quando você ingere 100g de Costelinha ao Molho Barbecue você está consumindo:' + '</br>'
            + '796mg de Sódio' + '</br>',

    },
    lasanha: {
        name: 'Lasanha',
        composicao: 'mussarela' + '</br>' + 'presunto' + '</br>' + 'massa para lasanha' + '</br>' + 'parmesão ralado' + '</br>' + 'creme de leite' + '</br>' + 'carne moída',
        descricao: 'Quando você ingere 100g de Lasanha você está consumindo:' + '</br>'
            + '373mg de Sódio' + '</br>'
            + '196mg de Potássio' + '</br>'
            + '88mg de Cálcio' + '</br>'
            + '0.7mg de Ferro' + '</br>'
            + '20mg de Magnésio' + '</br>',
    },
    frango_caipira: {
        name: 'Frango Caipira',
        composicao: 'frango' + '</br>' + 'cheiro verde' + '</br>' + 'cebola picada' + '</br>' + 'pimenta do reino' + '</br>' + 'dentes de alho amassados',
        acompanhamento: 'Arroz' + '</br>' + 'feijão carioca' + '</br>' + 'macarrão ao molho de tomate' + '</br>' + 'alface' + '</br>' + 'mostarda com abacaxi' + '</br>' + 'vinagrete' + '</br>' + 'cenoura cozida' + '</br>' + 'lentilha',
        descricao: 'Quando você ingere 100g de Frango Caipira você está consumindo:' + '</br>'
            + '66.1mg de Cálcio' + '</br>'
            + '23.2mg de Magnésio' + '</br>'
            + '209.6mg de Fósforo' + '</br>'
            + '2.1mg de Ferro' + '</br>'
            + '223.6mg de Potássio' + '</br>'
            + '0.2ug de Cobre' + '</br>'
            + '2.7mg de Zinco' + '</br>'
            + '53.2mg de Sódio' + '</br>',
    },
    canjica: {
        name: 'canjica',
        composicao: 'leite comun ou leite de coco' + '</br>' + 'milho branco ou verde ralado' + '</br>' + 'açucar',
        descricao: 'Quando você ingere 100g de Frango Caipira você está consumindo:' + '</br>'
            + '2mg de Cálcio' + '</br>'
            + '12.3mg de Magnésio' + '</br>'
            + '48.5.6mg de Fósforo' + '</br>'
            + '0.3mg de Ferro' + '</br>'
            + '93mg de Potássio' + '</br>'
            + '0.1ug de Cobre' + '</br>'
            + '0.4mg de Zinco' + '</br>'
            + '0.8mg de Sódio' + '</br>',
        acompanhamento: 'amendoin' + '</br>' + 'canela',

    },
    bife_de_frango: {
        name: 'Bife de frango',
        composicao: '',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 34,8 mgm' + '</br>'
            + 'Fosforo 249,4 mg' + '</br>'
            + 'Ferro 1,1 mg' + '</br>'
            + 'Potássio 407,6 mg' + '</br>'
            + 'Cobre 0,1 ug' + '</br>'
            + 'Zinco 0,8 mg' + '</br>'
            + 'Sódio 122,3 mg' + '</br>',
        acompanhamento: 'Alface crespa' + '</br>' + 'Acelga com manga' + '</br>' + 'Cenoura com cheiro verde' + '</br>' + 'Antepasto de abobrinha ',
    },
    alface_crespa: {
        name: 'Alface crespa',
        composicao: 'E uma salada',
        descricao: 'Manganês 0,2 mg' + '</br>'
            + 'Magnésio 11,0 mg' + '</br>'
            + 'Fosforo 25,8 mg' + '</br>'
            + 'Ferro 0,4 mg' + '</br>'
            + 'Potássio 267,1 mg' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 3,4 mg' + '</br>',
    },
    acelga_com_manga: {
        name: 'Acelga_com_manga',
        composicao: 'E uma salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 10,4 mg' + '</br>'
            + 'Fosforo 40 mg' + '</br>'
            + 'Ferro 0,3 mg' + '</br>'
            + 'Potássio 239.8 mg' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 1.2 mg' + '</br>',
    },
    cenoura: {
        name: 'Cenoura',
        composicao: 'E uma salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 14,5 mg' + '</br>'
            + 'Fosforo 26.7 mg' + '</br>'
            + 'Ferro 0,1 mg' + '</br>'
            + 'Potássio 175.5 mg' + '</br>'
            + 'Zinco 0.2 mg' + '</br>'
            + 'Sódio 7.9mg' + '</br>',
    },
    Cheiro_verde: {
        name: 'cheiro verde',
        composicao: 'E uma salada',
        descricao: 'Manganês 1,88 mg' + '</br>'
            + 'Magnésio 21 mg' + '</br>'
            + 'Fosforo 49 mg' + '</br>'
            + 'Ferro 3,2 mg' + '</br>'
            + 'Potássio 711 mg' + '</br>'
            + 'Zinco 1,3 mg' + '</br>'
            + 'Sódio 2 mg' + '</br>',
    },
    Cebolinha: {
        name: 'cebolinha',
        composicao: 'E uma salada',
        descricao: 'Manganês 0,13 mg' + '</br>'
            + 'Magnésio 25 mg' + '</br>'
            + 'Fosforo 27 mg' + '</br>'
            + 'Ferro 0,6 mg' + '</br>'
            + 'Potássio 206 mg' + '</br>'
            + 'Cobre 0,04 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 2 mg' + '</br>'
    },
    antepasto_de_abobrinha: {
        name: 'Antepasto de abobrinha',
        composicao: 'salada',
        descricao: 'Manganês 0,11 mg' + '</br>'
            + 'Magnésio 17 mg' + '</br>'
            + 'Fosforo 22 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 126 mg' + '</br>'
            + 'Cobre 0,01 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 1 mg' + '</br>'
    },
    Lombo_ao_molho: {
        name: 'Lombo ao molho',
        composicao: '',
        descricao: 'Magnésio 18,1 mg' + '</br>'
            + 'Fosforo 238,4 mg' + '</br>'
            + 'Ferro 0,5 mg' + '</br>'
            + 'Potássio 311,1 mg' + '</br>'
            + 'Zinco 1,8 mg' + '</br>'
            + 'Sódio 38,9 mg' + '</br>',
        acompanhamento: ';-;',
    },
    quibe: {
        name: 'Quibe',
        composicao: 'trigo para quibe' + '</br>' + 'carne moida' + '</br>' + 'cebola picada' + '</br>' + 'hortelã picada' + '</br>' + 'pimenta-síria',
        acompanhamento: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'sapicão' + '</br>' + 'couve com laranja' + '</br>' + 'repolho' + '</br>' + 'salada grega',
        descricao: 'Quando você ingere 100g de Quibe frito você está consumindo:' + '</br>'
            + '21.7mg de Cálcio' + '</br>'
            + '0.7mg de Manganê' + '</br>'
            + '38.8mg de Magnésio' + '</br>'
            + '165.8mg de Fósforo' + '</br>'
            + '2.0mg de Ferro' + '</br>'
            + '322.5mg de Potássio' + '</br>'
            + '0.2ug de Cobre' + '</br>'
            + '2.8mg de Zinco' + '</br>'
            + '835.8mg de Sódio' + '</br>',
    },
    frango_xadrez: {
        name: 'Frango Xadrez',
        composicao: 'cebola cortada em cubos' + '</br>' + 'filé de frango sem pele' + '</br>' + 'dentes de alho esmagados' + '</br>' + 'pimentão' + '</br>' + 'amendoim torrado',
        acompanhamento: 'arroz' + '</br>' + 'feijão carioca' + '</br>' + 'espaguete ao molho de tomate' + '</br>' + ' acelga ao molho de laranja' + '</br>' + 'tomate com orégano' + '</br>' + 'abobrinha com milho',
        descricao: 'Quando você ingere 100g de Frango Xadrez você está consumindo:' + '</br>'
            + '553mg de Sódio' + '</br>'
            + '267mg de Potássio' + '</br>',
    },
    alface_lisa: {
        name: 'Alface lisa',
        composicao: 'salada',
        descricao: 'Manganês 0,3 mg' + '</br>'
            + 'Magnésio 9,1 mg' + '</br>'
            + 'Fosforo 26,1 mg' + '</br>'
            + 'Ferro 0,6 mg' + '</br>'
            + 'Potássio 348,7 mg' + '</br>'
            + 'Zinco 0,4 mg' + '</br>'
            + 'Sódio 4,2 mg' + '</br>',
        acompanhamento: '',
    },
    tomate: {
        name: 'Tomate',
        composicao: 'salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 10,5 mg' + '</br>'
            + 'Fosforo 20,2 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 222,4 mg' + '</br>'
            + 'Zinco 0,1 mg' + '</br>'
            + 'Sódio 1,0 mg' + '</br>'
    },
    palmito: {
        name: 'palmito',
        composicao: 'salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 25,5 mg' + '</br>'
            + 'Fosforo 55,0 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 206,4 mg' + '</br>'
            + 'Cobre 0,1 ug' + '</br>'
            + 'Zinco 0,4 mg' + '</br>'
            + 'Sódio 562,7 mg' + '</br>'
    },
    lombo_assado: {
        name: 'Lombo',
        composicao: 'lombo' + '</br>' + 'cebolas' + '</br >' + 'dentes de alho' + '</br >' + 'Alecrim' + '</br >' + 'vinho branco' + '</br >' + 'suco de laranja' + '</br >' + 'suco de limão',
        acompanhamento: 'arroz' + '</br >' + 'tutu de feijão' + '</br >' + 'couve ao alho' + '</br >' + ' alface lisa' + '</br >' + 'tomate com cheiro verde' + '</br >' + 'lentilha refogada',
        descricao: 'Quando você ingere 100g de Lombo Assado você está consumindo:' + '</br>'
            + '19.5mg de Cálcio' + '</br>'
            + '18.1mg de Magnésio' + '</br >'
            + '238.4mg de Fósforo' + '</br >'
            + '0.5mg de Ferro' + '</br >'
            + '311.1mg de Potássio' + '</br >'
            + '38.9mg de Sódio' + '</br >',
    },

    'mostarda': {
        name: 'Mostarda',
        composicao: 'salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 15,6 mg' + '</br>'
            + 'Fosforo 58,4 mg' + '</br>'
            + 'Ferro 1,1 mg' + '</br>'
            + 'Potássio 363,6 mg' + '</br>'
            + 'Cobre 0,1 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 2,9 mg' + '</br>',
        acompanhamento: ''
    },
    batata_doce: {
        name: 'Batata doce',
        composicao: 'salada',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 11,2 mg' + '</br>'
            + 'Fosforo 15,4 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 148,4 mg' + '</br>'
            + 'Cobre 0,1 ug' + '</br>'
            + 'Zinco 0,1 mg' + '</br>'
            + 'Sódio 2,7 mg' + '</br>',
        acompanhamento: ''
    },
    salsa: {
        name: 'salsa',
        composicao: 'salda',
        descricao: 'Manganês 1,88 mg' + '</br>'
            + 'Magnésio 21 mg' + '</br>'
            + 'Fosforo 49 mg' + '</br>'
            + 'Ferro 3,2 mg' + '</br>'
            + 'Potássio 711 mg' + '</br>'
            + 'Cobre 0,20 ug' + '</br>'
            + 'Zinco 1,3 mg' + '</br>'
            + 'Sódio 2 mg' + '</br>',
        acompanhamento: '',
    },
    cebolinha: {
        name: 'salsa',
        composicao: 'salda',
        descricao: 'Manganês 0,13 mg' + '</br>'
            + 'Magnésio 25 mg' + '</br>'
            + 'Fosforo 27 mg' + '</br>'
            + 'Ferro 0,6 mg' + '</br>'
            + 'Potássio 206 mg' + '</br>'
            + 'Cobre 0,04 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 2 mg' + '</br>',
        acompanhamento: '',

    },
    couve: {
        name: 'couver',
        descricao: 'Manganês 0,1 mg' + '</br>'
            + 'Magnésio 26,2 mg' + '</br>'
            + 'Fosforo 33,4 mg' + '</br>'
            + 'Ferro 0,5 mg' + '</br>'
            + 'Potássio 314,9 mg' + '</br>'
            + 'Zinco 0,2 mg' + '</br>'
            + 'Sódio 11,5 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },

    alho: {
        name: 'alho',
        descricao: 'Manganês 0,24 mg' + '</br>'
            + 'Magnésio  mg' + '</br>'
            + 'Fosforo 149 mg' + '</br>'
            + 'Ferro 0,8 mg' + '</br>'
            + 'Potássio 535 mg' + '</br>'
            + 'Cobre 0,15 ug' + '</br>'
            + 'Zinco 0,8 mg' + '</br>'
            + 'Sódio 5 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },

    abacaxi: {
        descricao: 'Manganês 1,62 mg' + '</br>'
            + 'Magnésio  mg' + '</br>'
            + 'Fosforo 13 mg' + '</br>'
            + 'Ferro 0,3 mg' + '</br>'
            + 'Potássio 131 mg' + '</br>'
            + 'Cobre 0,11ug' + '</br>'
            + 'Zinco 0,1 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },
    repolho: {
        name: 'Repolho',
        descricao: 'Manganês 0,13 mg' + '</br>'
            + 'Magnésio 9 mg' + '</br>'
            + 'Fosforo 14 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 150 mg' + '</br>'
            + 'Cobre 0,02 ug' + '</br>'
            + 'Zinco 0,2 mg' + '</br>'
            + 'Sódio 4 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },

    repolho_roxo: {
        name: 'Repolho Roxo',
        descricao: 'Manganês 0,25 mg' + '</br>'
            + 'Magnésio  mg' + '</br>'
            + 'Fosforo 58 mg' + '</br>'
            + 'Ferro 0,5 mg' + '</br>'
            + 'Potássio 328 mg' + '</br>'
            + 'Cobre 0,90 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 2 m' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },


    alface_roxa: {
        name: 'Alfce Roxa',
        descricao: 'Manganês 0,12 mg' + '<br>'
            + 'Magnésio 9 mg' + '<br>'
            + 'Fosforo 51 mg' + '<br>'
            + 'Ferro 2, 5 mg' + '<br>'
            + 'Potássio 308 mg' + '<br>'
            + 'Cobre 0, 04ug' + '<br>'
            + 'Zinco 0, 2 mg' + '<br>'
            + 'Sódio 7 mg' + '<br>',
        composicao: ' ',
        acompanhamento: ' '
    },

    espinafre: {
        name: 'Espinafre',
        descricao: 'Manganês 0,71 mg' + '</br>'
            + 'Magnésio  mg' + '</br>'
            + 'Fosforo 25 mg' + '</br>'
            + 'Ferro 0,4 mg' + '</br>'
            + 'Potássio 336 mg' + '</br>'
            + 'Cobre 0,06 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 17 mg' + '</br>',
        descricao: ' ',
        acompanhamento: ' '
    },


    beterraba: {
        name: 'Beterrba',
        descricao: 'Manganês 0,19 mg' + '</br>'
            + 'Magnésio  mg' + '</br>'
            + 'Fosforo 30 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 245 mg' + '</br>'
            + 'Cobre 0,04 ug' + '</br>'
            + 'Zinco 0,4 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' '
    },

    queijo: {
        name: 'Queijo',
        descricao: 'Manganês 0,03 mg' + '</br>'
            + 'Magnésio 27 mg' + '</br>'
            + 'Fosforo 403 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 120 mg' + '</br>'
            + 'Cobre 0,07 ug' + '</br>'
            + 'Zinco 2,7 mg' + '</br>'
            + 'Sódio 501 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' '
    },

    agrião: {
        name: 'Agrião',
        descricao: 'Manganês 0,28 mg' + '</br>'
            + 'Magnésio 18 mg' + '</br>'
            + 'Fosforo 51 mg' + '</br>'
            + 'Ferro 3,1 mg' + '</br>'
            + 'Potássio 218 mg' + '</br>'
            + 'Cobre 0,10 ug' + '</br>'
            + 'Zinco 0,7 mg' + '</br>'
            + 'Sódio 7 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' '
    },

    laranja: {
        name: 'Laranja',
        descricao: 'Manganês 0,04 mg' + '</br>'
            + 'Magnésio 9 mg' + '</br>'
            + 'Fosforo 24 mg' + '</br>'
            + 'Ferro 0,1 mg' + '</br>'
            + 'Potássio 174 mg' + '</br>'
            + 'Cobre 0,04 ug' + '</br>'
            + 'Zinco 0,1 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },
    abobrinha: {
        name: 'Abobrinha',
        descricao: 'Manganês 0,11 mg' + '</br>'
            + 'Magnésio 17 mg' + '</br>'
            + 'Fosforo 22 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 126 mg' + '</br>'
            + 'Cobre 0,01 ug' + '</br>'
            + 'Zinco 0,3 mg' + '</br>'
            + 'Sódio 1 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' '
    },
    batata: {
        name: 'Batata',
        descricao: 'Manganês 0,07 mg' + '</br>'
            + 'Magnésio 5 mg' + '</br>'
            + 'Fosforo 24 mg' + '</br>'
            + 'Ferro 0,2 mg' + '</br>'
            + 'Potássio 161 mg' + '</br>'
            + 'Cobre 0,06 ug'
            + 'Zinco 0,2 mg' + '</br>'
            + 'Sódio 2 mg' + '</br>',
        acompanhamento: 'Pide esta no purê que contem batata, manteiga, leite, ovo',
        composicao: ' ',

    },
    Manteiga: {
        name: 'manteiga',
        descricao: 'sem sal        com sal' + '</br>'
            + 'Magnésio 1 mg	           1mg' + '</br>'
            + 'Fosforo 7 mg 		   28mg' + '</br>'
            + 'ferro			       0,3' + '</br>'
            + 'Potássio   5 mg		       15' + '</br>'
            + 'Cobre 0,04 ug' + '</br>'
            + ' Sódio 4mg' + '</br>',
        acompanhamento: '',
        composicao: '',
    },

    leite: {
        name: 'Leite',
        descricao: 'Magnésio 10 mg' + '</br>'
            + 'Fosforo 82 mg' + '</br>'
            + 'Potássio 133 mg' + '</br>'
            + 'Cobre 0,02 ug' + '</br>'
            + 'Zinco 0,4 mg' + '</br>'
            + 'Sódio 64 mg' + '</br>',
        acompanhamento: '',
        composicao: '',
    },

    ovo: {
        name: 'ovo',
        descricao: 'Magnésio 13 mg' + '</br>'
            + 'Fosforo 164 mg' + '</br>'
            + 'Ferro 1,6 mg' + '</br>'
            + 'Potássio 150 mg' + '</br>'
            + 'Cobre 0,06 ug' + '</br>'
            + 'Zinco 1,1 mg' + '</br>'
            + 'Sódio 168 mg' + '</br>',
        composicao: ' ',
        acompanhamento: ' ',
    },



};
busca.addEventListener('click', function () {
    /*aqui adiciona o objeto pesquisado*/
    nome.innerHTML = dados[item.value].name;
    descri.innerHTML = dados[item.value].composicao;
    resu.innerHTML = dados[item.value].descricao;
    acompanhamento.innerHTML = dados[item.value].acompanhamentos;
});
