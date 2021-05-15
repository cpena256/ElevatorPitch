import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import StarRateIcon from '@material-ui/icons/StarRate';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__thumbsdown">
                <ThumbDownIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__thumbsup">
            <ThumbUpIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;