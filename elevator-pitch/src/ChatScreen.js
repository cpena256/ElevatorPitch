import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import './ChatScreen.css';

function ChatScreen () {
    const [messages, setMessages] = useState ([
    {
        name: 'Marc',
        image: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
        message: "Hello",
    },
    {
        message: "How's it going",
    },
    {
        name: "Marc",
        image: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
        message: "Let's set up a meeting this week.",
    },
    ]);
    return ( 
    <div className="chatScreen">
        <p className="chatScreen__timestamp">You matched with Marc on 5/16/21</p>
        {messages.map(message => (
            message.name ? (
                <div className="chatScreen__message">
                <Avatar className="chatScreen__avatar"
                alt={message.name}
                src={message.image}/>
                <p className="chatScreen__text">{message.message}</p>
            </div>
            ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
           

        ))}
    </div>
    );   
}

export default ChatScreen; 