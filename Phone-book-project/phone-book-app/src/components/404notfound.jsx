import React from 'react'
import Error404 from "../assets/404-error.svg";

const NotFound = () => {
  return (
    <div
    style={{
        zIndex: 1400,
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100vw",
        background: "white",
        height: "100vh",
    }}
>
    <div
        style={{
            height: "inherit",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <img src={Error404} width={327} height={250} />

        <h1 fontWeight="700" fontSize={"18px"} style={{ color: "#25274F" }}>
            Page not found!!
        </h1>
        <div style={{ marginTop: 12, marginBottom: 35 }}>
            <h2 fontWeight="400" fontSize={"12px"} style={{ color: "#636B81" }}>
                The page are you looking for does not exist.
            </h2>
        </div>
    </div>
</div>
   
  )
}

export default NotFound