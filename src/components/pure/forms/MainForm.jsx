import React from "react";
import { useSubmit, Form } from "react-router-dom";

export const MainForm = () => {
  let submit = useSubmit();

  return (
    <div>
      <Form onChange={(e) => submit(e.currentTarget)}>
        <input type="text" role={"search"} placeholder={"Search..."} />
        <button type="submit">Go</button>
      </Form>
    </div>
  );
};
