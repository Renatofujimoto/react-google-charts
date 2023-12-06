"use client"
import { useQueryBar } from "@/hooks/useQueryBar";
import Link from "next/link";
import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function BarExample() {

  const { data, refetch } = useQueryBar();

  return (
    <>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <div className="bg-gray-400 rounded-lg w-20 text-center">
        <button
          onClick={() => refetch()}
        >
          Atualizar
        </button>
      </div>
      <Link href="/">
        voltar
      </Link>
    </>
  );
}
