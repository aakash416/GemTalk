import React, { useContext, useState } from 'react'
import "./App.css"
import { Context } from './Context';
const App = () => {

  const { getAnsweredText } = useContext(Context);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const ans = await getAnsweredText(question);
    setMessages(ans)
    setIsLoading(false);
    setHistory([...history, { question: question, answer: ans }])
    setQuestion("");
  }
  return (
    <div className='main'>
      <div className='sideBar'>
        <h1>GemTalk</h1>
        {
          history.map((message, index) => {
            return <button key={index} onClick={() => setMessages(message.answer)} className="btn btn-sidebar text-start">{message?.question?.length > 30 ? message?.question?.slice(0, 20) + "..." : message?.question}</button>
          })
        }

      </div>
      <div className="outputfilled">

        <div className='outputareachatbot '>

          {
            isLoading ?
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> :
              <>
                {
                  messages ? <p>{messages}</p> :
                    <h1>How can I help you today?</h1>

                }
              </>
          }
        </div>
        <form className="inputfilled" onSubmit={handleSubmit}>
          <input type="text" placeholder="Message ChatGPT..." className='inputfiild' value={isLoading ? "" : question} onChange={(e) => setQuestion(e.target.value)} />
          <button type='submit' className='btn-sned'>
            <i className="bi bi-send-fill" ></i>
          </button>
        </form>
      </div>

    </div >
  )
}

export default App