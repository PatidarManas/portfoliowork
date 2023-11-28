import React, { useEffect } from "react";
import lt from "../lt.png";
import gt from "../gt.png";
import bw1 from "../bw1.jpg";
import bw2 from "../bw2.jpg";
import bw3 from "../bw3.jpg";
import bw4 from "../bw4.jpg";
import me from "../me.png";
import vid1 from "../vid1.mp4";
import vid2 from "../vid2.mp4";
import vid3 from "../vid3.mp4";
import vid4 from "../vid4.mp4";
import org1 from "../org1.mp4";
import org2 from "../org2.mp4";
import org4 from "../org4.mp4";
import edt1 from "../edt1.mp4";
import edt2 from "../edt2.mp4";
import edt4 from "../edt4.mp4";
import close from "../close.png";
import contact from "../contact.jpg";
import closeb from "../closeb.png";
const Home = () => {
  var slide = 1;

  function loadint() {
    document.getElementById("loader").style.transform = "translate(0,-100vh)";
  }
  useEffect(() => {
    setTimeout(function () {
      loadint();
    }, 3000);
  }, []);

  function gtclick(e) {
    e.preventDefault();
    document.getElementById("slide" + slide).style.display = "none";
    if (slide === 4) {
      slide = 1;
    } else {
      slide++;
    }
    document.getElementById("slide" + slide).style.display = "flex";
  }
  function ltclick(e) {
    e.preventDefault();
    document.getElementById("slide" + slide).style.display = "none";
    if (slide === 1) {
      slide = 4;
    } else {
      slide--;
    }
    document.getElementById("slide" + slide).style.display = "flex";
  }
  return (
    <>
      <div
        id="loader"
        className=" fixed transition-all ease-in duration-500 z-50 h-screen w-full  text-white bg-black flex flex-col justify-center items-center"
      >
        <div className="self-center text-2xl  text-center animate-[load_1s_ease-in-out_infinite] transition-transform ">
          mp.
        </div>
        <div className="font-sans text-3xl tracking-[1rem]  mt-5 text-center">
          Loading
        </div>
      </div>
      <div
        id="nav"
        style={{ backgroundColor: "#cc3" }}
        className="-translate-y-full  fixed transition-all ease-in duration-500 z-50 h-screen w-full  text-black "
      >
        <div className=" px-10 lg:px-40 py-10 flex justify-between">
          <a
            href="/"
            className="text-xl font-mono cursor-pointer flex  gap-1 hover:gap-7"
          >
            <div>m</div>
            <div>p</div>
            <div>.</div>
          </a>
          <button
            onClick={() => {
              document.getElementById("nav").style.transform =
                "translate(0,-100vh)";
            }}
            className="flex flex-col gap-1 hover:gap-2 justify-center cursor-pointer "
          >
            <img alt="" src={closeb} className="w-7 hover:opacity-50"></img>
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:mx-8 lg:mx-60 my-5 lg:my-20">
          <div className="flex flex-col gap-10  ml-10 w-2/5">
            <a
              href="#home"
              onClick={() => {
                document.getElementById("nav").style.transform =
                  "translate(0,-100vh)";
              }}
              className="text-4xl lg:text-5xl font-medium font-sans text-start hover:tracking-[1.25rem]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                document.getElementById("nav").style.transform =
                  "translate(0,-100vh)";
              }}
              className="text-4xl lg:text-5xl font-medium font-sans text-start hover:tracking-[1.25rem]"
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => {
                document.getElementById("nav").style.transform =
                  "translate(0,-100vh)";
              }}
              className="text-4xl lg:text-5xl font-medium font-sans text-start hover:tracking-[1.25rem]"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => {
                document.getElementById("nav").style.transform =
                  "translate(0,-100vh)";
              }}
              className="text-4xl lg:text-5xl font-medium font-sans text-start hover:tracking-[1.25rem]"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-10 md:w-3/5">
            <h1 className="hidden md:block text-2xl lg:text-3xl font-bold font-mono">
              Why not Work together? 👀
            </h1>
            <p className="hidden md:block text-sans text-2xl pr-20 lg:pr-40 text-justify tracking-wide">
              email us with your requirements and give us a chance to serve you
            </p>
            <a
              href="mailto:manaspatidar170@gmail.com"
              className="mt-20 ml-10 md:mt-0 md:ml-0 border-2 border-black px-6 py-2 bg-transparent hover:bg-black hover:text-white transition duration-500 w-max text-xl font-normal"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
      <div id="home" className="hidden md:block min-h-[calc(100vh+4rem)]">
        <div className=" text-white px-10 lg:px-40 py-10 flex justify-between">
          <a
            href="/"
            className="text-xl font-mono cursor-pointer flex  gap-1 hover:gap-7"
          >
            <div>m</div>
            <div>p</div>
            <div>.</div>
          </a>
          <button
            onClick={() => {
              document.getElementById("nav").style.transform = "translate(0,0)";
            }}
            className="flex flex-col gap-1 hover:gap-2 justify-center cursor-pointer"
          >
            <div className="w-7 h-1 bg-white"></div>
            <div className="w-4 h-1 bg-white self-end"></div>
            <div className="w-7 h-1 bg-white"></div>
          </button>
        </div>
        <div className="flex mx-10 md:mx-3 lg:mx-28 my-28 h-max  justify-between">
          <div className="flex">
            <button
              onClick={(e) => ltclick(e)}
              id="ltbtn"
              onMouseEnter={() => {
                document.getElementById("ltbtn").style.visibility = "hidden";
                document.getElementById("ltclick").style.visibility = "visible";
              }}
              className=" z-20  text-white justify-center  self-center text-xl border border-white rounded-full h-10 w-10 lg:h-20 lg:w-20 flex cursor-pointer"
            >
              <img alt="" src={lt} className="w-5 lg:w-10 self-center" />
            </button>

            <button
              onClick={(e) => ltclick(e)}
              id="ltclick"
              onMouseOut={() => {
                document.getElementById("ltbtn").style.visibility = "visible";
                document.getElementById("ltclick").style.visibility = "hidden";
              }}
              className="invisible z-0 text-black bg-white h-10 w-10 lg:h-20 lg:w-20 font-mono items-center justify-center self-center rounded-full text-lg  fixed"
            >
              click
            </button>
          </div>
          <div
            id="slide1"
            className="flex text-white w-full px-5 lg:px-24 gap-5"
          >
            <div className="self-center w-5/12 lg:w-1/2">
              <h1
                style={{ fontFamily: "Open Sans" }}
                className="md:text-6xl lg:text-7xl mb-6  underline-offset-8  font-extrabold"
              >
                Identity
              </h1>
              <h2 className=" border-l-8 px-3 border-blue-800 text-2xl mb-6 lg:mb-12  font-medium">
                Your video represents you
              </h2>
              <h2 className="text-xl font-thin  ">
                Elevate your image with polished professionalism.
              </h2>
            </div>
            <div className="flex">
              <img alt="" src={bw1} className="h-fit lg:h-72 self-center"></img>
            </div>
          </div>
          <div
            id="slide2"
            className="hidden text-white w-full px-5 lg:px-24 gap-5"
          >
            <div className="self-center w-5/12 lg:w-1/2">
              <h1
                style={{ fontFamily: "Open Sans" }}
                className="md:text-5xl lg:text-7xl mb-6  underline-offset-8  font-extrabold"
              >
                Interaction
              </h1>
              <h2 className=" border-l-8 px-3 border-blue-800 text-2xl mb-6 lg:mb-12  font-medium">
                Animated video speaks
              </h2>
              <h2 className="text-xl font-thin  ">
                Elevate engagement with the artistry of animated interaction.
              </h2>
            </div>
            <div className="flex">
              <img alt="" src={bw2} className="lg:h-72 self-center"></img>
            </div>
          </div>
          <div
            id="slide3"
            className="hidden text-white w-full px-5 lg:px-24 gap-5"
          >
            <div className="self-center w-5/12 lg:w-1/2">
              <h1
                style={{ fontFamily: "Open Sans" }}
                className="md:text-6xl lg:text-7xl mb-6  underline-offset-8  font-extrabold"
              >
                Sound
              </h1>
              <h2 className=" border-l-8 px-3 border-blue-800 text-2xl mb-6 lg:mb-12  font-medium">
                BGM creates vibe
              </h2>
              <h2 className="text-xl font-thin  ">
                Sound is the heartbeat that breathes life into the visual canvas
                of a video.
              </h2>
            </div>
            <div className="flex">
              <img alt="" src={bw3} className="h-max lg:h-72 self-center"></img>
            </div>
          </div>
          <div
            id="slide4"
            className="hidden text-white w-full px-5 lg:px-24 gap-5"
          >
            <div className="self-center w-5/12 lg:w-1/2">
              <h1
                style={{ fontFamily: "Open Sans" }}
                className="md:text-5xl lg:text-7xl mb-6  underline-offset-8  font-extrabold"
              >
                Attention
              </h1>
              <h2 className=" border-l-8 px-3 border-blue-800 text-2xl mb-6 lg:mb-12  font-medium">
                Attention is power
              </h2>
              <h2 className="text-xl font-thin  ">
                Editing crafts a captivating dance, ensuring viewers remain
                entranced.
              </h2>
            </div>
            <div className="flex">
              <img alt="" src={bw4} className="lg:h-72 self-center"></img>
            </div>
          </div>
          <div className="w-20 flex">
            <button
              onClick={(e) => gtclick(e)}
              id="gtbtn"
              onMouseEnter={() => {
                document.getElementById("gtbtn").style.visibility = "hidden";
                document.getElementById("gtclick").style.visibility = "visible";
              }}
              className="flex z-20  text-white justify-center  self-center text-xl border border-white rounded-full h-10 w-10 lg:h-20 lg:w-20 cursor-pointer"
            >
              <img alt="" src={gt} className="w-5 lg:w-10 self-center" />
            </button>

            <button
              onClick={(e) => gtclick(e)}
              id="gtclick"
              onMouseOut={() => {
                document.getElementById("gtbtn").style.visibility = "visible";
                document.getElementById("gtclick").style.visibility = "hidden";
              }}
              className="invisible z-0 text-black bg-white h-10 w-10 lg:h-20 lg:w-20 font-mono items-center justify-center self-center rounded-full text-lg  fixed "
            >
              click
            </button>
          </div>
        </div>
      </div>
      <div id="homesm" className="block md:hidden min-h-[calc(100vh+4rem)]">
        <div className="text-white px-10 lg:px-40 py-5 flex justify-between">
          <a
            href="/"
            className="text-xl font-mono cursor-pointer flex  gap-1 hover:gap-7"
          >
            <div>m</div>
            <div>p</div>
            <div>.</div>
          </a>
          <button
            onClick={() => {
              document.getElementById("nav").style.transform = "translate(0,0)";
            }}
            className=" flex flex-col gap-1 hover:gap-2 justify-center cursor-pointer"
          >
            <div className="w-7 h-1 bg-white"></div>
            <div className="w-4 h-1 bg-white self-end"></div>
            <div className="w-7 h-1 bg-white"></div>
          </button>
        </div>
        <div className="text-white flex flex-col">
          <img alt="" src={bw2} className="w-4/5 self-center mb-4"></img>
          <p
            style={{ fontFamily: "Montserrat" }}
            className="mx-7 text-justify font-sans text-lg "
          >
            In the world of visual storytelling, a raw video is mere footage,
            while a professionally edited one becomes a captivating narrative.
            It mirrors your identity, with animation serving as a silent
            language. The synergy of matching background music adds enchantment,
            transforming the video into pure magic. In a rapidly changing world,
            meticulous editing becomes the anchor, holding attention and
            ensuring your story resonates seamlessly.
          </p>
        </div>
      </div>

      <div id="about" className="w-full min-h-[calc(100vh+4rem)] bg-white ">
        <div className="px-5 lg:px-32 py-10 flex flex-col">
          <h1
            style={{ fontFamily: "Open Sans" }}
            className="cursor-pointer text-5xl  md:text-7xl mt-6  underline-offset-8  font-extrabold"
          >
            About Me
          </h1>
          <div className="w-10 md:w-14 h-1 bg-blue-600 "></div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-5 md:mt-20 justify-between">
            <img
              alt=""
              src={me}
              className="w-10/12 self-center md:w-6/12 lg:5/12 rounded-full border-2 pt-8 border-blue-400 bg-slate-800 hover:bg-slate-600 hover:scale-110 hover:border-blue-900 transition duration-500 cursor-pointer"
            ></img>
            <div className="flex flex-col md:w-5/12">
              <h1 className="text-3xl self-center md:text-4xl mb-5 md:mb-10 text-center md:pr-10 font-semibold font-mono tracking-tighter hover:tracking-normal cursor-pointer	">
                In a battle of Keyframes
              </h1>
              <p
                style={{ fontFamily: "Smooch Sans" }}
                className="text-2xl md:text-3xl text-justify font-black"
              >
                Hello Manas, your creative spirit transforms life into a vivid
                video, where keyframes of dreams shape compelling stories.
                Viewing existence as a captivating blend of visuals and sounds,
                you paint a colorful tapestry that beckons the attention of
                nature itself.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="work"
        className="w-full min-h-[calc(100vh+8rem)] bg-black text-white "
      >
        <div className="px-5 lg:px-32 py-10 flex flex-col">
          <h1
            style={{ fontFamily: "Open Sans" }}
            className="cursor-pointer text-4xl md:text-7xl mt-6 underline-offset-8  font-extrabold"
          >
            Work Sample
          </h1>
          <div className="w-7 md:w-14 ml-1 md:ml-2 h-1 bg-blue-600 "></div>
          <h1 className=" text-xs font-mono font-thin text-orange-500 mt-2">
            click on any video to play in fullscreen
          </h1>
          <div className="w-full flex flex-wrap md:flex-nowrap mr-0 md:mr-20 md:gap-2  mt-5">
            <button
              onClick={() => {
                document.getElementById("vid1full").style.display = "flex";
              }}
              className="w-1/2 md:w-1/4 border border-white py-3 px-2 flex flex-col align-middle items-center justify-center"
            >
              <video className="w-60" autoPlay loop muted>
                <source src={vid1} type="video/mp4" />
              </video>
              <h1 className="text-base md:text-2xl font-mono font-semibold mt-1 ">
                Engaging Reels
              </h1>
              <h1
                style={{ fontFamily: "Montserrat" }}
                className="hidden md:block text-gray-600 mt-2 text-justify font-semibold  tracking-wider"
              >
                Elevate with dynamic edits for irresistibly engaging experience.
              </h1>
            </button>
            <button
              onClick={() => {
                document.getElementById("vid2full").style.display = "flex";
              }}
              className="w-1/2 md:w-1/4  border border-white py-3 px-2 flex flex-col align-middle items-center justify-center"
            >
              <video className="w-60" autoPlay loop muted>
                <source src={vid2} type="video/mp4" />
              </video>
              <h1 className="text-base md:text-2xl font-mono font-semibold mt-1 ">
                Smooth transitions
              </h1>
              <h1
                style={{ fontFamily: "Montserrat" }}
                className="hidden md:block text-gray-600 mt-2 text-justify font-semibold  tracking-wider"
              >
                Transition that change without altering essence.
              </h1>
            </button>
            <button
              onClick={() => {
                document.getElementById("vid3full").style.display = "flex";
              }}
              className="w-1/2 md:w-1/4 border border-white py-3 px-2 flex flex-col align-middle items-center justify-center"
            >
              <video className="w-60" autoPlay loop muted>
                <source src={vid3} type="video/mp4" />
              </video>
              <h1 className="text-base md:text-2xl font-mono font-semibold mt-1 ">
                Captions
              </h1>
              <h1
                style={{ fontFamily: "Montserrat" }}
                className="hidden md:block text-gray-600 mt-2 text-justify font-semibold  md:tracking-wider"
              >
                Captivating captions that beckon users to join the journey.{" "}
              </h1>
            </button>
            <button
              onClick={() => {
                document.getElementById("vid4full").style.display = "flex";
              }}
              className="w-1/2 md:w-1/4 border border-white py-3 px-2 flex flex-col align-middle items-center justify-center"
            >
              <video className="w-60" autoPlay loop muted>
                <source src={vid4} type="video/mp4" />
              </video>
              <h1 className="text-base md:text-2xl font-mono font-semibold mt-1 ">
                Hook Start
              </h1>
              <h1
                style={{ fontFamily: "Montserrat" }}
                className="hidden md:block text-gray-600 mt-2 text-justify font-semibold  tracking-wider"
              >
                Capitalize watch time with hook start and ending.
              </h1>
            </button>
          </div>
        </div>
      </div>
      <div
        id="vid1full"
        className="hidden flex-col md:flex-row md:justify-around fixed top-0 bg-black text-white h-screen w-full p-7 gap-7"
      >
        <button
          onClick={() => {
            document.getElementById("vid1full").style.display = "none";
            document.getElementById("vid1org").pause();
            document.getElementById("vid1edt").pause();
          }}
          className="fixed top-2 right-2 md:top-10 md:right-36 hover:opacity-70"
        >
          <img alt="" src={close} className="w-7 md:w-10 "></img>
        </button>
        <div className="md:h-full flex flex-col">
          <button id="vid1beforebtn"
            onClick={() => {
              document.getElementById("vid1org").style.display="block";
              document.getElementById("vid1beforebtn").style.display="none";
              document.getElementById("vid1afterbtn").style.display="block";
              document.getElementById("vid1edt").style.display="none";
              document.getElementById("vid1edt").pause();
              document.getElementById("vid1org").pause();
            }}
            className="bg-transparent  text-blue-700 font-semibold md:text-white border border-blue-500 hover:border-transparent rounded  w-24 h-10 md:text-4xl md:border-0   md:bg-transparent md:font-mono self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false}
          >
            Before
          </button>
          <video
            id="vid1org"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={org1} type="video/mp4" />
          </video>
        </div>
        <div  className="md:h-full flex flex-col">
          <button id="vid1afterbtn"
            onClick={() => {
              document.getElementById("vid1org").style.display="none";
              document.getElementById("vid1beforebtn").style.display="block";
              document.getElementById("vid1afterbtn").style.display="none";
              document.getElementById("vid1edt").style.display="block";
              document.getElementById("vid1edt").pause();
              document.getElementById("vid1org").pause();
            }} className=" w-24 h-10 bg-blue-700  text-white font-semibold hover:text-white  border-blue-500 hover:border-transparent rounded md:text-4xl   md:font-mono border-2 md:border-0  md:bg-transparent self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false} >
            After
          </button>
          <video
            id="vid1edt"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={edt1} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="vid2full"
        className="hidden flex-col md:flex-row md:justify-around fixed top-0 bg-black text-white h-screen w-full p-7 gap-7"
      >
        <button
          onClick={() => {
            document.getElementById("vid2full").style.display = "none";
            document.getElementById("vid2org").pause();
            document.getElementById("vid2edt").pause();
          }}
          className="fixed top-2 right-2 md:top-10 md:right-36 hover:opacity-70"
        >
          <img alt="" src={close} className="w-7 md:w-10 "></img>
        </button>
        <div className="md:h-full flex flex-col">
          <button id="vid2beforebtn"
            onClick={() => {
              document.getElementById("vid2org").style.display="block";
              document.getElementById("vid2beforebtn").style.display="none";
              document.getElementById("vid2afterbtn").style.display="block";
              document.getElementById("vid2edt").style.display="none";
              document.getElementById("vid2edt").pause();
              document.getElementById("vid2org").pause();
            }}
            className="bg-transparent  text-blue-700 font-semibold md:text-white border border-blue-500 hover:border-transparent rounded  w-24 h-10 md:text-4xl md:border-0   md:bg-transparent md:font-mono self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false}
          >
            Before
          </button>
          <video
            id="vid2org"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={org2} type="video/mp4" />
          </video>
        </div>
        <div  className="md:h-full flex flex-col">
          <button id="vid2afterbtn"
            onClick={() => {
              document.getElementById("vid2org").style.display="none";
              document.getElementById("vid2beforebtn").style.display="block";
              document.getElementById("vid2afterbtn").style.display="none";
              document.getElementById("vid2edt").style.display="block";
              document.getElementById("vid2edt").pause();
              document.getElementById("vid2org").pause();
            }} className=" w-24 h-10 bg-blue-700  text-white font-semibold hover:text-white  border-blue-500 hover:border-transparent rounded md:text-4xl   md:font-mono border-2 md:border-0  md:bg-transparent self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false} >
            After
          </button>
          <video
            id="vid2edt"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={edt2} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="vid4full"
        className="hidden flex-col md:flex-row md:justify-around fixed top-0 bg-black text-white h-screen w-full p-7 gap-7"
      >
        <button
          onClick={() => {
            document.getElementById("vid4full").style.display = "none";
            document.getElementById("vid4org").pause();
            document.getElementById("vid4edt").pause();
          }}
          className="fixed top-2 right-2 md:top-10 md:right-36 hover:opacity-70"
        >
          <img alt="" src={close} className="w-7 md:w-10 "></img>
        </button>
        <div className="md:h-full flex flex-col">
          <button id="vid4beforebtn"
            onClick={() => {
              document.getElementById("vid4org").style.display="block";
              document.getElementById("vid4beforebtn").style.display="none";
              document.getElementById("vid4afterbtn").style.display="block";
              document.getElementById("vid4edt").style.display="none";
              document.getElementById("vid4edt").pause();
              document.getElementById("vid4org").pause();
            }}
            className="bg-transparent  text-blue-700 font-semibold md:text-white border border-blue-500 hover:border-transparent rounded  w-24 h-10 md:text-4xl md:border-0   md:bg-transparent md:font-mono self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false}
          >
            Before
          </button>
          <video
            id="vid4org"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={org4} type="video/mp4" />
          </video>
        </div>
        <div  className="md:h-full flex flex-col">
          <button id="vid4afterbtn"
            onClick={() => {
              document.getElementById("vid4org").style.display="none";
              document.getElementById("vid4beforebtn").style.display="block";
              document.getElementById("vid4afterbtn").style.display="none";
              document.getElementById("vid4edt").style.display="block";
              document.getElementById("vid4edt").pause();
              document.getElementById("vid4org").pause();
            }} className=" w-24 h-10 bg-blue-700  text-white font-semibold hover:text-white  border-blue-500 hover:border-transparent rounded md:text-4xl   md:font-mono border-2 md:border-0  md:bg-transparent self-center text-center md:hover:tracking-[1rem] cursor-pointer"
            disabled={window.innerWidth >= 768 ? true : false} >
            After
          </button>
          <video
            id="vid4edt"
            className="hidden md:block h-full opacity-100"
            controls
          >
            <source src={edt4} type="video/mp4" />
          </video>
        </div>
      </div>
      
      <div
        id="vid3full"
        className="hidden fixed top-0 bg-black text-white h-screen w-full p-7 md:p-16    justify-center"
      >
        <button
          onClick={() => {
            document.getElementById("vid3full").style.display = "none";
            document.getElementById("vid3").pause();
          }}
          className="fixed top-5 right-5 md:top-10 md:right-36 hover:opacity-70"
        >
          <img alt="" src={close} className="w-7 md:w-10  "></img>
        </button>
        <video id="vid3" className=" opacity-100" controls>
          <source src={vid3} type="video/mp4" />
        </video>
      </div>
      <div id="contact" className="w-full min-h-screen bg-white">
        <div className="px-5 lg:px-32 py-10 flex flex-col">
          <h1
            style={{ fontFamily: "Open Sans" }}
            className="cursor-pointer text-5xl md:text-7xl mb-0  underline-offset-8  font-extrabold"
          >
            Contact
          </h1>
          <div className="w-8 md:w-12 ml-0 h-1 bg-blue-600 "></div>
          <div className="flex flex-col md:flex-row gap-5 h-full items-center	justify-between">
            <img
              alt=""
              src={contact}
              className="md:w-1/2 flex self-center my-3 md:my-20"
            ></img>
            <div className="flex flex-col gap-5 w-11/12 md:w-5/12">
              <h1 className="font-sans text-3xl font-medium text-center">
                Let's Connect Now
              </h1>
              <p
                style={{ fontFamily: "Smooch Sans" }}
                className="text-3xl text-justify font-bold  "
              >
                Email as at with your details of work and other details. we will
                reach out to you as soon as possible. And in case needed we{" "}
                <span className=" text-blue-600">
                  will try to provide a free demo
                </span>
              </p>
              <a
                href="mailto:manaspatidar170@gmail.com"
                style={{ fontFamily: "Lato" }}
                className="text-xl font-semibold hover:tracking-widest cursor-pointer"
              >
                manaspatidar170@gmail.com
              </a>
              <a
                href="https://manaspatidar.netlify.app/"
                style={{ fontFamily: "Lato" }}
                className="text-xl font-semibold hover:tracking-widest text-blue-700 cursor-pointer"
              >
                manaspatidar.netlify.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
