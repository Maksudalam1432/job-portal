import React, { useState } from "react";
import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authslice";
import { Loader2 } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clearInputs = () => {
    setInput({ email: "", password: "", role: "" });
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password || !input.role) {
      toast.error("Please fill email, password and select a role.");
      return;
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        input,
        { withCredentials: true }
      );

      if (res.data?.success) {
        dispatch(setUser(res.data.user));
        toast.success(`Welcome back, ${res.data.user?.name || "User"}`);
        clearInputs();
        navigate("/");
      } else {
        toast.error(res.data?.message || "Login failed");
        clearInputs();
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error.message ||
        "Login failed";
      toast.error(msg);
      clearInputs();
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
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
          onSubmit={handleSubmit}
          className="relative z-10 bg-white w-full max-w-md flex flex-col gap-5 p-6 rounded-lg shadow-xl backdrop-blur-md bg-opacity-90"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={handleChange}
            className="border h-12 rounded-md px-4 w-full"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={handleChange}
              className="border h-12 rounded-md px-4 w-full pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>

          <div className="flex flex-col mt-2">
            <Label className="font-semibold mb-2">Select Role</Label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                Recruiter
              </label>
            </div>
          </div>

          {loading ? (
            <Button
              disabled
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-gray-400 cursor-not-allowed"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              Logging in...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-900"
            >
              Login
            </Button>
          )}

          <p className="text-blue-600 text-center underline text-sm">
            <button type="button" onClick={() => navigate("/signup")}>
              Create an account? Signup
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
