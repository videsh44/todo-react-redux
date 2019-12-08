import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";
import { Modal, Card, Form, Input, Icon, Button } from "antd";

const Edit = props => {
  //console.log(props.selectedEditDetails);

  const [text, setText] = useState(props.selectedEditDetails.text);

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    // e.preventDefault();
    //console.log(text);
    props.editTodo(props.selectedEditDetails.id, text);
    props.setEditModalShow(false);
  };

  return (
    <div>
      <Modal
        visible={props.visible}
        closable={true}
        destroyOnClose={true}
        footer={false}
        onCancel={props.onCancel}
      >
        <div style={{ padding: "30px" }}>
          <Card title="Task Details" style={{ width: "100%" }} bordered={false}>
            <Input
              prefix={<Icon type="file-add" />}
              onChange={e => onInputChange(e)}
              value={text}
            />
            <Button
              onClick={onSubmit}
              style={{ marginTop: "30px" }}
              type="primary"
            >
              Update
            </Button>
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default connect(null, { editTodo })(Edit);
