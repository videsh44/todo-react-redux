import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Icon, Button } from "antd";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");

  const onInputChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
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
        <Button style={{ marginTop: "30px" }} type="Primary">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
