import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log("form data",value)
    e.preventDefault();
    createTodo(value);
    setValue('');
  };
  return (
    <div className="bg-teal-200 p-4 rounded-md  flex justify-center">
      <form className="font-primary " onSubmit={handleSubmit}>
        <input
          required
          type="text"
          className="outline-none bg-gray-900 border border-gray-950 p-4 w-[300px] text-white
          rounded placeholder:text-white "
          placeholder="What task do u have today?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="bg-gray-900 border-none p-2 text-white cursor-pointer rounded ml-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
