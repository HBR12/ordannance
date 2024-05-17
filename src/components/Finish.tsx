"use client";
import { state } from "@/app/page";

export default function Finish(props: { state: state }) {
  const state = props.state;
  return (
    <>
      {state &&
        state.map(
          (task) =>
            task.state == "Finished" && (
              <div
                key={task.id}
                className="flex flex-row justify-between items-center border border-2 border-dashed border-green-500 p-2 mb-4 rounded-xl bg-green-300"
              >
                <h1 className="text-lg">{task.id}</h1>
                <p className="italic text-slate-500 text-xs">
                  Burst Time:{task.burstTime == -1 ? 0 : task.burstTime}
                </p>
              </div>
            )
        )}
    </>
  );
}
