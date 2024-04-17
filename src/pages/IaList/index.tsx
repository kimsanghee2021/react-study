import React from "react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const btn = {
    fontSize: 20,
    marginRight: 15,
    borderRadius: "30px",
    padding: 15,
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
      <div
        style={{
          width: "1200px",
          margin: "0 auto",
          padding: "250px 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 150, fontWeight: 600, textAlign: "center" }}>
          React Study List
        </h1>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            margin: "50px 0 100px 0",
          }}
        >
          react 작업리스트 입니다. 클릭시 각 페이지로 이동 합니다.
        </p>
        <button onClick={() => navigate("./miniblog")} style={btn}>
          mini 블로그 보러가기
        </button>
        <button onClick={() => navigate("./todolist")} style={btn}>
          todo List 보러가기
        </button>
        <button onClick={() => navigate("./main")} style={btn}>
          tiving 보러가기
        </button>
      </div>
    </div>
  );
};

export default Index;
