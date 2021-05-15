import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';


function Header()  {
    return (
        <div className="header">
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
        <h2 className="header__title">Elevator Pitch</h2>
        <IconButton>
            <ChatBubbleIcon className="header__icon" fontSize="large"/>
        </IconButton>
        </div>
    );
}

export default Header;