import React from "react";

const Home = () => {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 0",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          textAlign: "center",
        }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="6">
          This is GPCET website
        </marquee>
      </nav>
      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h1>GPCET</h1>
        <h2>
          welcome to this website welcome to this website welcome to this
          website welcome to this website welcome to this website welcome to
          this website
        </h2>
      </div>
    </div>
  );
};

export default Home;
