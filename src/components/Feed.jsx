import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        dispatch(addFeed([]));
      }
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return <h1 className="flex justify-center my-10">Loading users...</h1>;
  }

  if (feed.length <= 0) {
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-4xl items-center justify-center px-4 py-8">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
