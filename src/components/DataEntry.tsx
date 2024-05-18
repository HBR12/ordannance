"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type process = {
  del: number;
  id: string;
  arrivalTime: number;
  burstTime: number;
  priority: number;
  quantum: number;
};

export default function DataEntry(props: {
  callback: (mode: string, data: process[], quantum: number) => void;
  startState: any;
}) {
  const [btn, setBtn] = useState(1);

  const [id, setId] = useState(1);
  const [arrival, setArrival] = useState(0);
  const [burst, setBurst] = useState(0);
  const [priority, setPriority] = useState(0);
  const [quantum, setQuantum] = useState(0);
  const [algo, setAlgo] = useState("First Come First Served");
  const [list, setList] = useState<process[]>([]);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    props.startState ? setBtn(1) : setBtn(0);
  }, [props.startState]);

  const addNewProc = () => {
    if (
      !Number.isNaN(arrival) &&
      !Number.isNaN(burst) &&
      !Number.isNaN(priority)
    ) {
      setErrorMsg(false);
      const obj: process = {
        del: id,
        id: "proc" + id,
        arrivalTime: arrival,
        burstTime: burst,
        priority: priority,
        quantum: quantum,
      };
      setList((prevList) => {
        return [...prevList, obj];
      });
      setId((prevId) => {
        return prevId + 1;
      });
    } else {
      setErrorMsg(true);
    }
  };

  const removeProc = (id: number) => {
    setList((prevList) => {
      return prevList.filter((item) => item.del !== id);
    });
  };

  return (
    <ScrollArea className="h-screen w-1/4 min-w-72 border border-x border-solid p-6 flex flex-col">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="font-bold text-xl">Initialisation</h1>
        <p className="text-sm">dkhal data dyalk alm3alam</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-row-2 col-span-2">
            <label className="text-sm">Algorithms</label>
            <Select
              defaultValue="First Come First Served"
              onValueChange={(e) => {
                setAlgo(e);
              }}
            >
              <SelectTrigger className="">
                <SelectValue
                  placeholder="First Come First Served"
                  defaultChecked={true}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="First Come First Served">
                  First In, First Out {"("}FIFO{")"}
                </SelectItem>
                <SelectItem value="Shortest Job First">
                  Shortest Job First {"("}SJF{")"}
                </SelectItem>
                <SelectItem value="Shortest Remaining Time First">
                  Shortest Remaining Time First {"("}SRTF{")"}
                </SelectItem>
                <SelectItem value="Highest Priority First">
                  Highest Priority First {"("}HPF{")"}
                </SelectItem>
                <SelectItem value="Round Robin">
                  Round Robin {"("}RR{")"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {algo == "Round Robin" && (
            <div className="grid grid-row-2 col-span-2">
              <label className="text-sm">Quantum</label>
              <Input
                placeholder="max=10"
                type="number"
                min="0"
                max="10"
                value={quantum}
                onChange={(e) => setQuantum(parseInt(e.target.value))}
              />
            </div>
          )}

          <div className="grid grid-row-2">
            <label className="text-sm">Arrival Time</label>
            <Input
              placeholder="max=10"
              type="number"
              min="0"
              max="10"
              value={arrival}
              onChange={(e) => setArrival(parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-row-2">
            <label className="text-sm">Burst Time</label>
            <Input
              placeholder="max=10"
              type="number"
              min="0"
              max="10"
              value={burst}
              onChange={(e) => setBurst(parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-row-2">
            <label className="text-sm">
              Priority{"  "}
              <span className="italic text-xs">min is the fastest</span>
            </label>

            <Input
              placeholder="max=10"
              type="number"
              min="0"
              max="10"
              value={priority}
              onChange={(e) => setPriority(parseInt(e.target.value))}
              disabled={algo != "Highest Priority First"}
            />
          </div>
        </div>
        <Button className="w-full" onClick={addNewProc}>
          Add Process
          <Plus />
        </Button>
        {errorMsg && (
          <p className="text-red-600 italic">matkhlix dakxi li lfo9 khawi</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h1>Available:</h1>
        <ScrollArea className="h-[30vh] grow rounded-md border p-4 flex flex-col">
          {list &&
            list.map((proc) => (
              <div
                key={proc.del}
                className="flex flex-row items-center justify-between border-b border-b-2 p-2"
              >
                <h1>{proc.id}</h1>
                <Button
                  variant="ghost"
                  onClick={() => {
                    removeProc(proc.del);
                  }}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            ))}
        </ScrollArea>
        {btn ? (
          <Button
            className="w-full"
            onClick={() => {
              props.callback(algo, list, quantum);
              setList([]);
              setId(1);
            }}
          >
            START
          </Button>
        ) : (
          <Button className="w-full" disabled>
            START
          </Button>
        )}
      </div>
    </ScrollArea>
  );
}
