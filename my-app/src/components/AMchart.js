import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const fakedata = require("../fakeData/AMchart")

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

function AMchart(props) {
  const chart = useRef(null);
  useLayoutEffect(() => {
    // Create chart instance
    let x = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    x.data = fakedata;

    // Set input format for the dates
    x.dateFormatter.inputDateFormat = "yyyy-MM-dd"; 

    // Create axes
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "value: {value}, Date: {date}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    x.cursor = new am4charts.XYCursor();

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    x.cursor = new am4charts.XYCursor();
    x.cursor.behavior = "panXY";
    x.cursor.xAxis = dateAxis;
    x.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    x.scrollbarY = new am4core.Scrollbar();
    x.scrollbarY.parent = x.leftAxesContainer;
    x.scrollbarY.toBack();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;
    x.scrollbarX.parent = x.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

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