import React from 'react';
import { motion } from 'framer-motion';

const BlockAnimation = ({ width, height, backgroundColor, color, anim, text, mixBlendMode, align, fontFamily, toggleMode, fontSize, alignItems }) => {
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      transition={anim.transition}
      style={{
        position: 'absolute',
        fontSize: fontSize ? fontSize : '2.5rem',
        fontWeight: 'bold',
        textAlign: align ? align : "left",
        color: color ? color : '#fff',
        fontFamily: 'pretendard',
        mixBlendMode,

      }}
    >
      <div style={{ position: 'relative', flex: 1, width, height, backgroundColor, overflow: 'hidden', alignContent: alignItems }}>
        <link href='https://fonts.googleapis.com/css?family=Text Me One' rel='stylesheet'></link>

        <motion.p
          style={{
            margin: "10px 20px",
            padding: "0px",
            fontFamily: fontFamily ? fontFamily : "pretendard",
            cursor: "pointer",
            lineHeight: "1.75rem",
            fontWeight: "normal",
          }}
          onClick={toggleMode}
          whileHover={{ scale: 1.02 }} // Hover 시 크기 증가
          transition={{ duration: 0.2, ease: "easeInOut" }} // 부드러운 애니메이션
        >
          {text}
        </motion.p>

      </div>
    </motion.div>
  );
};

export default BlockAnimation;