"use client";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Details(props: { result: any }) {
  const result = props.result;
  const AverageWaitingTime = result[result.length - 1].AverageWaitingTime;
  const AverageTurnAroundTime = result[result.length - 1].AverageTurnAroundTime;

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="w-full">See details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Result of the implementation</DrawerTitle>
          <DrawerDescription>hadi l kholasa l dakxi li w9a3</DrawerDescription>
          <div className="h-[400px] bg-black rounded-md p-4 text-white flex flex-col justify-between">
            <div className="w-full flex flex-col">
              <div className="w-full flex">
                <div className="w-36 text-center">Process ID</div>|
                <div className="w-36 text-center">Arrival Time</div>|
                <div className="w-36 text-center">Burst Time</div>|
                <div className="w-36 text-center">Waiting Time</div>|
                <div className="w-36 text-center">Turn Around Time</div>
              </div>
              <div className="w-full flex flex-col gap-x-6">
                {result &&
                  result.map((task: any) => (
                    <div className="w-full flex">
                      <div className="w-36 text-center">{task.id}</div>|
                      <div className="w-36 text-center">{task.arrivalTime}</div>
                      |<div className="w-36 text-center">{task.burstTime}</div>|
                      <div className="w-36 text-center">{task.waitingTime}</div>
                      |
                      <div className="w-36 text-center">
                        {task.turnAroundTime}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full flex flex-row justify-end gap-x-8">
              <h1>Average Waiting Time: {AverageWaitingTime}</h1>|
              <h1>AverageTurnAroundTime: {AverageTurnAroundTime}</h1>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button>Done</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
