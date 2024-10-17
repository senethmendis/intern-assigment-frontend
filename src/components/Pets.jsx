import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { TEMPPETDATA } from "../constants";

const Pets = () => {
  const [data, setData] = useState([]);

  const fetchPetdata = async () => {
    const endPoint = "https://monitor-backend-rust.vercel.app/api/pets ";
    try {
      const res = await fetch(endPoint);
      if (!res.ok) {
        throw new Error(res.status);
      }

      const data = await res.json();
      setData(data);
      //to test
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPetdata();
  }, []);
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
      {data.map((card) => (
        <PetCard
          key={card.id}
          image={card.image}
          title={card.breed}
          age={card.age}
          price={card.price}
          gender={card.gender}
        />
      ))}
    </div>
  );
};

export default Pets;
