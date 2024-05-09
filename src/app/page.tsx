"use client";
import DataEntry from "@/components/DataEntry";
import Queue from "@/components/Queue";
import Ready from "@/components/Ready";
import { response } from "@/lib/response";
import { useEffect, useState } from "react";
import CPU from "@/components/CPU";

export type state =
  | {
      id: number;
      arrivalTime: number;
      burstTime: number;
      state: string;
      order: number;
    }[]
  | undefined;

export default function Home() {
  const [state, setState] = useState<state>();
  const [endResult, setEndResult] = useState<any>(null);
  const [startbtn, setStartbtn] = useState(true);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const startAnimation = async () => {
    const result = response;
    setEndResult(null);
    setStartbtn(false);
    for (let i = 0; i < result.States.length; i++) {
      setState(result.States[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    setEndResult(result.result);
    setStartbtn(true);
  };
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        <DataEntry callback={startAnimation} startState={startbtn} />
        <Queue state={state} />
        <Ready state={state} />
        <CPU state={state} result={endResult} />
      </div>
    </>
  );
}
