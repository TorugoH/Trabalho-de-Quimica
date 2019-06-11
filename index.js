
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
      labels:["T1","T2","T3","T4","T5","T6","T7","T8"],
      datasets:[
        {
        label:"Fusão",
        data:[-37.83,-30,-20,0,10,100,200,],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"Ebulição",
        data:[-37.83,-30,-20,0,10,100,200,356.7],
        borderWidth:6,
        borderColor:'green',
        backgroundColor:'transparent',

      },
      ]
    }
  });
  var ctx=document.getElementsByClassName("lidio");
  var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
      labels:["T0","T1","T2","T3","T4","T5","T6"],
      datasets:[
        {
        label:"Fusão",
        data:[0,181,200,900,1330],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"Ebulição,e muito alta para representar graficamente",
        data:[0,180,200,900,1330,1400],
        borderWidth:6,
        borderColor:'green',
        backgroundColor:'transparent',

      },
      ]
    }
  });

var ctx=document.getElementsByClassName("tt");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"Fusão",
      data:[0,97.79,200,600,750],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,muito alto",
      data:[0,98,200,600,750,882.8],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});
var ctx=document.getElementsByClassName("qq");//niquel
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8"],
    datasets:[
      {
      label:"Fusão",
      data:[1455,1555,1655,1755,1855,2500],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
      data:[1455,1555,1655,1755,1855,2500,2913],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});

var ctx=document.getElementsByClassName("qui");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"Fusão",
      data:[-219.6,-200,],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição",
      data:[-219.6,-200,-181],
      borderWidth:6,
      borderColor:'red',
      backgroundColor:'transparent',
    },
    ]
  }
});

var ctx=document.getElementsByClassName("sex");//iodo
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"Fusão",
      data:[113.7,130,140,150],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição",
      data:[113.7,130,140,150,184.3],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});
var ctx=document.getElementsByClassName("sext");//ferro
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
    datasets:[
      {
      label:"Fusão",
      data:[1535,1635,1735,1835,1935,2235,2235,2535,2655,2735],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição",
        data:[1535,1635,1735,1835,1935,2235,2235,2535,2655,2735,3000],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});

var ctx=document.getElementsByClassName("oit");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T0","T1","TX"],
    datasets:[
      {
      label:"Fusão",
      data:[-259.2,-254.2],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
      data:[-259.2,-254.2,-252.9],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});
var ctx=document.getElementsByClassName("nov");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","T21","T22","T23","T24","T25","T26","T27","T28","T29","T30","T31"],
    datasets:[
      {
      label:"Fusão",
      data:[600,656,700,756,800,856,900,956,1000,1056,1100,1156,1200,1256,1300,1356,1400,1456,1500,1556,1600,1650,1700,1756,1800,1856,1900,1956,2000],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
      data:[600,656,700,756,800,856,900,956,1000,1056,1100,1156,1200,1256,1300,1356,1400,1456,1500,1556,1600,1650,1700,1756,1800,1856,1900,1956,2000,2056],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }

});
var ctx=document.getElementsByClassName("dec");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[

      {
      label:"Fusão",
      data:[-272.2,-270,],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
        data:[-272.2,-270,-268.9],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});

var ctx=document.getElementsByClassName("potassio");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11"],
    datasets:[
      {
      label:"Fusão",
      data:[63.5,80,90,100,200,300,400,500,600,700],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
      data:[63.5,80,90,100,200,300,400,500,600,700,773.85],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }

});var ctx=document.getElementsByClassName("cloro");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6","T7","T8"],
    datasets:[
      {
      label:"Fusão",
      data:[-100.95,-80,-60,-40,-20,0,10],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"Ebulição,e muito alta para representar graficamente",
      data:[-100.95,-80,-60,-40,-20,0,10,34.55],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});
