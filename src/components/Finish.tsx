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
              <div className="flex flex-row justify-between items-center border border-2 p-2 mb-4">
                <h1>Hello</h1>
              </div>
            )
        )}
    </>
  );
}
