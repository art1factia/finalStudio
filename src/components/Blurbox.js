import React from "react";
import { motion } from "framer-motion";

const BlurBox = ({ mode }) => {
  return (
    <motion.div
      initial={{
        top: mode === "horizontal" ? "27.5%" : "50%",
        
        height: mode === "horizontal" ? "45%" : "90%" }} // 초기 상태
      animate={{
        top: mode === "horizontal" ? "27.5%" : "50%",
        
        height: mode === "horizontal" ? "45%" : "90%", // mode에 따라 height 조정
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // 애니메이션 설정
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flex: "1",
        width: "90%",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgb(255, 255, 255)",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
        fontSize: "18px",
        textAlign: "center",
      }}
    >
      {/* {mode === "horizontal" ? "Horizontal Mode" : "Default Mode"} */}
    </motion.div>
  );
};

export default BlurBox;
