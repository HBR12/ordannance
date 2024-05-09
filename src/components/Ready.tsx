"use client";

import { state } from "@/app/page";
import { ScrollArea } from "./ui/scroll-area";

export default function Ready(props: { state: state }) {
  let state = props.state;
  return (
    <div className="h-screen w-1/4 min-w-72 border border-1 border-solid p-6 flex flex-col gap-8">
      <h1>Ready</h1>
      <ScrollArea className="h-[100vh] border p-4 flex flex-col">
        {state &&
          state.map(
            (task) =>
              task.state == "Ready" && (
                <div
                  key={task.id}
                  className="flex flex-row justify-between items-center border border-2 p-2 mb-4"
                >
                  <h1>Hello</h1>
                </div>
              )
          )}
      </ScrollArea>
    </div>
  );
}
