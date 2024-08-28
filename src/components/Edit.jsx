import React, { useState } from "react";

const Edit = ({ editTodo,task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log("form data",value)
    e.preventDefault();
    editTodo(value,task.id);
    setValue('');
  };
  return (
    <div >
      <form className=" font-primary" onSubmit={handleSubmit}>
        <div className="font-primary p-3  rounded-md flex gap-2 ">
          <input
            required
            type="text"
            className="outline-none bg-gray-900 border border-gray-950 p-2 w-full text-white
            rounded placeholder:text-white "
            placeholder="Update Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="bg-gray-900 border-none p-2 text-white cursor-pointer rounded  ">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
