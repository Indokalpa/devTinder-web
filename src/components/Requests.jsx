import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="text-bold text-xl"> No Requests Found </h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl"> Connection Requests </h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
            key={_id}
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              ></img>
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              <p>{about}</p>
              {age && gender && <p>{age + ", " + gender}</p>}
            </div>
            <div>
              <button className="btn btn-primary mx-2">Primary</button>
              <button className="btn btn-secondary mx-2">Secondary</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
