import React from 'react';
import './styles.css'

import logoHeader from '../../_images/logo/logo-header-2.png'
export default function Header(props){
    return(
        <div className="header">
            <div className="cabecalho">
                <img src={logoHeader} alt="Logo do site MiMusicPlayer"></img>
                <p> Mi<span>Music</span>Player<span id="space"></span></p>
            </div>
            <div className="imagem">
                <img src={props.musicas[props.selectedMusic].img} alt="Imagem da música"></img>
            </div>
        </div>
    )
}