var ctx=document.getElementsByClassName("line-chart");
var chartGraph = new Chart(ctx,{
  type:'line',
  data:{
    labels:["t","m","n"],
    datasets:[{
      label:"temperatura",
      data:[1,2,3,4,5],
      borderWidth:6,
      borderColor:'rgba(77,166,253,0.85)',
      backgroundColor:'transparent',
    }]
  }

});
