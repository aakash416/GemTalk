import React, { useContext, useState } from 'react'
import "./App.css"
import { Context } from './Context';
const App = () => {

  const { inputText, setInputText, getAnsweredText } = useContext(Context);
  const [messages, setMessages] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // submit logic
    const ans = await getAnsweredText(inputText);
    setMessages(ans)
    setInputText("");
  }
  return (
    <div className='main'>
      <div className='sideBar'>
        <h1>Hello</h1>
      </div>
      <div className="outputfilled">

        <div className='outputareachatbot'>
          {
            messages ? <p>{messages}</p> :
              <h1>How can I help you today?</h1>
          }
        </div>


        <form className="inputfilled" onSubmit={handleSubmit}>
          <input type="text" placeholder="Message ChatGPT..." className='inputfiild' value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <button type='submit' className='btn-sned'>send</button>
        </form>
      </div>

    </div>
  )
}

export default App