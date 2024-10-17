import React from "react";
import { Logo, startlogo } from "../assets";
import { NAVBARITEMS } from "../constants";
import { Link } from "react-router-dom";
import Button from "./Button";
import Search from "../assets/icons/Search";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex flex-row items-center">
      <nav className="w-full flex gap-11 flex-row items-center py-7">
        <div className="flex flex-row gap-11">
          <img src={Logo} alt="logo" />
          <ul className="flex flex-row gap-12">
            {NAVBARITEMS.map((navItem) => (
              <li key={navItem.id} className="text-navi-blue font-medium">
                <Link to={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 items-center bg-white rounded-full py-2 px-3 w-full max-w-[280px]">
          <Search />
          <input
            className="bg-transparent"
            type="search"
            placeholder="Search something here!"
          />
        </div>
        <Button>Join the community</Button>
        <div className="flex flex-row items-center gap-3">
          <img src={startlogo} alt="" />
          <h3>VDN</h3>
          <ChevronDown size={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
