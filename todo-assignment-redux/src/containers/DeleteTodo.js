import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import { Popconfirm, Icon } from "antd";

const DeleteTodo = props => {
  const onDeleteClick = () => {
    //console.log(props);
    props.deleteTodo(props.itemId);
  };

  return (
    <div>
      <Popconfirm
        title="Are you sure delete this task?"
        onConfirm={onDeleteClick}
        okText="Yes"
        cancelText="No"
      >
        <Icon style={{ color: "#fff", fontSize: "20px" }} type="delete" />
      </Popconfirm>
    </div>
  );
};

export default connect(null, { deleteTodo })(DeleteTodo);
