"use client";
import DataEntry, { process } from "@/components/DataEntry";
import Queue from "@/components/Queue";
import Ready from "@/components/Ready";
import { response } from "@/lib/response";
import { useEffect, useRef, useState } from "react";
import CPU from "@/components/CPU";
import { fetchData } from "@/lib/action";
import Controls from "@/components/Controls";

export type state =
  | {
      id: number;
      arrivalTime: number;
      burstTime: number;
      state: string;
      priority: number;
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

  const structData = (mode: string, data: process[], quantum: number) => {
    const struct = { Algorithm: mode, processes: data, quantum };
    return struct;
  };

  const states = useRef<any>();
  const currState = useRef<number>(0);

  const startAnimation = async (
    mode: string,
    data: process[],
    quantum: number
  ) => {
    const result = await fetchData(structData(mode, data, quantum));
    states.current = result;
    currState.current = states.current.States.length - 1;

    setEndResult(null);
    setStartbtn(false);
    for (let i = 0; i < result.States.length; i++) {
      setState(result.States[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    setEndResult(result.result);
    setStartbtn(true);
  };

  const changeState = (forward: Boolean) => {
    if (forward && currState.current < states.current?.States.length) {
      const curr = currState.current + 1;
      currState.current =
        curr == states.current?.States.length ? curr - 1 : curr;
      setState(states.current?.States[currState.current]);
    } else if (currState.current > 0) {
      currState.current = currState.current - 1;
      setState(states.current?.States[currState.current]);
    }
    console.log(currState.current);
  };
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        <DataEntry callback={startAnimation} startState={startbtn} />
        <Queue state={state} />
        <Ready state={state} />
        <CPU state={state} result={endResult} callback={changeState} />
      </div>
    </>
  );
}
