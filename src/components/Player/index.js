import React, { useState, useEffect } from "react";
import './styles.css';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

export default function Player(props){
    /* const [paused, setPaused] = useState(true); */

    //SEMPRE QUE A MÚSICA SELECIONADA MUDAR, VAI ATUALIZAR O SRC DA TAG AUDIO
    useEffect(()=>{
        const audio = document.getElementById('musica');
        audio.removeAttribute('src');
        audio.setAttribute('src', props.musicas[props.selectedMusic].src);
    },[props.selectedMusic]);
    
    /*SEMPRE QUE O PLAYER FOR INCIADO, VAI CHAMAR COLOCAR A PRIMEIRA MÚSICA DA LISTA COMO SELECIONADA*/
    useEffect(()=>{
        props.handleMusic(0)
    },[])

    //TOCA A MÚSICA
    function playAudio(){
        props.handlePlayPause()
        const audio = document.getElementById('musica');
        console.log(props.paused)
        audio.play();
    }

    //PAUSA A MÚSICA 
    function pauseAudio(){
        props.handlePlayPause()
        const audio = document.getElementById('musica');
        audio.pause();
    }

    return(
        <div className="player">
            <div className= "music">
                <audio id="musica">
                    <source src={props.musicas[props.selectedMusic].src} type="audio/mpeg"/>
                </audio>
            </div>
            <div className="buttons">
                <button className="audioButton" onClick={() => props.prevAudio()}><IconButton color="inherit"><SkipPreviousIcon /></IconButton></button>
                <button className="audioButton" id="playPause" onClick={props.paused ? () => playAudio() : () => pauseAudio() }>
                    {props.paused ? <IconButton color="inherit"><PlayArrowIcon/></IconButton> : <IconButton color="inherit"><PauseIcon /></IconButton>}
                </button>
                <button className="audioButton" onClick={() => props.nextAudio()}><IconButton color="inherit"><SkipNextIcon /></IconButton></button>
            </div>
        </div>
    )
}