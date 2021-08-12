import React from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from '../firebase'
import { useEffect } from 'react';
import { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput'

function Chat() {
    const {roomId}=useParams();
    const [roomDetails,setroomDetails]=useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    const [noMessages, setNoMessages] = useState(false)
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot =>{
                setroomDetails(snapshot.data())
            })
        }
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot =>{
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
        )
            })
    },[roomId])

    console.log(roomMessages);
    useEffect(() => {
		if (!roomMessages.length) setNoMessages(true)
		else setNoMessages(false)
	}, [roomMessages])
    const chatMessages = noMessages ? (
		<Message noMessages={noMessages} />
	) : (
		roomMessages.map(({ message, timestamp, user, userImage }) => (
			<Message
				message={message}
				timestamp={timestamp}
				user={user}
				userImage={userImage}
				key={timestamp}
			/>
		))
	)





    return (
        <div className='chat'>
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlined />Details
                    </p>
                </div>
            </div>
            <div className="chat_mesages">
                {/* Messages */}
                {chatMessages}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
