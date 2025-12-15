import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import md from "@/assets/md.jpg";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-sans text-2xl font-semibold">
          <span className="text-purple-600">JOB</span>{" "}
          <span className="text-blue-600">PORTAL</span>
        </h1>

        <div className="flex gap-8 items-center">

          {/* Nav Links */}
          <ul className="hidden md:flex gap-5 font-medium cursor-pointer">
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/job">Job</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/Browers">Browsers</Link>
            </li>
          </ul>

          {/* Auth Section */}
          {!user ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={md} />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72">
                <div className="flex gap-4 items-center border-b pb-3">
                  <Avatar>
                    <AvatarImage src={md} />
                  </Avatar>
                  <h4 className="text-xl font-semibold">Maksud Alam</h4>
                </div>

                <div className="flex flex-col text-gray-600 mt-3 gap-2">
                  <div className="flex gap-3 items-center hover:text-blue-600 cursor-pointer">
                    <User2 size={18} />
                    <Link to="/Profile">View Profile</Link>
                  </div>

                  <div className="flex gap-3 items-center hover:text-blue-600 cursor-pointer">
                    <LogOut size={18} />
                    Logout
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
  