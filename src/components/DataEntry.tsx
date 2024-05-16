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
};

export default function DataEntry(props: {
  callback: (mode: string, data: process[]) => void;
  startState: any;
}) {
  const [btn, setBtn] = useState(1);

  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [priority, setPriority] = useState("");
  const [algo, setAlgo] = useState("First Come First Served");
  const [list, setList] = useState<process[]>([]);
  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    props.startState ? setBtn(1) : setBtn(0);
  }, [props.startState]);

  const addNewProc = () => {
    const obj: process = {
      del: id,
      id: name,
      arrivalTime: parseInt(arrival),
      burstTime: parseInt(burst),
      priority: parseInt(priority),
    };
    setList((prevList) => {
      return [...prevList, obj];
    });
    setId((prevId) => {
      return prevId + 1;
    });
  };

  const removeProc = (id: number) => {
    setList((prevList) => {
      return prevList.filter((item) => item.del !== id);
    });
  };

  return (
    <div className="h-screen w-1/4 min-w-72 border border-x border-solid p-6 flex flex-col">
      <div className="flex flex-col gap-2 mb-4">
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
          </SelectContent>
        </Select>
        <Input
          placeholder="type process name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="arrival time"
          type="number"
          min="0"
          max="10"
          onChange={(e) => setArrival(e.target.value)}
        />
        <Input
          placeholder="burst time"
          type="number"
          min="0"
          max="10"
          onChange={(e) => setBurst(e.target.value)}
        />
        <Input
          placeholder="priority"
          type="number"
          min="0"
          max="10"
          onChange={(e) => setPriority(e.target.value)}
        />
        <Button className="w-full" onClick={addNewProc}>
          Add
          <Plus />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Available:</h1>
        <ScrollArea className="h-[320px] rounded-md border p-4 flex flex-col">
          {list &&
            list.map((proc) => (
              <div className="flex flex-row items-center justify-between border-b border-b-2 p-2">
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
              props.callback(algo, list);
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
    </div>
  );
}
