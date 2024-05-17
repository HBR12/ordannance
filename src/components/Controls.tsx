"use client";
import { Button } from "./ui/button";
import {
  Component1Icon,
  Component2Icon,
  ComponentInstanceIcon,
  PauseIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";

export default function Controls(props: {
  callback: (forward: boolean) => void;
  result: any;
}) {
  return props.result != null ? (
    <div className="fixed bottom-8 left-[47.5%]">
      <Button
        className="rounded-none rounded-l-full"
        onClick={() => {
          props.callback(false);
        }}
      >
        <TrackPreviousIcon />
      </Button>
      <Button className="rounded-none cursor-default hover:bg-primary">
        <ComponentInstanceIcon />
      </Button>
      <Button
        className="rounded-none rounded-r-full"
        onClick={() => {
          props.callback(true);
        }}
      >
        <TrackNextIcon />
      </Button>
    </div>
  ) : (
    <div className="fixed bottom-8 left-[47.5%]">
      <Button className="rounded-none rounded-l-full" disabled>
        <TrackPreviousIcon />
      </Button>
      <Button className="rounded-none cursor-default hover:bg-primary" disabled>
        <ComponentInstanceIcon />
      </Button>
      <Button className="rounded-none rounded-r-full" disabled>
        <TrackNextIcon />
      </Button>
    </div>
  );
}
