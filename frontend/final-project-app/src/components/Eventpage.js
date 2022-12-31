import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// import styling
import '../css/Event.css';

// import MaterialUI
import { withStyles } from "@material-ui/core/styles";
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
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NumbersIcon from '@mui/icons-material/Numbers';
import CircularProgress from '@mui/material/CircularProgress';

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




function Eventpage(props) {

    const { state } = useLocation();
    const params = useParams();

    const [open, setOpen] = React.useState(false);
    const [ticketNumber, setTicketNumber] = React.useState(1);
    const [ticketNumberError, setTicketNumberError] = React.useState(false);

    const [eventData, setEventData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const [email, setEmail] = React.useState("");
    const [zone, setZone] = React.useState("1");
    
    const [buttonError, setButtonError] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleEmail = async () => {
        try{
            
            if(!validateEmail(email)) {
                // console.log("1")
                setButtonError(true)
                return
            }
            
            if(!parseInt(ticketNumber)){
                // console.log("2")

                setButtonError(true)
                return
            }

            if(parseInt(ticketNumber) < 1){
                // console.log("3")

                setButtonError(true)
                return
            }


            let event_id = (state!==null) ? `${state.id}`:`${params.id}`


            // setButtonError(false)
            
            const zoneNumber = parseInt(zone)
            if(zoneNumber > 3 || zoneNumber < 1){
                setButtonError(true)
                return
            }
            
            setOpen(false)

            console.log(tickets[zoneNumber-1].label)

            await axios.post(`http://127.0.0.1:5000/event`,
                            {
                                "email": email.replace(/\s+/g, ''),
                                "zone": tickets[zoneNumber-1].label,
                                "times": ticketNumber.toString(),
                                "event_id": event_id
                            }
            )

        }catch(err){
            console.log(err)
        }
    }

    const UpdateTicketNumber = (number) => {
        (number<1) ? setTicketNumber(1) : setTicketNumber(number)        
    };

    React.useEffect(() => {
        fetchInfo()
    }, []);

    const fetchInfo = async () => {
        try{
            let eventInfoResponse;
            if(state!==null){

                eventInfoResponse = await axios.get(`http://127.0.0.1:5000/event?id=${state.id}`)

            }else{

                eventInfoResponse = await axios.get(`http://127.0.0.1:5000/event?id=${params.id}`)
                
            }
            
            setEventData(eventInfoResponse.data[0])
            setLoading(false)
            console.log(eventInfoResponse.data[0])
        }catch(err){
            setLoading(true)
            console.log(err)
        }
    };

    return (
        <div className='movie-background-container'>
            {loading && 
                <div className='event-page-loading-container'>
                    <CircularProgress color="secondary" /> 
                </div>
            
            }

            {!loading &&

                <div className='event-page-container'>
                    <div className='event-container'>
                        <img draggable={false} src={`/thumbnail/${eventData.photo_id}.jpg`} className="image-event"/>
                        <div className='event-title'>
                            <h2>
                                {eventData.title}
                            </h2>
                            <Stack className="event-icon-info">
                                <Stack direction="row" spacing={2}>
                                    <EventIcon style={{ color: '#32c1d5' }}/>
                                    <p>{eventData.day} {eventData.month} {eventData.year}</p>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <MapIcon style={{ color: '#32c1d5' }}/>
                                    <p>{eventData.city}</p>
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
                                {eventData.content.replaceAll("$","\n\n")}
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
                                    onChange={(e) => {setEmail(e.target.value); setButtonError(false);}}

                                    
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
                                    onChange={(e) => {setZone(e.target.value); setButtonError(false);}}    

                                    
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
                                            onChange={(e) => {UpdateTicketNumber(e.target.value); setButtonError(false); }}
                                        />
                                    </div>
                                    
                                    <Button className={(buttonError) ? "book-ticket-button-error" : "book-ticket-button"} disabled={buttonError} onClick={() => {handleEmail()}}>Book my tickets</Button>

                                </div>
                            </Stack>
                        </Box>
                    </Modal>
                </div>
            }

            
        </div>
    )
}

export default Eventpage;