
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
      labels:["T0","T1","T2","T3","T4","T5"],
      datasets:[
        {
        label:"fusao",
        data:[181,130,70,69,50,40],
        borderWidth:6,
        borderColor:'rgba(77,166,253,0.85)',
        backgroundColor:'transparent',
      },
      {
          label:"ebuliçao,e muito alta para representar graficamente",
        data:[181,400,600,800,1000,1330],
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
    labels:["T1","T2","T3","T4","T5"],
    datasets:[
      {
      label:"fusao",
      data:[98,80,60,40,0],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    },
    {
        label:"ebuliçao,muito alto",
      data:[97.79,120,220,320,882.8],
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

var ctx=document.getElementsByClassName("qui");
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

var ctx=document.getElementsByClassName("sex");
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
var ctx=document.getElementsByClassName("sext");
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
