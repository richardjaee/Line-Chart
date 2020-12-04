import "./styles.css";
import Chart from "chart.js";
import * as lib from "./lib/lib";

import { default as $ } from "./lib/jq";
import * as data from "./json/data.json";

var cht1 = $("#Chart1");

var Chart1 = new Chart(cht1, {
  type: "line",

  data: {
    labels: ["2015", "2016", "2017", "2018"], //x axis

    datasets: [
      {
        label: "Homelessness Population Count", //name of legend
        fill: false, //if true, then the area under the curve will be highlighted
        borderColor: "#000000", //The line color
        borderDash: [0, 0], //makes the curve more or less checkered
        backgroundColor: "#000000", //The line fill color
        pointBackgroundColor: "#000000", //The fill color for points.
        pointBorderColor: "#000000", //border color for points
        pointHoverBackgroundColor: "#000000", //Point background color when hovered
        pointHoverBorderColor: "#000000", //Point border color when hovered

        data: [12, 19, 3, 5, 2, 3]
      }
    ]
  },

  options: {
    title: {
      display: true, //if false, then the title in the next line will not show
      text: "Puma Data"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

