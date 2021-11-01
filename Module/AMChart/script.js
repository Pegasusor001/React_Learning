
// 可以运行，为啥这么多报错呢？

 am4core.useTheme(am4themes_animated);

 // Create chart instance
 var chart = am4core.create("chartdiv", am4charts.XYChart);

 // Add data
 chart.data = [{
   "date": new Date(2018, 0, 1),
   "value": 450,
   "value2": 362,
   "value3": 699
 }, {
   "date": new Date(2018, 0, 2),
   "value": 269,
   "value2": 450,
   "value3": 841
 }, {
   "date": new Date(2018, 0, 3),
   "value": 700,
   "value2": 358,
   "value3": 699
 }, {
   "date": new Date(2018, 0, 4),
   "value": 490,
   "value2": 367,
   "value3": 500
 }, {
   "date": new Date(2018, 0, 5),
   "value": 500,
   "value2": 485,
   "value3": 369
 }, {
   "date": new Date(2018, 0, 6),
   "value": 550,
   "value2": 354,
   "value3": 250
 }, {
   "date": new Date(2018, 0, 7),
   "value": 420,
   "value2": 350,
   "value3": 600
 }];
 
 // Create axes
 var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
 dateAxis.renderer.grid.template.location = 0;
 
 var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
 // Create series
 function createSeries(field, name) {
   var series = chart.series.push(new am4charts.LineSeries());
   series.dataFields.valueY = field;
   series.dataFields.dateX = "date";
   series.name = name;
   series.tooltipText = "{dateX}: [b]{valueY}[/]";
   series.strokeWidth = 2;
   
   var bullet = series.bullets.push(new am4charts.CircleBullet());
   bullet.circle.stroke = am4core.color("#fff");
   bullet.circle.strokeWidth = 2;
   
   return series;
 }
 
 var series1 = createSeries("value", "Series #1");
 var series2 = createSeries("value2", "Series #2");
 var series3 = createSeries("value3", "Series #3");
 
 chart.legend = new am4charts.Legend();
 chart.cursor = new am4charts.XYCursor();