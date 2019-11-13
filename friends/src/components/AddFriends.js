import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriends = () => {
  const [info, setInfo] = useState({ name: "", age: "", email: "" });

  const handleChanges = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    // e.preventDefault();
    axiosWithAuth()
      .post("api/friends", info)
      .then(res => {
        setInfo({
          ...info,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log("an error", err.response));
  };

  return (
    <div className="friend-info">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Add friend's name..."
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          value={info.age}
          placeholder="Add friend's age"
          onChange={handleChanges}
        />
        <input
          type="text"
          name="email"
          value={info.email}
          placeholder="Add friend's email..."
          onChange={handleChanges}
        />
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
