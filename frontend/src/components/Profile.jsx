import React, { useState } from "react";
import { Mail, Phone, Pencil } from "lucide-react";
import Navbar from "./sharad/Navbar";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

function Profile() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Profile Card */}
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <img
                src="https://imgs.search.brave.com/vimj5l65NaR-kVR1hA7QJMwLsSNovfWQ1_m8iqbjXOA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg3LzI4LzEx/LzM2MF9GXzE4NzI4/MTE3OV8xdXMzdFFw/OVF5UXVwU3M4R01V/R1BBbXpLM29Ra0FH/Yy5qcGc"
                alt="avatar"
                className="h-16 w-16 rounded-full border"
              />

              <div>
                <h2 className="text-xl font-semibold">
                  {user?.fullname || "Full Name"}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {user?.bio || "No bio added yet"}
                </p>

                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail size={16} /> {user?.email || "user@gmail.com"}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} /> {user?.phone || "9876543210"}
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setOpen(true)}
              className="border rounded-md p-2 hover:bg-gray-100"
            >
              <Pencil size={16} />
            </button>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {(user?.skills || ["HTML", "CSS", "JavaScript", "React"]).map(
                (skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Resume */}
          <div className="mt-4">
            <h3 className="font-semibold mb-1">Resume</h3>
            <a
              href={user?.resume || "https://www.google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Applied Jobs */}
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Applied Jobs</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="pb-2">Date</th>
                <th className="pb-2">Role</th>
                <th className="pb-2">Company</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">17-07-2024</td>
                <td>Frontend Developer</td>
                <td>Google</td>
                <td>
                  <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs">
                    Selected
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3">18-07-2024</td>
                <td>React Developer</td>
                <td>Amazon</td>
                <td>
                  <span className="px-3 py-1 border rounded-full text-xs">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Profile Modal */}
      {open && <UpdateProfile setOpen={setOpen} user={user} />}
    </>
  );
}

export default Profile;
