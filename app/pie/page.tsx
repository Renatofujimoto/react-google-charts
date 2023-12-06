"use client"
import { useQueryPie } from "@/hooks/useQuery";
import Link from "next/link";
import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "My Daily Activities",
};

export default function PieExample() {
  const { data, refetch } = useQueryPie()

  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      //para teste rootProps={{ "data-testid": "1" }}
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
