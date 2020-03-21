import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(100);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleVolume();
  };

  const handleVolume = () => {
    const audioEl = document.getElementById('musica');
    audioEl.volume = value/100
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Grid item>
          <VolumeUp/>
        </Grid>
        <Grid item xs style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#630700', boxSizing: 'border-box', width: '15px', padding: '10px 0px 8px', WebkitBorderRadius: '20px'}}>
          <Slider 
          orientation="vertical"
          value={value} 
          onChange={handleChange} 
          aria-labelledby="continuous-slider" 
          style={{height: '155px', color : '#fc0303', boxSizing: 'border-box', margin: '0 auto', padding: 0}} 
          color="secondary"
          />
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
      </Grid>
    </div>
  );
}