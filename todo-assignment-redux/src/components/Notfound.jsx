import React from "react";
import { Result, Button } from "antd";

const Notfound = props => {
  const goBack = () => {
    props.history.push("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      <div style={{ marginTop: "4rem" }}>
        <Result status="404" />

        <div>
          <div
            style={{
              color: "#222222",
              fontSize: "16px",
              marginBottom: 30,
              fontWeight: 600
            }}
          >
            Sorry, the page you visited does not exist.
          </div>
          <Button type="primary" onClick={goBack}>
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
