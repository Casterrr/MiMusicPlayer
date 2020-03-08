import React, { Component } from 'react';
import './styles.css';

import Alone from '../../_musics/Alan Walker - Alone.mp3';
import AloneImg from '../../_images/Alan Walker - Alone.jpg';

import Darkside from '../../_musics/Alan Walker - Darkside (feat. Au Ra and Tomine Harket).mp3';
import DarksideImg from '../../_images/Alan Walker - Darkside.jpg';

import Courtesy from '../../_musics/Courtesy Call - 1.25.mp3';
import CourtesyImg from '../../_images/Courtesy Call - 1.25.jpg';

import iWillGo from '../../_musics/Direct & Park Avenue - I Will Go [Monstercat EP Release].mp3';
import iWillGoImg from '../../_images/Direct & Park Avenue - I Will Go.jpg';

import Duumu from '../../_musics/Duumu - Blinded [Monstercat EP Release].mp3';
import DuumuImg from '../../_images/Duumu-Blinded.jpg';

import Color from '../../_musics/Grant - Color (feat. Juneau).mp3';
import ColorImg from '../../_images/Grand - Color.jpg';

import Flamingo from '../../_musics/Kero Kero Bonito - Flamingo.mp3';
import FlamingoImg from '../../_images/Kero Kero Bonito - Flamingo.jpg';

import LastGame from '../../_musics/Last Game - English Cover - Steins;Gate 0 ED.mp3';
import LastGameImg from '../../_images/Last Gamer - English Cover.jpg';

import Header from '../Header/index';
import Playlist from '../Playlist/index';
import Player from '../Player/index';
export default class Main extends Component{
    state = {
        musicas: [
            
            {
                nome: "Alone",
                by: "< By | Alan Walker >",
                src: Alone,
                img: AloneImg,
                id: 0,
                isSelected: false,
                duration: "02:43",
                initalTime: 0,
                finalTime: 163,
            },
            {
                nome: "Darkside (feat. Au Ra and Tomine Harket)",
                by: "< By | Alan Walker >",
                src: Darkside,
                img: DarksideImg,
                id: 1,
                isSelected: false,
                duration: "03:59",
                initalTime: 0,
                finalTime: 239,
            },
            {
                nome: "Courtesy Call - 1.25",
                by: "< By | Thousand Foot Krutch >",
                src: Courtesy,
                img: CourtesyImg,
                id: 2,
                isSelected: false,
                duration: "03:29",
                initalTime: 0,
                finalTime: 209,
            },
            {
                nome: "I'll Go [Monstercat EP Release]",
                by: "< By | Direct & Park Avenue >",
                src: iWillGo,
                img: iWillGoImg,
                id: 3,
                isSelected: false,
                duration: "04:21",
                initalTime: 0,
                finalTime: 261,
            },
            {
                nome: "Blinded [Monstercat EP Release]",
                by: "< By | Duumu >",
                src: Duumu,
                img: DuumuImg,
                id: 4,
                isSelected: false,
                duration: "03:59",
                initalTime: 0,
                finalTime: 239,
            },
            {
                nome: "Color (feat. Juneau)",
                by: "< By | Grant >",
                src: Color,
                img: ColorImg,
                id: 5,
                isSelected: false,
                duration: "03:33",
                initalTime: 0,
                finalTime: 213,
            },
            {
                nome: "Flamingo",
                by: "< By | Kero Kero Bonito >",
                src: Flamingo,
                img: FlamingoImg,
                id: 6,
                isSelected: false,
                duration: "03:17",
                initalTime: 0,
                finalTime: 197,
            },
            {
                nome: "Last Game - English Cover - Steins;Gate 0 ED",
                by: "< Cover by | Poopturds >",
                src: LastGame,
                img: LastGameImg,
                id: 7,
                isSelected: false,
                duration: "04:43",
                initalTime: 0,
                finalTime: 283,
            }
        ],
        selectedMusic: 0,
        paused: true
    }


    handleMusic = (id) =>{

        /*TIRA A CLASSE SELECTED DE TODOS OS BOTÕES, E PÕE A CLASSE SELECTED APENAS NO BOTÃO CLICADO*/
        const buttonElements = document.getElementsByClassName('list-item');
        for (var i = 0; i < buttonElements.length; i++) {
            buttonElements[i].classList.remove("selected")
        }
        const buttonEl = document.getElementById(id);
        buttonEl.classList.add('selected');

        //SUBSTITUI A MÚSICA SELECIONADA PELA MÚSICA CLICADA
        this.setState({
            selectedMusic: id
        })
        
    }

    handlePlayPause = () =>{
        this.state.paused ? this.setState({paused: false}) : this.setState({paused: true})
    }
    prevAudio = () => {
        //MUDA O PAUSED
        if (this.state.paused === false){
            this.setState({paused: true})
        }

        //TIRA O SELECT DE TODOS OS BOTÕES
        const buttonElements = document.getElementsByClassName('list-item');
        for (var i = 0; i < buttonElements.length; i++) {
            buttonElements[i].classList.remove("selected")
        }

        const selectedMusic = this.state.selectedMusic
        /* SE A MÚSICA SELECIONADA FOR A PRIMEIRA, PÕE A ÚLTIMA COMO SELECTED MUSIC E COM 
        O BOTÃO SELECIONADO */
        if (selectedMusic === 0){
            const newSelectedMusic = (this.state.musicas.length) - 1
            this.setState({
                selectedMusic: newSelectedMusic
            })
            const buttonEl = document.getElementById(newSelectedMusic);
            buttonEl.classList.add('selected');
        }
        /*CASO A MÚSICA NÃO SEJA A PRIMEIRA, PÕE A MÚSICA SELECIONADA COMO A ANTERIOR E FAZ O MESMO COM O
        BOTÃO*/
        else{
            this.setState({
                selectedMusic: selectedMusic - 1
            })
            const buttonEl = document.getElementById(selectedMusic-1);
            buttonEl.classList.add('selected');
        }

    }
    nextAudio = () => {
        //MUDA O PAUSED
        if (this.state.paused === false){
            this.setState({paused: true})
        }

        //TIRA O SELECT DE TODOS OS BOTÕES
        const buttonElements = document.getElementsByClassName('list-item');
        for (var i = 0; i < buttonElements.length; i++) {
            buttonElements[i].classList.remove("selected")
        }
        
        const selectedMusic = this.state.selectedMusic

        /* SE A MÚSICA SELECIONADA FOR A ÚLTIMA, PÕE A PRIMEIRA COMO SELECTED MUSIC E COM 
        O BOTÃO SELECIONADO */
        if (selectedMusic === this.state.musicas.length - 1){
            this.setState({
                selectedMusic: 0
            })
            const buttonEl = document.getElementById(0);
            buttonEl.classList.add('selected');
        }
        /*CASO A MÚSICA NÃO SEJA A ÚLTIMA, PÕE A MÚSICA SELECIONADA COMO A PRÓXIMA E FAZ O MESMO COM O
        BOTÃO*/
        else{
            this.setState({
                selectedMusic: selectedMusic + 1
            })
            const buttonEl = document.getElementById(selectedMusic+1);
            buttonEl.classList.add('selected');
        }

        
    }
    changeMusicTime = ()=>{
        const rangeInput = document.getElementById('myRange');
        const audio = document.getElementById('musica');
        if (rangeInput !== null){
            console.log(rangeInput.value)
            audio.currentTime = rangeInput.value
        }
    }

    changeRangeValue = ()=>{
        const rangeInput = document.getElementById('myRange');
        const audio = document.getElementById('musica');
        if (rangeInput !== null){
            rangeInput.value = audio.currentTime
        }
    }
    render(){
        return(
            <div className="corpo">
                <header>
                    <Header  
                    musicas={this.state.musicas} 
                    selectedMusic={this.state.selectedMusic}/>
                </header>
                <main>
                    <Playlist 
                    musicas={this.state.musicas} 
                    selectedMusic={this.state.selectedMusic} 
                    handleMusic={this.handleMusic} 
                    handlePlayPause={this.handlePlayPause} 
                    paused={this.state.paused} 
                    />
                </main>
                <footer>
                     <Player 
                     musicas={this.state.musicas} 
                     selectedMusic={this.state.selectedMusic} 
                     handleMusic={this.handleMusic} 
                     prevAudio={this.prevAudio}
                     nextAudio={this.nextAudio}
                     paused={this.state.paused}
                     handlePlayPause={this.handlePlayPause}
                     changeMusicTime={this.changeMusicTime}
                     changeRangeValue={this.changeRangeValue}
                     />
                </footer>
            </div>
        )
    }
}
