import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import md from "@/assets/md.jpg";
import { Button } from "../ui/button";
import { LogOut, User2, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = true;
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md transition">
      <div className="flex justify-between items-center">

        <h1 className="font-sans text-2xl font-semibold">
          <span className="text-purple-600">JOB</span>{" "}
          <span className="text-blue-600">PORTAL</span>
        </h1>

        <div className="flex gap-8 items-center">
          <ul className="hidden md:flex gap-5 font-medium cursor-pointer">
            <li className="hover:text-blue-600 dark:hover:text-purple-400"> <Link to="/">Home </Link>   </li>
            <li className="hover:text-blue-600 dark:hover:text-purple-400"><Link to="/job">Job </Link></li>
            <li className="hover:text-blue-600 dark:hover:text-purple-400"><Link to="/Browers">Browers</Link></li>
          </ul>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {!user ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={md} />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72 dark:bg-gray-800 dark:text-white">
                <div className="flex gap-4 items-center border-b pb-3">
                  <Avatar>
                    <AvatarImage src={md} />
                  </Avatar>
                  <h4 className="text-xl font-semibold">Maksud Alam</h4>
                </div>

                <div className="flex flex-col text-gray-600 dark:text-gray-300 mt-3 gap-2">
                  <div className="flex gap-3 items-center hover:text-blue-600 cursor-pointer dark:hover:text-purple-400">
                    <User2 size={18} />
                    View Profile
                  </div>
                  <div className="flex gap-3 items-center hover:text-blue-600 cursor-pointer dark:hover:text-purple-400">
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
