import React from 'react'
import { withStyles } from "@material-ui/core/styles";

// import styling
import '../css/Event.css';

// import MaterialUI
import Stack from '@mui/material/Stack';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NumbersIcon from '@mui/icons-material/Numbers';

//import variables
import tickets from '../variables/TicketPrices';

//import images
import eventimage from '../images/event.jpg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
			
            '&.Mui-focused fieldset': {
                border: 'none'
            },

			'& fieldset': {
				border: 'none',
			}
        },

    }
})(TextField);




function Eventpage() {

    const [open, setOpen] = React.useState(false);

    const [ticketNumber, setTicketNumber] = React.useState(1);
    const [ticketNumberError, setTicketNumberError] = React.useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const UpdateTicketNumber = (number) => {
        (number<1) ? setTicketNumber(1) : setTicketNumber(number)        
    };

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
                        <Button variant="contained" color="success" className='ticket-button' onClick={() => setOpen(true)}>
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
                <div className='event-alert'>
                    <Alert severity="warning">
                    <AlertTitle>Cancellation</AlertTitle>
                        Please make sure you inform the organiser promptly in case you can't make it to the event. Your tickets may be handed to others interested and you could get a refund.
                    </Alert>

                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="ticket-modal">
                    <Typography className='modal-title' id="modal-modal-title" variant="h4" component="h2">
                        Book your ticket
                    </Typography>
                    <Typography className='modal-text' id="modal-modal-description" sx={{ mt: 1 }}>
                        Fill your info below, to send you via email the instructions to book your tickets
                    </Typography>

                    <Stack className='tf-ticket-stack' spacing={2}>
                        <CustomTextField
                            size="small"
                            InputLabelProps={{
                                shrink: false
                            }} 
                            className='searchbar'
                            placeholder="Your email"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon style={{ color: '#32c1d5' }} />
                                </InputAdornment>
                                )
                            }}
                            
                        />
                        <CustomTextField
                            size="small"
                            select
                            InputLabelProps={{
                                shrink: false
                            }} 
                            className='searchbar'
                            placeholder="Search events, locations"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <ConfirmationNumberIcon style={{ color: '#32c1d5' }} />
                                </InputAdornment>
                                )
                            }}
                            defaultValue="1"
                            
                        >
                                {tickets.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                        </CustomTextField>

                        <div className='modal-number-button-container'>
                            <div className='ticket-number-tf-container'>
                                <CustomTextField
                                    value={ticketNumber}
                                    size="small"
                                    InputLabelProps={{
                                        shrink: false
                                    }} 
                                    className='searchbar ticket-number-tf'
                                    placeholder="1"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <NumbersIcon style={{ color: '#32c1d5' }} />
                                        </InputAdornment>
                                        )
                                    }}
                                    type="number"
                                    // value={ticketNumber}
                                    onChange={(e) => UpdateTicketNumber(e.target.value)}
                                />
                            </div>

                            <Button className="book-ticket-button" onClick={() => setOpen(false)}>Book my tickets</Button>
                        </div>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default Eventpage;