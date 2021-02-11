import { AiFillStepBackward, AiFillStepForward, AiFillPlayCircle, AiFillHeart } from "react-icons/ai";
import { RiRepeatLine } from 'react-icons/ri'
import { TiArrowShuffle } from 'react-icons/ti'
import { BsVolumeDownFill, BsThreeDots } from 'react-icons/bs'


import React from 'react'


export default function Player(props) {
    return (
        <div className="music-player-box">
            <div className="extraSticky">
                <div className="unknown-cover"></div><div className="track-name">{props.track}</div><AiFillStepBackward /><AiFillPlayCircle className="play-circle" /><AiFillStepForward /><hr className="play-line" /><AiFillHeart className="right-icons" /><TiArrowShuffle className="right-icons" /><RiRepeatLine className="right-icons" /><BsVolumeDownFill className="right-icons" /><BsThreeDots className="dots" />
            </div>
        </div>
    )
}
