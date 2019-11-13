import React from "react";

const Friend = ({ friend }) => {
  const { name, age, email } = friend;
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default Friend;
