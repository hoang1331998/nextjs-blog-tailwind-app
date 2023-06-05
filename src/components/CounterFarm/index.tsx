import { CounterFarmProps } from "@/types";
import React from "react";

function CounterFarm(props: CounterFarmProps) {
  const { num, label } = props;
  return (
    <div className="flex items-center gap-[15px] my-[25px] w-[max-content]">
      <span className="text-amber-400 text-[25px] font-bold">{num}</span>
      <span className="text-white">{label}</span>
    </div>
  );
}

export default CounterFarm;
