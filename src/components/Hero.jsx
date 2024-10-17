import React from "react";
import Button from "./Button";
import { CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="bg-[#FCEED5] w-full text-navi-blue
   h-[500px] flex flex-row"
    >
      <div className="w-1/2 flex text-wrap flex-col justify-center gap-4 px-8">
        <h1 className="font-bold text-6xl">One more friend</h1>
        <h2 className="font-semibold text-5xl">Thousands more fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        <div className="w-full flex flex-row gap-4 items-center">
          <Button isBordered customStyles="flex flex-row gap-6">
            View Intro <CirclePlay />
          </Button>
          <Button>Explore Now</Button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
