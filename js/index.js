
/*efeitor do titulo aprecer*/
function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
  }
  //const titulo = document.querySelector('h1');
  //escrever(titulo);
  //Grafico. se colocar em outor arquivo ele n aparece
  var ctx=document.getElementsByClassName("line-chart");
  var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
      labels:["T1","T2","T3","T4","T5","T6","T7","T8","79"],
      datasets:[
        {
        label:"Sólido",
        data:[-37.80,-37.81,-37.82],
        borderWidth:6,
        borderColor:'red',
        backgroundColor:'transparent',
      },
        {
        label:"Fusão",
        data:[-37.80,-37.81,-37.82,-37.83], // A ULTIMA TEMP, É A CORRETA AQ
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
       {
          label:"Líquido",
        data:[-37.80,-37.81,-37.82,-37.83,-37.84,300.4, 356.6], // QUANDO A TEMPERATURA DE EBULIÇÃO FOR MUITO ALTA, COLOCA NUMEROS VARIADOS DE LIQUIDO
        borderWidth:6,
        borderColor:'yellow',
        backgroundColor:'transparent',

      },
      {
          label:"Ebulição",
        data:[-37.80,-37.81,-37.82,-37.83,-37.84,300.4, 356.6,356.7], // A ULTIMA TEMP, É A CORRETA AQ
        borderWidth:6,
        borderColor:'green',
        backgroundColor:'transparent',

      },
      {
          label:"Gasoso",
        data:[-37.80,-37.81,-37.82,-37.83,-37.84,300.4, 356.6,356.7,356.8],
        borderWidth:6,
        borderColor:'pink',
        backgroundColor:'transparent',

      },
      ]
    }
  });
  var ctx=document.getElementsByClassName("lidio");
  var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
      labels:["T0","T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T11","T12","T13"],
      datasets:[
        {

        label:"Solido",
        data:[120,160,180.9],
        borderWidth:6,
        borderColor:'red',
        backgroundColor:'transparent',
      },
        {

        label:"Fusão",
        data:[120,160,180.9,181],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"Liquido",
        data:[120,160,180.9,181,191.1,201,211.2,211.3,211.4,500,700,900],
        borderWidth:6,
        borderColor:'yellow',
        backgroundColor:'transparent',

      },
      {
          label:"Ebulição",
        data:[120,160,180.9,181,191.1,201,211.2,211.3,211.4,500,700,900,1332.9],
        borderWidth:6,
        borderColor:'green',
        backgroundColor:'transparent',

      },
      {
          label:"Gasoso",
        data:[120,160,180.9,181,191.1,201,211.2,211.3,211.4,500,700,900,1332.9,1333,1333.1],
        borderWidth:6,
        borderColor:'pink',
        backgroundColor:'transparent',

      },
      ]
    }
  });

var ctx=document.getElementsByClassName("tt");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11"],
    datasets:[
      {
      label:"Solido",
      data:[96.79,97],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
      },
      {
      label:"Fusão",
      data:[97.79,97.81,97.82],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Liquido",
      data:[97.79,97.81,97.82,100,300,600,800],
      borderWidth:6,
      borderColor:'yellow',
      backgroundColor:'transparent',

    },
    {
      //ebulição 882.8
        label:"Ebulição",
      data:[97.79,97.81,97.82,100,300,600,800,882.9],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
      //ebulição 882.8
        label:"Gasoso",
      data:[97.79,97.81,97.82,100,300,600,800,882.9,883,884],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }


});
var ctx=document.getElementsByClassName("qq");//niquel
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
    datasets:[
      {
      label:"Solido",
      data:[1355,1400,1454],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[1355,1400,1454,1455],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Liquido",
      data:[1355,1400,1454,1455,1456,1457,1600,1800,2000,2800.9],
      borderWidth:6,
      borderColor:'yellow',
      backgroundColor:'transparent',

    },
    {
        label:"Ebulição",
      data:[1355,1400,1454,1455,1456,1457,1600,1800,2000,2800.9,2913],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Gasoso",
      data:[1355,1400,1454,1455,1456,1457,1600,1800,2000,2800.9,2912,2913,2914],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }


});

var ctx=document.getElementsByClassName("qui");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11"],
    datasets:[
      {
      label:"Solido",
      data:[-219.6,-210,-205],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
      },
      {
      label:"Fusão",
      data:[-219.6,-210,-205,-200],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[-219.6,-210,-205,-200,-190,-194.5,-189,-182.9],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[-219.6,-210,-205,-200,-190,-194.5,-189,-182.9,-181],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',
    },
    {
        label:"Gasoso",
      data:[-219.6,-210,-205,-200,-190,-194.5,-189,-182.9,-181,-180,-179],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',
    },
    ]
  }
});

var ctx=document.getElementsByClassName("sex");//iodo
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
    datasets:[
      {
      label:"Solido",
      data:[111,112,113.6],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[111,112,113.6,113.7],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[111,112,113.6,113.7,113.8,113.9,120,140,160,184.2],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[111,112,113.6,113.7,113.8,113.9,120,140,160,184.2,184.3],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Gasoso",
      data:[111,112,113.6,113.7,113.8,113.9,120,140,160,184.2,184.3,184.4,184.5],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }
});
var ctx=document.getElementsByClassName("sext");//ferro
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16"],
    datasets:[
      {
      label:"Solido",
      data:[1520,1536,1537],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[1520,1536,1537,1538],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[1520,1536,1537,1538,1635,1735,1835,1935,2235,2235,2535,2655,2735,2999],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
        data:[1520,1536,1537,1538,1635,1735,1835,1935,2235,2235,2535,2655,2735,2999,3000],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Ebulição",
        data:[1520,1536,1537,1538,1635,1735,1835,1935,2235,2235,2535,2655,2735,2999,3000,3001,3002],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }
});

var ctx=document.getElementsByClassName("oit");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T0","T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"],
    datasets:[
      {
      label:"solido",
      data:[-300,-280,-259.2],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[-300,-280,-259.2,-254.2],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Solido",
    data:[-300,-280,-259.2,-254.2,-253],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[-300,-280,-259.2,-254.2,-253,-252.9],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
    label:"Gasoso",
    data:[-300,-280,-259.2,-254.2,-253,-252.9,-252.8,-252.7],
    borderWidth:6,
    borderColor:'pink',
    backgroundColor:'transparent',
      },
    ]
  }


});
var ctx=document.getElementsByClassName("nov");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","T21","T22"],
    datasets:[
      {
      label:"Solido",
      data:[500,550,600],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[500,550,600,660],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[500,550,600,660,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,1999,2000],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[500,550,600,660,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,1999,2000,2056],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Gasoso",
      data:[500,550,600,660,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,1999,2000,2056,2057,2058],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }

});
var ctx=document.getElementsByClassName("dec");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9"],
    datasets:[
      {
      label:"Solido",
      data:[-273,-272.4,-272.3],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
      },
      {
        label:"Fusão",
        data:[-273,-272.4,-272.3,-272.2,],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
        label:"Solido",
        data:[-273,-272.4,-272.3,-272.2,-272.1,-270,-269],
        borderWidth:6,
        borderColor:'yellow',
        backgroundColor:'transparent',
      },

    {
        label:"Ebulição",
        data:[-273,-272.4,-272.3,-272.2,-272.1,-270,-269,-268.9],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Gasoso",
        data:[-273,-272.4,-272.3,-272.2,-272.1,-270,-269,-268.9,-268.8,-268.9],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }
});

var ctx=document.getElementsByClassName("potassio");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16"],
    datasets:[
      {
      label:"Solido",
      data:[61,62,63.4],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
      {
      label:"Fusão",
      data:[61,62,63.4,63.5],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[61,62,63.4,63.5,80,90,100,200,300,400,500,600,700],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[61,62,63.4,63.5,80,90,100,200,300,400,500,600,700,773.85],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Gasoso",
      data:[61,62,63.4,63.5,80,90,100,200,300,400,500,600,700,773.85,773.86,780],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }

});var ctx=document.getElementsByClassName("cloro");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14"],
    datasets:[
      {
      label:"Solido",
      data:[-160,-150,-100],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
      },
      {
      label:"Fusão",
      data:[-160,-150,-100,-100.95],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
    label:"Liquido",
    data:[-160,-150,-100,-100.95,-80,-60,-40,-20,0,10,34.54],
    borderWidth:6,
    borderColor:'yellow',
    backgroundColor:'transparent',
  },
    {
        label:"Ebulição",
      data:[-160,-150,-100,-100.95,-80,-60,-40,-20,0,10,34.54,34.55],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    {
        label:"Solido",
      data:[-160,-150,-100,-100.95,-80,-60,-40,-20,0,10,34.54,34.55,34.56,35],
      borderWidth:6,
      borderColor:'pink',
      backgroundColor:'transparent',

    },
    ]
  }
});
