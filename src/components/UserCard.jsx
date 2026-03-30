import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  if (!user) {
    return null;
  }

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="w-full max-w-[18rem]">
      <div className="card overflow-hidden rounded-3xl bg-base-200 shadow-xl">
        <figure className="aspect-auto bg-base-300">
          <img
            src={photoUrl || "https://placehold.co/600x750?text=No+Photo"}
            alt={`${firstName || "User"} profile`}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-xl">
            {[firstName, lastName].filter(Boolean).join(" ")}
          </h2>
          {(age || gender) && (
            <p className="text-sm opacity-70">
              {[age, gender].filter(Boolean).join(" - ")}
            </p>
          )}
          <p className="text-sm leading-5">{about || "No bio added yet."}</p>
          <div className="card-actions mt-3 grid grid-cols-2 gap-2">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
