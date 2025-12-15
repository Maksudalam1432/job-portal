import React from "react";
import { X } from "lucide-react";

function UpdateProfile({ setOpen, user }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold mb-4">Update Profile</h2>

        <div className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            defaultValue={user?.fullname}
            placeholder="Name"
          />
          <input
            className="w-full border p-2 rounded"
            defaultValue={user?.email}
            placeholder="Email"
          />
          <input
            className="w-full border p-2 rounded"
            defaultValue={user?.phone}
            placeholder="Number"
          />
          <textarea
            className="w-full border p-2 rounded"
            defaultValue={user?.bio}
            placeholder="Bio"
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Skills (comma separated)"
          />
          <input type="file" className="w-full border p-2 rounded" />
        </div>

        <button
          onClick={() => setOpen(false)}
          className="w-full mt-5 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
