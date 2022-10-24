import React, { useState } from 'react'
import {v4 as uuid} from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate =useNavigate();
  const[roomId,setRoomId]=useState("");
  const [userName,setUserName]=useState("");
  const createNewRoom=(e)=>{
    e.preventDefault();
    const ui=uuid();
    setRoomId(ui);
    toast.success("Created New Room")
   // console.log(ui);
  }

  const joinRoom=()=>{
    if(!roomId || !userName){
      toast.error("Room Id and User Name is requied");
    } 
    else{
    navigate(`/editor/${roomId}`,{
      state:{
        userName
      }
    }) 
  }
  }
  return (
    <div className='homePageWrapper'>
        <div className="formWrapper">
            <h4 className='mainLable'>
                Paste the Invitation Link
             </h4>
            <div className="inputGroup">
                <input type="text" className="inputBox" placeholder='ROOM ID' value={roomId} onChange={(e)=>setRoomId(e)}/>
                <input type="text" className="inputBox" placeholder='User ID' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className="createInfo">
                  If you dont have an invite then create a
                  &nbsp;
                  <a href="" onClick={createNewRoom} className='createNewBtn'>New Room</a>
                </span>

            </div>
            
        </div>
        <footer>
        <h4>
          Build By punith
        </h4>
        </footer>
    </div>
  )
}

export default Home