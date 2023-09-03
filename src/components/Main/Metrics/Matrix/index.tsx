import React from "react";
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Colors
);

export const data = {
  labels: ["TS/JS", "HTML/CSS", "Node.js", "REST", "GraphQL", "React"],
  color: ["green"],
  datasets: [
    {
      label: "Skills",
      data: [4, 4, 2, 3, 2, 4],
    },
  ],
};

interface RadarProps {
  options: ChartOptions<"radar">;
}

export function RadarChart() {
  const { isDarkMode } = useStore((state) => state);

  const options = {
    plugins: {
      colors: {
        forceOverride: true,
        enabled: false,
      },
    },
    elements: {
      line: {
        borderColor: "#4caf50",
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

  return <Radar data={data} options={options} />;
}
