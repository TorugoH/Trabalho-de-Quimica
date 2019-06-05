
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
      labels:["T1","T2","T3","T4","T5","T6"],
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
  var ctx=document.getElementsByClassName("lidio");
  var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
      labels:["T0","T1","T2","T3","T4","T5","T6"],
      datasets:[
        {
        label:"fusao",
        data:[0,181,200,900,1330],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"ebuliçao,e muito alta para representar graficamente",
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
      label:"fusao",
      data:[0,97.79,200,600,750],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,muito alto",
      data:[0,98,200,600,750,882.8],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});
var ctx=document.getElementsByClassName("qq");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5"],
    datasets:[
      {
      label:"fusao",
      data:[-216,6,100,0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[0,2913],
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
      label:"fusao",
      data:[-219.6,200,],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao",
      data:[-219.9,-200,-181],
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
      label:"fusao",
      data:[0,90,100,113.7],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao",
      data:[0,90,100,113.7,130,140,150,184.3],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});
var ctx=document.getElementsByClassName("sext");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"fusao",
      data:[0,90,113.7],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao",
        data:[0,90,113],
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
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"fusao",
      data:[-0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[1,2,3,4,5],
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
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"fusao",
      data:[-0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[1,2,3,4,5],
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
      label:"fusao",
      data:[-0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[1,2,3,4,5],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});
var ctx=document.getElementsByClassName("teentwo");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"fusao",
      data:[-0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[1,2,3,4,5],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }


});var ctx=document.getElementsByClassName("teentreen");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["T1","T2","T3","T4","T5","T6"],
    datasets:[
      {
      label:"fusao",
      data:[-0,2,0,0,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,e muito alta para representar graficamente",
      data:[1,2,3,4,5],
      borderWidth:6,
      borderColor:'green',
      backgroundColor:'transparent',

    },
    ]
  }
});
