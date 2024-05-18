"use client";
import { state } from "@/app/page";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Finish from "./Finish";
import Details from "./Details";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Controls from "./Controls";

export default function CPU(props: {
  state: state;
  result: any;
  callback: (forward: boolean) => void;
}) {
  const state = props.state;
  const result = props.result;
  return (
    <div className="flex flex-col">
      <ScrollArea className="h-screen w-1/4 min-w-72 border-l border-x border-solid p-6 flex flex-col">
        <div className="flex flex-col gap-8 border-b border-solid pb-8">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">CPU</h1>
            <p className="text-sm">processus kayt3alaj</p>
          </div>
          <div className="h-[80px] border p-4 flex flex-col">
            {state &&
              state.map(
                (task) =>
                  task.state == "CPU" && (
                    <div
                      key={task.id}
                      className="flex flex-row justify-between items-center border border-2 border-dashed border-teal-500 p-2 mb-4 rounded-xl bg-teal-300"
                    >
                      <h1 className="text-lg">{task.id}</h1>
                      <p className="italic text-slate-500 text-xs">
                        Burst Time:{task.burstTime == -1 ? 0 : task.burstTime}
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="border-b border-solid py-6 gap-4 flex flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">Finish</h1>
            <p className="text-sm">safi rah salaw!</p>
          </div>
          <ScrollArea className="h-[30vh] border p-4 flex flex-col">
            <Finish state={state} />
          </ScrollArea>
          <Controls result={props.result} callback={props.callback} />
          {result != null ? (
            <Details result={result} />
          ) : (
            <Button disabled>See details</Button>
          )}
        </div>
        <div className="flex flex-row items-center">
          code source:{" "}
          <Button variant="ghost" asChild>
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=B8RwhivK0fk&t=586s"
            >
              <GithubIcon />
            </Link>
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
