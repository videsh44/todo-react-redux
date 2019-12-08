import React from "react";
import { Modal, Card, Button } from "antd";

const Details = props => {
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
          <Card
            title="Task Details"
            extra={<Button type="link">Explore</Button>}
            style={{ width: "100%" }}
            bordered={false}
          >
            <div style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}>
              Id : {props.selectedDetails.id}
            </div>
            <div style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}>
              Task : {props.selectedDetails.text}{" "}
            </div>
            <div style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}>
              Status :{" "}
              <span
                style={{
                  color:
                    props.selectedDetails.completed === true ? "green" : "red"
                }}
              >
                {props.selectedDetails.completed === true
                  ? "completed"
                  : "unComplete"}
              </span>
            </div>
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
