import React from 'react';
import Mixer from './Mixer/Mixer';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Slide from '@mui/material/Slide';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

/*
 * Contains the mixer, and controls its ability to slide in and out with a
 * button press.
 */

function RightPanel({ scene, toggleScene }) {
  const [panelToggle, setPanelToggle] = React.useState(true);
  const handleChange = () => {
    setPanelToggle((prev) => !prev);
  };

  return ( 
    <Collapse orientation='horizontal' collapsedSize='40px' in={panelToggle}>
      <Stack
        direction='row'
        spacing={0}
      >
        <Stack>
          <Button
            aria-label='Hide Mixing Sidebar'
            variant='contained'
            disableElevation
            sx={{
              maxWidth: '40px',
              maxHeight: '30px',
              minHeight: '30px',
              minWidth: '40px',
              marginTop: '30px',
              padding: '50px 0px',
              borderRadius: '20px 0px 0px 20px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: "blur(3px)"
            }}
            onClick={handleChange}
          >
            {panelToggle ? 
              <ArrowForwardIosIcon
                color="primary"
                sx={{
                  fontSize: 25,
                  padding: '0px'
                }}
              /> : 
              <ArrowBackIosNewIcon
                color="primary"
                sx={{
                  fontSize: 25,
                  padding: '0px'
                }}
              /> }
            
          </Button>
        </Stack>
        <Slide direction='left' in={panelToggle}>
          <div>
            <Mixer scene={scene} toggleScene={toggleScene}/>
          </div>
        </Slide>
      </Stack>
    </Collapse>
  );
}

export default RightPanel;