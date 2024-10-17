import React from "react";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import PetCard from "./PetCard";
import { TEMPPETDATA } from "../constants";
import Pets from "./Pets";

const WhatsNew = () => {
  return (
    <section
      className="w-full max-w-[1200px]  mx-auto text-navi-blue
   h-auto flex flex-col py-10 "
    >
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          <p className="text-lg">Whats new?</p>
          <h2 className="text-xl font-bold">Take A Look At Some Of Our Pets</h2>
        </div>
        <Button isBordered>
          View More <ChevronRight />
        </Button>
      </div>
      <Pets />
    </section>
  );
};

export default WhatsNew;
