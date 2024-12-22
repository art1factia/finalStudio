import React from 'react';
import { motion } from 'framer-motion';
import RotatedTextAnimation from './RotatedTextAnimation';
import BlockAnimation from './BlockAnimation';

const Aboutme = ({ toggleMode }) => {
  return (
    <div>
      <div style={{ position: 'absolute', width: '0vw', height: '0vh', backgroundColor: "#000" }}>
        <link href='https://fonts.googleapis.com/css?family=Text Me One' rel='stylesheet'></link>
        <motion.div
          initial={{ x: "-150vw", y: "25vh", opacity: 0, rotate: 90 }} // 초기 상태
          animate={{ x: "-85vw", y: "25vh", opacity: 1 }} // 최종 상태
          transition={{ type: "spring", stiffness: 30 }}
          style={{
            position: 'absolute',
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#fff',
            whiteSpace: "nowrap",
            fontFamily: 'Text Me One'
          }}
        >
          <p style={{ margin: 0 , padding:"10px 20px", mixBlendMode:"difference"}}>ABOUT ME</p>
        </motion.div>
      </div>
    </div>
  )
};

export default Aboutme;