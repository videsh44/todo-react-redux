import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Logout from "./Logout";

const Home = () => {
  return (
    <div>
      <Logout />
      <div
        style={{
          textAlign: "center",
          margin: "0px auto",
          marginTop: "50px",
          maxWidth: "500px"
        }}
      >
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
