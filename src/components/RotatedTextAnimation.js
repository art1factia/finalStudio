import React from 'react';
import { motion } from 'framer-motion';

const RotatedTextAnimation = ({text}) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh',overflow: 'hidden' }}>
      <link href='https://fonts.googleapis.com/css?family=Text Me One' rel='stylesheet'></link>
      <motion.div
        initial={{ x:"-40%", y: "-100vh", opacity: 0, rotate: 90 }} // 초기 상태
        animate={{ x:"-40%", y: "30vh", opacity: 1 }} // 최종 상태
        transition={{ type: "spring", stiffness: 30 }}
        style={{
          position: 'absolute',
          transform: 'translateX(0%)',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#333',
          whiteSpace: "nowrap",
          fontFamily: 'Text Me One'
        }}
      >
        <p style={{margin:0}}>{text}</p>
      </motion.div>
    </div>
  );
};

export default RotatedTextAnimation;
