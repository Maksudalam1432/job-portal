import React, { useState } from "react";

import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authslice";
import { Loader2 } from "lucide-react";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const ChangeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const Changefilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submithandle = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("fullname", input.fullname);
    formdata.append("email", input.email);
    formdata.append("password", input.password);
    formdata.append("phoneNumber", input.phoneNumber);
    formdata.append("role", input.role);
    if (input.file) formdata.append("file", input.file);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
  
    <div className="w-full">


      <div className="min-h-screen w-full flex justify-center items-center px-4">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #7c3aed 100%)",
          }}
        />

        <form
          onSubmit={submithandle}
          className="relative z-10 w-full max-w-md flex flex-col gap-5 p-6 bg-white 
          rounded-xl shadow-xl transition-all duration-300 backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>

          <input
            type="text"
            placeholder="Full Name"
            value={input.fullname}
            name="fullname"
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 text-[16px]"
          />

          <input
            type="email"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 text-[16px]"
            />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={ChangeEventhandler}
              className="border h-12 rounded-md px-4 w-full pr-12 text-[16px]"
              />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-600"
              >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            value={input.phoneNumber}
            name="phoneNumber"
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 text-[16px]"
            />

          <div className="flex flex-col gap-2">
            <Label className="font-semibold">Select Role</Label>

            <div className="flex justify-between">
              <label className="flex items-center gap-2 text-lg">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={ChangeEventhandler}
                  className="w-4 h-4"
                  />
                Student
              </label>

              <label className="flex items-center gap-2 text-lg">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={ChangeEventhandler}
                  className="w-4 h-4"
                  />
                Recruiter
              </label>
            </div>

            <Label className="mt-2">Profile Picture</Label>
            <input
              accept="image/*"
              type="file"
              name="file"
              onChange={Changefilehandler}
              className="border h-12 rounded-md p-2"
              />
          </div>

          {loading ? (
            <Button
              type="button"
              disabled
              className="w-full flex items-center justify-center gap-3 bg-gray-400 cursor-not-allowed"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              Please Wait...
            </Button>
          ) : (
            <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-900 text-[18px] h-12"
            >
              Signup
            </Button>
          )}

          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
              </>
  );
}

export default Signup;
