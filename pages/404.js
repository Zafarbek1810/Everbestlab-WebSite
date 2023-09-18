import React from "react"
import MyLink from "../Components/CommonComponents/MyLink";

const CustomErrorPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", color: "#fff" }}>
        <h2
          style={{
            color: "#fff",
          }}
        >
          404
        </h2>
        <div
          style={{
            width: "1px",
            margin: "0 24px",
            height: "64px",
            backgroundColor: "#fff",
          }}
        ></div>
        <h2 style={{ color: "#fff" }}>
          This page could not be found
          <br />
          <MyLink to="/" style={{ color: "#777" }}>
            Back To Home
          </MyLink>
        </h2>
      </div>
    </div>
  )
}

export default CustomErrorPage
