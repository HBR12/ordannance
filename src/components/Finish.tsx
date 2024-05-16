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
                className="flex flex-row justify-between items-center border border-2 p-2 mb-4"
              >
                <h1 className="text-lg">{task.id}</h1>
                <p className="italic text-slate-500 text-sm">
                  BR:{task.burstTime == -1 ? 0 : task.burstTime}
                </p>
              </div>
            )
        )}
    </>
  );
}
