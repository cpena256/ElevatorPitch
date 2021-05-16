import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({ backButton })  {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                </IconButton>
            ) : (
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
            ) }
        
        <Link to="/">
        <h2 className="header__title">Elevator Pitch</h2>
        </Link>
        <Link to="/chats">
            <IconButton>
                <ChatBubbleIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </Link>
        </div>
    );
}

export default Header;