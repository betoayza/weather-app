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
          placeholder={"City..."}
          style={{ color: "#6f00ff", fontWeight: "bold" }}
          name={"city"}
        />
        <button type="submit" className={"btn btn-success m-2"}>
          <i className="bi-search"></i>
        </button>
      </Form>
    </div>
  );
};
