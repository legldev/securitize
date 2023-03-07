import React, { useState } from "react";

export const AddWallet = ({ onAddWallet }) => {
  const [address, setAddress] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddWallet(address);
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
