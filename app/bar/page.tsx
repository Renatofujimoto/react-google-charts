"use client";
import { useQueryBar } from "@/hooks/useQueryBar";
import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";


export default function BarExample() {
  const { data } = useQueryBar();


  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ x: 15 }}
      height={200}
      width={300}
    >
      <VictoryBar
        barRatio={0.8}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        style={{
          data: { fill: "#c43a31" },
        }}
        data={data}
      />
    </VictoryChart>
  );
}

