import React from "react";
import axios from 'axios';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';



//import MATERIAL UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import MaterialUI
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@mui/material/CircularProgress';
import Cardjoy from '@mui/joy/Card';
import CardCoverjoy from '@mui/joy/CardCover';
import CardContentjoy from '@mui/joy/CardContent';
import Typographyjoy from '@mui/joy/Typography';

// import css
import '../css/Search.css'

// import images
import image1 from '../images/music/1.jpg';
import image2 from '../images/music/2.jpg';
import image3 from '../images/music/3.jpg';
import image4 from '../images/music/4.jpg';


const SearchTextField = withStyles({
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

function Theater() {

    const params = useParams();
    let navigate = useNavigate();

    const [searchValue, setSearchValue] = React.useState(params.searchvalue);


    const [loading, setLoading] = React.useState(true);

    const [events, setEvents] = React.useState();
    const [loadingEvents, setLoadingEvents] = React.useState(true);

    // filters
    const [month, setMonth] = React.useState('All');
    const [year, setYear] = React.useState('All');
    const [city, setCity] = React.useState('All');




    React.useEffect(() => {
        console.log(searchValue)
        fetchProducts()

    }, [searchValue])

    
    const fetchProducts = async () => {
        try{


            //now lets fetch the data
            const response = await axios.get(`http://127.0.0.1:5000/search?search=${searchValue}`);

            setEvents(response.data)
            // setEvents([])

            setLoadingEvents(false)

            
        }catch(err){
            setLoadingEvents(true)
            console.log("Fetch events data fetch error!")
        }
    }
    

    const searchHandle = (e) => {
        if (e.key === "Enter") {
            if(!e.target.value){
                console.log("Empty search string")
                return
            }

            setSearchValue(e.target.value)
            navigate(`/search/${e.target.value}`)

        }
    };

    return (
        <div className="category-page-container">
            <div className="search-page-container">
                <div className="search-page-title-container">
                    {/* <h1 className="search-page-title">Search results for "pou eisai"</h1> */}

                    <div className='search-page-searchbar-container'>
                        <SearchTextField
                            InputLabelProps={{
                                shrink: false
                            }} 
                            className='searchbar'
                            placeholder="Search events, locations"
                            defaultValue={searchValue}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRoundedIcon style={{ color: '#32c1d5' }} />
                                </InputAdornment>
                                )
                            }}
                            onKeyPress={(e) => searchHandle(e)}
                        />

                    </div>
                </div>

                { loadingEvents &&
                    <div className="search-loading-container">
                        <CircularProgress color="secondary" /> 
                    </div>
                }

                { !loadingEvents && events.length &&
                    <div className="events-grid-container search-grid-container">
                        <div className="events-grid">

                                {events.map((element) => (
                                    <Link key={element.id} to={(element.category==="Cinema") ? `/movie/${element.id}` : `/event/${element.id}`} state= {{id: element.id }} style={{ textDecoration: 'none' }}>

                                        <Card  className='popular-card' sx={{ width: '290px', minWidth: '290px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                height="160"
                                                image={`/thumbnail/${element.photo_id}.jpg`}
                                                alt="green iguana"
                                                />
                                            <CardContent className='card-content'>
                                                <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                                    {element.day} {element.month}
                                                </Typography>
                                                <div className='popular-card-title-container'>    
                                                    <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                                        {element.title}
                                                    </Typography>
                                                </div>
                                                
                                                <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                                    {element.city}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Link>
                                ))}

                        </div>
                    </div>
                }

                { !loadingEvents && !events.length &&

                    <div className="search-empty-results-container">
                        <p className="no-results-message">No such events were found!</p>
                    </div>


                }
            </div>
            <div className="blank-fragment"></div>
        </div>
  )
}

export default Theater