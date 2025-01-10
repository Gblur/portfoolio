import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Colors,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import useStore from "../../../../../store";
import { BorderColor } from "@mui/icons-material";
import { colors } from "@mui/material";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Colors
);




interface RadarProps {
  options: ChartOptions<"radar">;
}

const data: ChartData<"radar", number[], string> = {
  labels: ["TS/JS", "HTML/CSS", "Node.js", "REST", "GraphQL", "React" ],
  datasets: [
    {
      label: "Dev",
      data: [4, 4, 2, 3, 2, 4],
      borderColor: "#4caf50"
    },
    {
      label: "Admin",
      data: [2, 2, 2, 2, 2, 2],
      borderColor: "yellow",
      hidden: true
    },
  ],
};

export function RadarChart() {
  const { isDarkMode } = useStore((state) => state);
  const [dataState, setDataState] = useState(data);


  
  const options = {
    // elements: {
    //   line: {
    //     borderColor: "#4caf50",
    //   },
    // },
    plugins: {
      legend: {
        onClick: (e: any, legendItem: any, legend: any) => {
          let index = legendItem.datasetIndex;
          const ci = legend.chart;
          
          if (index < 1) {
            ci.show(index);
            ci.hide(1);
            setDataState((data) => ({...data, labels: ["TS/JS", "HTML/CSS", "Node.js", "REST", "GraphQL", "React"]}))
          } else {
            ci.show(index);
            ci.hide(0);
            setDataState((data) => ({...data, labels: ["Networking", "Linux", "Security","Databases" , "Docker","Cloud" ]}))
          }
          // Trigger fade effects
        },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        angleLines: {
          color: isDarkMode ? "white" : "black",
        },
        grid: {
          color: isDarkMode ? "white" : "black",
        },
        ticks: {
          stepSize: 1,
          color: isDarkMode ? "white" : "black",
          backdropColor: isDarkMode ? "black" : "white",
        },
        pointLabels: {
          color: isDarkMode ? "white" : "black",
        },
      },
    },
  };

  return <Radar data={dataState} updateMode="resize" options={options} />;
}
