import React from 'react'

import '../css/Event.css';

import Stack from '@mui/material/Stack';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import eventimage from '../images/event.jpg'

function Eventpage() {
  return (
    <div className='event-page-container'>
        <div className='event-container'>
            <img draggable={false} src={eventimage} className="image-event"/>
            <div className='event-title'>
                <h2>
                    Η ΦΡΙΚΑΝΤΕΛΑ του Ευγένιου Τριβιζά στο Christmas Theater
                </h2>
                <Stack className="event-icon-info">
                    <Stack direction="row" spacing={2}>
                        <EventIcon style={{ color: '#32c1d5' }}/>
                        <p>January 2022</p>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <MapIcon style={{ color: '#32c1d5' }}/>
                        <p>Litochoro</p>
                    </Stack>
                </Stack>
                
                <div className='ticket-button-container'>
                    <Button variant="contained" color="success" className='ticket-button'>
                        TICKETS
                    </Button>
                </div>

            </div>
            <Divider/>
            <div className='event-desc'>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                </p>
            </div>

        </div>
    </div>
  )
}

export default Eventpage;