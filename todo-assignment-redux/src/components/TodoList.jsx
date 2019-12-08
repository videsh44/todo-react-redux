import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { List, Icon } from "antd";
import DeleteTodo from "../containers/DeleteTodo";
import Edit from "../containers/Edit";
import Details from "./Details";

const TodoList = ({ todos, toggleTodo }) => {
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState([]);

  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedEditDetails, setSelectedEditDetails] = useState(null);
  // console.log(userAuth);
  // localStorage.setItem("todos", JSON.stringify(todos));

  const onDetailModalClose = () => {
    setDetailModalShow(false);
  };

  const onEditModalClose = () => {
    setEditModalShow(false);
  };

  const onEditButtonClick = data => {
    setSelectedEditDetails(data);
    setEditModalShow(true);
  };

  const showDetails = data => {
    // console.log(data);
    setSelectedDetails(data);
    setDetailModalShow(true);
  };

  return (
    <div>
      <List
        style={{ margin: "30px 0" }}
        className="demo-loadmore-list"
        //loading={loading}
        itemLayout="horizontal"
        pagination={{
          pageSize: 3
        }}
        dataSource={todos}
        renderItem={item => (
          <List.Item
            style={{
              background: item.completed ? "green" : "teal",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
            actions={[
              <a
                //{...todos}
                style={{ color: "#fff" }}
                onClick={() => toggleTodo(item.id)}
              >
                <Icon
                  style={{
                    fontSize: "25px",
                    color: item.completed ? "#fff" : "red"
                  }}
                  type="check-circle"
                />
              </a>,
              <DeleteTodo itemId={item.id} />,
              <a onClick={() => onEditButtonClick(item)}>
                <Icon style={{ color: "#fff", fontSize: "20px" }} type="edit" />
              </a>
            ]}
          >
            <List.Item.Meta
              title={
                <span
                  onClick={() => showDetails(item)}
                  style={{ color: "#fff", cursor: "pointer" }}
                >
                  <span> {item.text}</span>
                  <Icon style={{ marginLeft: "5px" }} type="info-circle" />
                </span>
              }
            />
          </List.Item>
        )}
      />

      {detailModalShow === true ? (
        <Details
          visible={detailModalShow}
          onCancel={onDetailModalClose}
          selectedDetails={selectedDetails}
        />
      ) : null}

      {editModalShow === true ? (
        <Edit
          visible={editModalShow}
          onCancel={onEditModalClose}
          selectedEditDetails={selectedEditDetails}
          setEditModalShow={setEditModalShow}
        />
      ) : null}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
  //onClick: PropTypes.func.isRequired
};

export default TodoList;
