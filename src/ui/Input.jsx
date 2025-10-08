import React from "react";

function Input({ inputField }) {
  const { placeholder, type } = inputField;
  return (
    <input
      type={type}
      placeholder={placeholder}
      class="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-active"
    />
  );
}

export default Input;
