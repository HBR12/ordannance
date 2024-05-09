"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DataEntry(props: {
  callback: () => void;
  startState: any;
}) {
  const [name, setName] = useState("");
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [btn, setBtn] = useState(1);
  useEffect(() => {
    props.startState ? setBtn(1) : setBtn(0);
  }, [props.startState]);
  const handleData = () => {};

  return (
    <ScrollArea className="h-screen w-1/4 min-w-72 border border-x border-solid p-6 flex flex-col">
      <form onSubmit={handleData} className="flex flex-col gap-2 mb-4">
        <Select defaultValue="algo1">
          <SelectTrigger className="">
            <SelectValue placeholder="algo1" defaultChecked={true} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="algo1">algo1</SelectItem>
            <SelectItem value="algo2">algo2</SelectItem>
            <SelectItem value="algo3">algo3</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="type process name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="arrival time"
          onChange={(e) => setArrival(e.target.value)}
        />
        <Input
          placeholder="burst time"
          onChange={(e) => setBurst(e.target.value)}
        />
        <Button className="w-full">
          Add
          <Plus />
        </Button>
      </form>
      <div className="flex flex-col gap-4">
        <h1>Available:</h1>
        <ScrollArea className="h-[320px] rounded-md border p-4 flex flex-col">
          <div className="flex flex-row justify-between border-b border-b-2 p-2">
            <h1>Hello</h1>
            <Trash className="h-4" />
          </div>
        </ScrollArea>
        {btn ? (
          <Button className="w-full" onClick={props.callback}>
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
