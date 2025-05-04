"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Text = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Success!") : toast.error("Error!");
  };

  return (
    <div>
      <Button
        onClick={() => handleClick(false)}
        className=""
        variant="default"
        size="default"
      >
        Button
      </Button>
    </div>
  );
};

export default Text;
