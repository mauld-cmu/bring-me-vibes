import React from 'react';
import Stack from '@mui/system/Stack';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import ReactAudioPlayer from 'react-audio-player';

function SoundSlider({ name, icon, defaultVolume, maxVolume, soundFile }) {
  const [volume, setVolume] = React.useState(defaultVolume * maxVolume);
  const [playing, setPlaying] = React.useState(false);

  function changeVolume(e) {
    setVolume(e.target.value / 100);
  }

  function playAudio() {
    document.getElementById( name + '-player').play()
  }

  function pauseAudio() {
    document.getElementById( name + '-player').pause()
  }

  function togglePlay() {
    if (playing) {
      pauseAudio();
    } else {
      playAudio();
    }
    setPlaying(!playing);
  }

  return (
    <Stack 
      sx={{
        alignItems: 'center'
      }}
      direction="row" 
      spacing={2}
    >
      <IconButton aria-label={"Toggle Audio for " + name} onClick={togglePlay}>
        {icon}
      </IconButton>
      <Slider
        key={name+'-slider'}
        aria-label={"Mixing Slider for" + name}
        value={volume*100} 
        max={maxVolume*100}
        onChange={changeVolume}
      />
      <ReactAudioPlayer
        id={name + '-player'}
        src={process.env.PUBLIC_URL + '/assets/' + soundFile}
        controls={false}
        autoPlay={true}
        loop={true}
        volume={volume}
      />
    </Stack>
  );
}

export default SoundSlider;