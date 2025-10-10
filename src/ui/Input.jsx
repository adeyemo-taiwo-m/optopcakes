import React from "react";

function Input({ inputField, register, errors }) {
  const { placeholder, type, fieldName, message } = inputField;
  return (
    <>
      <input
        type={type}
        {...register(fieldName, { required: message })}
        placeholder={placeholder}
        class="border border-gray-300 rounded-md text-sm tab:text-base p-3 focus:outline-none focus:ring-2 focus:ring-primary-active"
      />
      {errors.fieldName && <p>{message}</p>}
    </>
  );
}

export default Input;
