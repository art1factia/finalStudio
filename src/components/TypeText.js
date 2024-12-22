import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, typingSpeed = 100, mode }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    if (mode !== 'vertical') {
      setDisplayedText('')
    } else {

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval); // 타이핑 완료 후 클리어
        }
      }, typingSpeed);


      return () => clearInterval(typingInterval);
    } // 컴포넌트 언마운트 시 정리
  }, [text, typingSpeed, mode]);

  return (
    <motion.p
      style={{
        textAlign: "left", margin: 0, fontSize: "1.25rem", color: "#222", padding: "0px", fontFamily: "pretendard", fontWeight: "400",
        whiteSpace: "pre-line", height:"20vh"
      }}
      animate={{ opacity: [0, 1] }} // 페이드 효과
      transition={{ duration: 0.3 }}
    >
      {displayedText}
    </motion.p>
  );
};

export default TypingText;
