import React from 'react';
import './styles.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 660,
    backgroundColor: '#730700',
    color: 'white',
  },
}));

/* function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
} */

export default function SimpleList(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="lista">
      <List component="nav" aria-label="main mailbox folders">
        {props.musicas.map(musica =>(
          <button key={musica.id} className="list-item" id={musica.id} onClick={() => {
            props.handleMusic(musica.id)
            if (props.paused === false && props.selectedMusic !== musica.id && props.shuffle === false){
              props.handlePlayPause()
            }
            if (props.paused === true && props.selectedMusic !== musica.id && props.shuffle === true){
              props.handlePlayPause()
            }
            }}>
            <ListItem button>
              <div>
                <ListItemIcon>
                  <span id="music"><MusicNoteIcon/></span>
                </ListItemIcon>
              </div>
              <div id="texts">
                <h1><ListItemText primary={`${musica.nome}`} /></h1>
                <p>{musica.by}</p>
              </div>
            </ListItem>
          </button>
          
        ))}
        
      </List>
    </div>
  );
}