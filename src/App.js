import logo from './logo.svg';
import './App.css';
import BlurBox from './components/Blurbox';
import RotatedTextAnimation from './components/RotatedTextAnimation';
import BlockAnimation from './components/BlockAnimation';
import { dummy } from './config';
import GradientPlane from './components/GradientPlane/GradientPlane';
import { Canvas } from '@react-three/fiber';
import GradientCircle from './components/GradientCircle/GradientCircle';
import { useState } from 'react';
import { motion, transform } from "framer-motion";
import Aboutme from './components/Aboutme';
import Viewwork from './components/Viewwork';
import GradientPlaneSimple from './components/GradientPlane/GradientPlaneSimple';
import { Github, Instagram, Mail } from 'lucide-react';
import TypingText from './components/TypeText';
import GLBViewer from './components/STLViewer';


function App() {
  const [mode, setMode] = useState("default");

  const toggleMode = () => {
    console.log(mode)
    setMode((prevMode) => (prevMode === "default" ? "horizontal" : "default"));
    console.log(mode)
  };

  console.log(mode)
  return (
    <div className="App">
      <div style={{ display: "flex", flex: 1, width: "100%", height: "100vh", boxSizing: "border-box", backgroundColor: "#f1f1f1" }}>
        <div style={{
          flex: 1
        }}>
          <BlockAnimation width={"70vw"} height={"100vh"} backgroundColor={"#fff"} anim={{
            initial: { x: "-70vw", opacity: 0 },
            animate: { x: "-20vw", opacity: 1 },
            transition: { type: "spring", stiffness: 50 }
          }}
            text={''}
          />
          <motion.div
            initial={{
              height: "100vh",
              width: "50vw"
            }} // 초기 상태
            animate={{
              height: mode === "horizontal" ? "50vh" : "100vh", // mode에 따라 height 조정
              width: mode === "horizontal" ? "100vw" : "50vw",
              opacity: mode === "horizontal" ? 0.3 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // 애니메이션 설정
            style={{
              position: "absolute",
              overflow: 'hidden'
            }}
          >
            <Canvas
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              }}>
              <GradientPlane />
            </Canvas>
          </motion.div>
          <BlockAnimation width={"50vw"} height={"100vh"} backgroundColor={"none"} anim={{
            initial: { x: "-50vw", opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={''}
            mixBlendMode={'difference'}
          />
        </div>
        <div style={{
          flex: 1
        }}>
          <Canvas style={{
            position: "absolute",
            bottom: "-100px",
            right: mode === "horizontal" ? "75vw" : "-100px",
            opacity: mode === "horizontal" ? 0.3 : 1,
            width: "600px",
            height: "600px",
            borderRadius: "50%"
          }}>
            <GradientCircle />
          </Canvas>
          <img src='overlay.jpg' style={{
            mixBlendMode: "overlay",
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
          }} />
          <BlurBox mode={mode}><p>일해라으하하하하ㅏㅏㅏㅏㅏㅏ</p></BlurBox>


          {mode === 'default' && <div>
            <RotatedTextAnimation text={'HELLO WORLD !'} />
            <BlockAnimation width={"50vw"} height={"30vh"} backgroundColor={"none"} anim={{
              initial: { x: "-50vw", y: 0, opacity: 0 },
              animate: { y: "-30vh", opacity: 1 },
              transition: { type: "spring", stiffness: 20 }
            }}
              text={'ABOUT ME'}
              fontFamily={'text me one'}
              align={'right'}
              color={"#222"}
              toggleMode={() => { setMode('horizontal') }}
            />
            <BlockAnimation width={"50vw"} height={"20vh"} backgroundColor={"none"} anim={{
              initial: { x: "-50vw", y: 0, opacity: 0 },
              animate: { y: "-20vh", opacity: 1 },
              transition: { type: "spring", stiffness: 20 }
            }}
              text={'VIEW WORK'}
              fontFamily={'text me one'}
              align={'right'}
              color={"#222"}
              toggleMode={() => { setMode('vertical') }}
            />
          </div>}
        </div>
        <div>
          {/* {mode === 'horizontal' && <Aboutme></Aboutme>} */}
          <BlockAnimation width={mode === 'horizontal' ? "100vw" : "0vw"} height={"20vh"} backgroundColor={"none"} anim={{
            initial: { x: "-100vw", y: "0vh", opacity: 0, rotate: 90 },
            animate: { x: "-170vw", y: "0vh", opacity: mode === "horizontal" ? 1 : 0 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={'VIEW WORK'}
            fontFamily={'text me one'}
            align={'right'}
            color={"#fff"}
            toggleMode={() => { setMode('vertical') }}
          />
          <BlockAnimation width={"100vw"} height={"20vh"} backgroundColor={"none"} anim={{
            initial: { x: "-170vw", y: mode === 'horizontal' ? "50vh" : "70vh", opacity: 0 },
            animate: { x: "-170vw", y: mode === 'horizontal' ? "50vh" : "70vh", opacity: mode === "horizontal" ? 1 : 0 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={'<  VIEW WORK'}
            fontFamily={'text me one'}
            align={'right'}
            color={"#222"}
            toggleMode={() => { setMode('vertical') }}
          />
          <BlockAnimation width={mode === 'horizontal' ? "100vw" : "0vw"} height={"20vh"} backgroundColor={"none"} anim={{
            initial: { x: "-170vw", y: mode === 'horizontal' ? "58vh" : "78vh", opacity: 0 },
            animate: { x: "-170vw", y: mode === 'horizontal' ? "58vh" : "78vh", opacity: mode === "horizontal" ? 1 : 0 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={'<  HOME'}
            fontFamily={'text me one'}
            align={'right'}
            color={"#222"}
            toggleMode={() => { setMode('default') }}
          />
          <BlockAnimation width={mode === 'horizontal' ? "60vw" : "0vw"} height={"50vh"} backgroundColor={"none"} anim={{
            initial: {
              height: "0vh",
              width: mode === 'horizontal' ? "60vw" : "0vw", x: mode === 'horizontal' ? "-70vw" : "-100vw", y: "-50vh", opacity: 0
            },
            animate: {
              height: "50vh", // mode에 따라 height 조정
              width: mode === "horizontal" ? "60vw" : "0vw",
              x: mode === 'horizontal' ? "-70vw" : "-100vw", y: "0vh",
              opacity: mode === "horizontal" ? 1 : 0
            },
            transition: { type: "spring", stiffness: 20 }
          }}
            fontSize={'1.25rem'}
            text={"Hello! I'm Lee Hyunseo, currently majoring in Art and Technology and Computer Engineering at Sogang University. I have a strong interest in creative coding, particularly in 3D graphics and abstract visual design, and have worked on various projects in these areas as my main focus."}
            align={'left'}
            alignItems={'flex-end'}
            color={"#222"}
          />

          {mode === 'vertical' && <BlockAnimation width={"100vw"} height={"20vh"} backgroundColor={"none"} anim={{
            initial: { x: "-190vw", y: "10vh", opacity: 0 },
            animate: { x: "-150vw", y: "10vh", opacity: 1 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={'<  ABOUT ME'}
            fontFamily={'text me one'}
            align={'right'}
            color={"#222222"}
            toggleMode={() => { setMode('horizontal') }}
          />}
          {mode === 'vertical' && <BlockAnimation width={"100vw"} height={"20vh"} backgroundColor={"none"} anim={{
            initial: { x: "-190vw", y: "18vh", opacity: 0 },
            animate: { x: "-150vw", y: "18vh", opacity: 1 },
            transition: { type: "spring", stiffness: 20 }
          }}
            text={'<  HOME'}
            fontFamily={'text me one'}
            align={'right'}
            color={"#222222"}
            toggleMode={() => { setMode('default') }}
          />}

          <motion.div
            initial={{
              height: "0vh",
              width: "0vw",
              x: "-25vw",
              opacity: 0
            }} // 초기 상태
            animate={{
              height: "45vh", // mode에 따라 height 조정
              width: mode === "horizontal" ? "65vw" : "0vw",
              x: mode === "horizontal" ? "0vw" : "-25vw",
              opacity: mode === "horizontal" ? 1 : 0,
            }}
            transition={{ duration: 2, ease: "easeInOut" }} // 애니메이션 설정
            style={{
              position: "absolute",
              top: "50vh",
              left: "30vw",
              overflow: 'hidden',
              borderRadius: "30px"
            }}
          >
            <Canvas
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",

              }}>
              <GradientPlaneSimple />
            </Canvas>
          </motion.div>
          {mode === 'horizontal' &&
            <motion.div
              initial={{ x: "-70vw", y: "100vh", opacity: 0 }}
              animate={{ x: "-70vw", y: "50vh", opacity: 1 }}
              transition={{ type: "spring", stiffness: 20 }}
              style={{
                position: 'absolute',
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: "left",
                color: "#222",
                fontFamily: 'pretendard',

              }}
            >
              <div style={{ position: 'relative', flex: 1, width: "60vw", height: "50vh", backgroundColor: "none", overflow: 'hidden' }}>
                <link href='https://fonts.googleapis.com/css?family=Text Me One' rel='stylesheet'></link>

                <div style={{
                  display: "flex",
                  padding: "10px 50px",
                  gap: "20px",
                  margin: 0,
                  divadding: "10px 60px",
                  fontFamily: "pretendard",
                  cursor: "pointer",
                  lineHeight: "1.75rem",
                  fontWeight: "100"
                }}
                  onClick={() => { setMode('default') }}>
                  <motion.div whileHover={{ scale: 1.1 }}><Github strokeWidth={1.2} size={50} /></motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}><Instagram strokeWidth={1.2} size={50} /></motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}><Mail strokeWidth={1.2} size={50} /></motion.div>

                </div>

              </div>
            </motion.div>

          }
          <motion.div
            initial={{
              width: "0vw",
              left: "7.5vw",
            }} // 초기 상태
            animate={{
              // height: mode === "vertical" ? "50vh" : "100vh", // mode에 따라 height 조정
              width: mode === "vertical" ? "40vw" : "0vw",
              left: mode === "vertical" ? "27.5vw" : "7.5vw",
              opacity: mode === "vertical" ? 1 : 0
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }} // 애니메이션 설정
            style={{
              position: "absolute",
              top: "50vh",

              transform: "translate(-50%, -50%)",

            }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <motion.div style={{
                backgroundColor: "#ffffff",
                border: "1px solid white",
                borderRadius: "25px",
                height: "40vh",
                backgroundImage: `url("/example.jpg")`,
                backgroundSize: "cover", // 이미지 크기
                boxShadow: "0px 10px 10px #00000055"
              }}>
              </motion.div>
              {/* <motion.p style={{ borderRadius: "20px", fontSize: "1.5rem", backgroundColor: "#fff", color: "#222", marginBottom: "10px", padding: "10px", fontFamily: "text me one" }}
                whileHover={{ scale: 1.02 }} 
                transition={{ duration: 0.2, ease: "easeInOut" }} 
              >WANDAR</motion.p>
              <motion.p style={{ margin: 0, fontSize: "1.25rem", color: "#222", padding: "0px", fontFamily: "pretendard", fontWeight: "300" }}
                whileHover={{ scale: 1.02 }} 
                transition={{ duration: 0.2, ease: "easeInOut" }} 
              >3D liferecording App</motion.p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{
              width: "0vw",
              left: "57.5vw",
            }} // 초기 상태
            animate={{
              // height: mode === "vertical" ? "50vh" : "100vh", // mode에 따라 height 조정
              width: mode === "vertical" ? "40vw" : "0vw",
              left: mode === "vertical" ? "72.5vw" : "57.5vw",
              opacity: mode === "vertical" ? 1 : 0
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }} // 애니메이션 설정
            style={{
              position: "absolute",
              top: "40vh",
              transform: "translate(-50%, -50%)",

            }}>
            <div style={{ display: "flex", flexDirection: "column" }}>

              <motion.p style={{ textAlign: "left", borderRadius: "20px", fontSize: "3rem", color: "#222", marginBottom: "10px", padding: "10px", fontFamily: "text me one" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >WANDAR</motion.p>
              <motion.p style={{ textAlign: "left", margin: 0, fontSize: "1.25rem", color: "#222", padding: "0px", fontFamily: "pretendard", fontWeight: "500" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >3D liferecording App, 2023.03 - 2023.12</motion.p>
              <motion.div style={{
                // backgroundColor: "#ffffff",
                // border: "1px solid white",
                borderRadius: "25px",
                height: "30vh",
              }}>
                <p style={{ height:"20vh", overflow:"scroll",textAlign: "left", margin: 0, fontSize: "1.25rem", color: "#222", padding: "0px", fontFamily: "pretendard", fontWeight: "400" }} >
                  The project aims to develop a new Social Archiving system that combines a metaverse where a 'virtual self' exists with a system for documenting the 'real self.' In the application Wandar, virtual lands are created based on real-world locations, and users can select their preferred archiving methods to record their memories. Through this process, users can visually express their unique worldview in diverse ways and share it with others.
                </p>
                <GLBViewer modelPath={"/wandAR.glb"} />
              </motion.div>
            </div>
          </motion.div>
          {mode === 'vertical' && <Viewwork></Viewwork>}



        </div>

      </div>
    </div>);
}

export default App;
