import "./App.css";
import finger from "./uncle-tom.png";
import Title from "./components/title/Title";
import UseEmail from "./components/send/UseEmail";
import PuffLoader from "react-spinners/ClipLoader";
import React from "react";

function App() {
  const { loading, submitted, sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/590e3ea0-7861-11ed-a126-b172cf164538"
  );

  const sendExample = (say) => {
    
    // Can be any data, static and dynamic
    const localDate = new Date();
    const date = {
      date: {
        day:localDate.getDate(),
        month: localDate.getMonth() + 1,
        year:localDate.getFullYear()
      },
      time: {
        hour:localDate.getHours() === 0 ? 12:localDate.getHours(),
        minute:localDate.getMinutes() < 10 ?
        `0${localDate.getMinutes()}`:`${localDate.getMinutes()}`,
        seconds:localDate.getSeconds(),
        ampm:(localDate.getHours() >= 12) ? "PM" : "AM"
      }
    };
    sendEmail({
      message: say,
      date: `${date.date.month}/${date.date.day}/${date.date.year} ${date.time.hour}:${date.time.minute}${date.time.ampm}`
    });
  };

  const handleLoad = () => {
    if (!loading) {
      return submitted ? (
        <div className="btn-container">
          <h2 style={{color:"lightgreen"}}>Request sent!</h2>
        </div>
      ) : (
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => sendExample("Stop The Treason!")}
          >
            Stop The Treason!
          </button>
          <button
            className="btn2"
            onClick={() => sendExample("Defend The Treason!")}
          >
            Defend The Treason!
          </button>
        </div>
      );
    } else {
      return <PuffLoader color={"rgba(25, 55, 103, 1)"} className="load"/>;
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Title>
          <h1 className="title__header">No More Link Spam!</h1>
        </Title>
        <div className="image">
          <img src={finger} alt="finger" className="finger back-shadow" />
        </div>
        <div className=" outliner">
          <video src="/videos/evidence.mp4" controls autoPlay loop></video>
        </div>
        <h1 className="title__header small-title"><span>Only You</span> can stop the treason! </h1>
        <p className="p1">Vote to stop this man from offending anyone else!</p>
        <p className="hash">#StopTheLinkSpam!</p>
        {handleLoad()}
      </div>
    </div>
  );
}

export default App;
