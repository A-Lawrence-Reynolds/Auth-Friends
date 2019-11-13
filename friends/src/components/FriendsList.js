import React, { useState, useEffect } from "react";

import Friend from "./Friend";
import AddFriends from "./AddFriends";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then(res => {
        console.log("the response", res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log("An error", err);
      });
  }, []);

  return (
    <div className="friends-list">
      <AddFriends />
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default FriendsList;
