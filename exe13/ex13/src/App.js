import "./App.css";
import { useState } from "react";
import useMessage from "./useMessage";


function App() {
  const [forum, setForum] = useState("nasa");
  const {
    data: messages,
    loading: messagesLoading,
    error: messagesError,
  } = useMessage(forum);

  return (
    <div className="App">
      <button onClick={() => setForum("nasa")}>NASA</button>
      <button onClick={() => setForum("notNasa")}>Not NASA</button>
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div>{messagesError.messages}</div>
        </div>
      ) : messagesLoading ? (
        <div>Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        "no messages"
      )}
    </div>
  );
}

export default App;