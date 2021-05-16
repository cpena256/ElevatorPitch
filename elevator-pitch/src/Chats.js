import React from "react";
import Chat from './Chat';
import './Chats.css';

function Chats () {
    return (
    <div>
        <Chat 
            name="Mark"
            message="Let's set up a meeting this week."
            timestamp="40 minutes ago"
           // profilePic="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
        />
        <Chat 
            name="Luis"
            message="You seem like a fit!"
            timestamp="1 hour ago"
            //profilePic="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
        />
        <Chat 
            name="Solomon"
            message="Any questions you might have for us?"
            timestamp="3 hours ago"
         //   profilePic="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
        />
    </div>
    );
}

export default Chats;