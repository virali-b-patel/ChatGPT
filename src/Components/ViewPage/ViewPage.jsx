import React, { useState } from 'react'
import gptLogo from '../Assets/chatgpt.svg'
import './ViewPage.css'
import addBtn from '../Assets/add-30.png'
import msgIcon from '../Assets/message.svg'
import home from '../Assets/home.svg'
import saved from '../Assets/bookmark.svg'
import rocket from '../Assets/rocket.svg'
import sendBtn from '../Assets/send.svg'
import userIcon from '../Assets/user-icon.png'
import gptImgLogo from '../Assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from '../../openai'

const ViewPage = () => {

  const [input, setInput] = useState("")

  const handleSend = () => {
    const res = sendMsgToOpenAI(input)
    console.log(res);
  }

  return (
    <div className="viewpage">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img className='logo' src={gptLogo} alt='LOGO' /><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img className='addBtn' src={addBtn} alt='new chat' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='Query' />What is Programming ?</button>
            <button className='query'><img src={msgIcon} alt='Query' />How to use an API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItem'><img src={home} alt='Home' className='listItemImg' />Home</div>
          <div className='listItem'><img src={saved} alt='Saved' className='listItemImg' />Saved</div>
          <div className='listItem'><img src={rocket} alt='Upgrade' className='listItemImg' />Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veniam omnis asperiores soluta, aut tenetur fuga quasi esse debitis vitae. Fugiat esse enim ipsum recusandae.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis alias fugit aliquid, repudiandae corporis quos odit, omnis expedita animi, temporibus ipsam! Ut excepturi provident nam possimus, distinctio placeat dolorum beatae laborum, consequuntur dicta adipisci aliquam hic, quaerat officiis quos inventore deleniti asperiores fugit! Maxime iusto nesciunt cupiditate cumque officiis totam corporis odit quisquam iure exercitationem quas, ullam explicabo repellat aspernatur voluptate mollitia delectus ab recusandae rerum neque quidem aliquid. Repudiandae accusamus qui quia reiciendis fugit aliquid deleniti aspernatur quibusdam similique consequuntur voluptas ducimus inventore facilis, et illo ab dolore. Quam, vel aspernatur iste magnam facere earum dolore inventore officiis!</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message...' value={input} onChange={(e) => { setInput(e.target.value) }} /> <button onClick={handleSend} className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>Chat GPT may product inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  )
}

export default ViewPage
