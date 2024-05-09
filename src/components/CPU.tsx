"use client";
import { state } from "@/app/page";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Finish from "./Finish";
import Details from "./Details";

export default function CPU(props: { state: state; result: any }) {
  const state = props.state;
  const result = props.result;
  return (
    <ScrollArea className="h-screen w-1/4 min-w-72 border-l border-x border-solid p-6 flex flex-col">
      <div className="flex flex-col gap-8 border-b border-solid pb-8">
        <h1>CPU</h1>
        <div className="h-[80px] border p-4 flex flex-col">
          {state &&
            state.map(
              (task) =>
                task.state == "CPU" && (
                  <div
                    key={task.id}
                    className="flex flex-row justify-between items-center border border-2 p-2 mb-4"
                  >
                    <h1>Hello</h1>
                  </div>
                )
            )}
        </div>
      </div>
      <div className="border-b border-solid py-6 gap-4 flex flex-col">
        <h1>Finish</h1>
        <ScrollArea className="h-[48vh] border p-4 flex flex-col">
          <Finish state={state} />
        </ScrollArea>
        {result != null ? (
          <Details result={result} />
        ) : (
          <Button disabled>See details</Button>
        )}
      </div>
    </ScrollArea>
  );
}
