import "./App.css";
import pic from "./images/pic.jpg";
import Display from "./Component/Display";
import { useState } from "react";
import Button from "./Component/Button";


function App() {
  const [name, setName] = useState("My name is Chardaye");
  const [count, setCount] = useState(0);

  const handleName = () => {
    setName("My name is Chardaye");
  };

  const handleSkills = () => {
    setName("I am a Frontend Developer");
  };

  return (
    <>
      <div className="profilecardstyling">
        <img className="pic" src={pic} alt="pic" />
        <h1>Hi!</h1>
        <Display greeting={name} />
        <div className="btns">
          <Button clickHandler={handleName} btntext={"Name"} />
          <Button clickHandler={handleSkills} btntext={"Skills"} />
          <div className = "likebtn" >
            <button className = "like" onClick={() => setCount(count + 1)}>
              {count}
              {<i class="fas fa-heart"></i>}
            </button>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/chardaye-matthews/"
            target="_blank"
            rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
