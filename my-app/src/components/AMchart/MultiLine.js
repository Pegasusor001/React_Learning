import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const fakedata = require("../../fakeData/AMchart")

am4core.useTheme(am4themes_animated);
// am4core.useTheme(am4themes_material);

// Create series
function createSeries(x, field, name) {
  var series = x.series.push(new am4charts.LineSeries());
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

function AMchart(props) {
  const chart = useRef(null);
  useLayoutEffect(() => {
    // Create chart instance
    let x = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    x.data = [{
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

    // Set input format for the dates
    // x.dateFormatter.inputDateFormat = "yyyy-MM-dd"; 

    // Create axes
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

    var series1 = createSeries(x, "value", "Series #1");
    var series2 = createSeries(x, "value2", "Series #2");
    var series3 = createSeries(x, "value3", "Series #3");

    x.legend = new am4charts.Legend();
    x.cursor = new am4charts.XYCursor();

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default AMchart;