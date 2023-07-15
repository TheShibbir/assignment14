import { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.userInput.value;
    setText(value);
    event.target.userInput.value = "";
  };
  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          name="userInput"
          placeholder="write here your text..."
        ></textarea>
        <button >submit</button>
      </form>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Content;