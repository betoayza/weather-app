import React from "react";
import { Form } from "react-router-dom";

export const MainForm = ({ handleSubmit }) => {
  return (
    <div className={"container"}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={"form-row form-control"}
          type="text"
          role={"search"}
          placeholder={"Search..."}
          style={{ color: "#6f00ff" }}
          name={"city"}
        />
        <button
          type="submit"
          className={"btn btn-light m-2"}
          style={{ fontWeight: "bold" }}
        >
          Go
        </button>
      </Form>
    </div>
  );
};
