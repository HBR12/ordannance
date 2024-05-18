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
  return (
    <div className="w-full grid grid-cols-2">
      <Button
        className="rounded-none rounded-l-md"
        onClick={() => {
          props.callback(false);
        }}
        disabled={props.result == null}
      >
        <TrackPreviousIcon />
      </Button>
      <Button
        className="rounded-none rounded-r-md"
        onClick={() => {
          props.callback(true);
        }}
        disabled={props.result == null}
      >
        <TrackNextIcon />
      </Button>
    </div>
  );
}
