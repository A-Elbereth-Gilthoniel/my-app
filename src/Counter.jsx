import React, {useState}  from "react";

function Counter(){
    let [press_flag, setFlag] = useState(0)
    let [likes, setLikes] = useState(5)

    function increment() {
    setFlag(1)
    setLikes(likes + 1)
  }

  function decrement() {
    setFlag(-1)
    setLikes(likes - 1)
  }
  if (press_flag === 0) {
  return (
    <div>
    <h1>{likes}</h1>
    <button className="rating_btn" onClick={increment}>Class</button>
    <button className="rating_btn" onClick={decrement}>Badly</button>
    </div>
  )} else {
  return (
    <div>
    <h1>{likes}</h1><br/>Your opinion:
    <strong>{(press_flag > 0) ? "class" : "badly"}</strong>
    </div>)
  }

}

export default Counter;
