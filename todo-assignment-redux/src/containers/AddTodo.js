import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Icon, message } from "antd";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");

  const onInputChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo === "" || todo === " " || todo === null || todo === undefined) {
      message.warning("Enter Task");
      return;
    }
    dispatch(addTodo(todo));
    setTodo(" ");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0px auto" }}>
      <Form onSubmit={onSubmit}>
        <Input
          prefix={<Icon type="file-add" />}
          onChange={e => onInputChange(e)}
          value={todo}
        />
        <button
          style={{
            marginTop: "30px",
            padding: "6px 14px",
            background: "#1890FF",
            color: "#fff",
            borderRadius: "5px",
            border: 0
          }}
          type="submit"
        >
          Add Todo
        </button>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
