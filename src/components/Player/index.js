import React, { useState, useEffect } from "react";
import './styles.css';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export default function Player(props){
    /* const [paused, setPaused] = useState(true); */
    const [currentTimeInSc, setCurrentTimeInSc] = useState(0);
    const [currentTimeInMin, setCurrentTimeInMin] = useState(0)
    //SEMPRE QUE A MÚSICA SELECIONADA MUDAR, VAI ATUALIZAR O SRC DA TAG AUDIO
    useEffect(()=>{
        const audio = document.getElementById('musica');
        const inputRange = document.getElementById('myRange');

        console.log(audio);
        audio.removeAttribute('src');
        audio.setAttribute('src', props.musicas[props.selectedMusic].src);
        inputRange.setAttribute('max', props.musicas[props.selectedMusic].finalTime);
    },[props.selectedMusic]);
    
    /*SEMPRE QUE O PLAYER FOR INCIADO, VAI COLOCAR A PRIMEIRA MÚSICA DA LISTA COMO SELECIONADA*/
    useEffect(()=>{
        props.handleMusic(0)
    },[])

    //TOCA A MÚSICA
    function playAudio(){
        props.handlePlayPause()
        const audio = document.getElementById('musica');
        audio.play();
    }

    //PAUSA A MÚSICA 
    function pauseAudio(){
        props.handlePlayPause()
        const audio = document.getElementById('musica');
        audio.pause();
    }

    function currentTime(){
        const audio = document.getElementById('musica');
        if (audio !== null){
            let minutes = Math.floor(audio.currentTime/60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;

            let seconds = Math.floor(audio.currentTime % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;

            setCurrentTimeInMin(minutes);
            setCurrentTimeInSc(seconds)
            
        }
    }
    return(
        <div className="player">
            
            <div className="buttons">
                <span className="audioButton" onClick={()=>{}}><IconButton color="inherit"><VolumeUpIcon/></IconButton></span>

                <span className="audioButton" onClick={() => props.prevAudio()}><IconButton color="inherit"><SkipPreviousIcon /></IconButton></span>
                
                <span className="audioButton playPause" id="playPause" onClick={props.paused ? () => playAudio() : () => pauseAudio() }>
                    {props.paused ? <IconButton color="inherit"><PlayArrowIcon/></IconButton> : <IconButton color="inherit"><PauseIcon /></IconButton>}
                </span>
                
                <span className="audioButton" onClick={() => props.nextAudio()}><IconButton color="inherit"><SkipNextIcon /></IconButton></span>

                <span className="audioButton" id="shuffle" onClick={() => props.handleShuffle()}><IconButton color="inherit" size="small" disableRipple={true}><ShuffleIcon/></IconButton></span>
            </div>

            <div className= "music">
                <audio id="musica" autoPlay={false} onTimeUpdate={()=> {props.changeRangeValue(); currentTime()}} onEnded={()=> {
                    if (props.shuffle === false){
                        props.nextAudio();
                    }
                    else{
                        props.randomAudio();
                    }
                    }}>
                    <source src={props.musicas[props.selectedMusic].src} type="audio/mpeg"/>
                </audio>
                
                <div className="slidecontainer">
                    <p>{currentTimeInMin}:{currentTimeInSc}</p>
                    <input type="range" min="0" max="100" defaultValue="1" onChange={() => props.changeMusicTime()} className="slider" id="myRange"/>
                    <p>{props.musicas[props.selectedMusic].duration}</p>
                </div>

                <div className="music-info">
                    <p>{props.musicas[props.selectedMusic].nome}</p>
                    <p id="by">{props.musicas[props.selectedMusic].by}</p>
                </div>
            </div>
        </div>
    )
}