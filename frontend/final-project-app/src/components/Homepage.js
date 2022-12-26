import React from 'react'
import axios from 'axios'

//improt css

//import images
import arctic from '../images/arctic.jpg';
import sliderarctic from '../images/sliderarctic.jpg'
import music from '../images/music.jpg'
import theater from '../images/theater.jpg'
import cinema from '../images/cinema.jpg'
import sports from '../images/sports.jpg'


//import MaterialUI
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CardCover from '@mui/joy/CardCover';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@mui/material/CircularProgress';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import Cardjoy from '@mui/joy/Card';
import CardCoverjoy from '@mui/joy/CardCover';
import CardContentjoy from '@mui/joy/CardContent';
import Typographyjoy from '@mui/joy/Typography';

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

function Homepage() {

    const [popular, setPopular] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchPopular();
    }, [])

    const fetchPopular = async () => {
        try{
            const response = await axios.get("http://127.0.0.1:5000/");
            console.log(response.data)
            setPopular(response.data)
            setLoading(false)
        }catch(err){
            setLoading(true)
            console.log("Popular fetch error!")
        }
    };

    return (
        <div>
            
            <div className='shadow-box'>

                <div className='hero'>
                    <div className="slider_bg_div sliderColor3"></div>
                    <div className='homepage-container seach-image-homepage-container'>
                        <div className='search-container'>
                            <div className='homepage-text-searchbar-container'>

                                <div className='homepage-text-container'>
                                    <h2 className='search-title'>Your next unique experience starts here</h2>
                                    <p className='search-description'>Book your ticket now easily, quickly and safely</p>
                                </div>
                                
                                <div className='searchbar-container'>
                                    <SearchTextField
                                        InputLabelProps={{
                                            shrink: false
                                        }} 
                                        className='searchbar'
                                        placeholder="Search events, locations"
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchRoundedIcon style={{ color: '#32c1d5' }} />
                                            </InputAdornment>
                                            )
                                        }}
                                        
                                    />

                                </div>
                            </div>
                        </div>

                        <div className='image-container'>
                            <img src={arctic} className='homepage-image' draggable="false"/>
                        </div>

                    </div>

                </div>
                {/* I wouldn't do this but i had to do so to add the shadow */}
                <div className='blank-space'/>  
            </div>

            <div className='background-container'>

                <div className='homepage-container popular-homepage-container'>
                    <h2 className='popular-title'>Popular</h2>
                    <p className='popular-description'>The audience's favorites</p>
                    <div className='popular-slider-container'>

                        {loading &&

                            <div className='popular-loading-container'>
                                <CircularProgress color="secondary" /> 
                            </div>

                        }

                        {!loading &&
                        
                            <Swiper
                                spaceBetween={30}
                                slidesPerView="auto"
                                className='popular-slider'
                            >

                                {popular.map((popular_item) => (
                                    <SwiperSlide key={popular_item.id} className='categ-slider'>
                                        <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '310px'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="160"
                                                    image={`/thumbnail/${popular_item.photo_id}.jpg`}
                                                    alt="green iguana"
                                                    className='card-media-img'
                                                />
                                                <CardContent className='card-content'>
                                                    <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                                        {popular_item.day} {popular_item.month.toUpperCase()}
                                                    </Typography>
                                                    <div className='popular-card-title-container'>
                                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                                            {popular_item.title}
                                                            
                                                        </Typography>

                                                    </div>
                                                    <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                                        {popular_item.city}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                                        
                                
                            </Swiper>
                        }
                    </div>
                </div>
            </div>
            <div className='homepage-container category-homepage-container'>
                <h2 className='popular-title'>Categories</h2>
                <p className='popular-description'>Whatever you prefer, we've got something for you</p>
                <div className='popular-slider-container'>

                    <Swiper
                        spaceBetween={30}
                        // slidesPerView={4}
                        className='popular-slider'
                        breakpoints={{
                            1330: {               
                            slidesPerView: 4,
                            },
                        }}
                        
                    >
                        <SwiperSlide className='categ-slider'>
                            <Cardjoy className='category-card' sx={{ width: '290px !important', minWidth: '258px', maxWidth: '258px', minHeight: '418px'}}>
                                <CardCoverjoy>
                                <img
                                    src={music}
                                    loading="lazy"
                                    alt=""
                                />
                                </CardCoverjoy>
                                <CardContentjoy>
                                <Typographyjoy
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    className='image-card-text'
                                >
                                    Music
                                </Typographyjoy>
                                </CardContentjoy>
                            </Cardjoy>
                        </SwiperSlide>

                        <SwiperSlide className='categ-slider'>
                            <Cardjoy className='category-card' sx={{ width: '290px', minWidth: '258px', maxWidth: '258px', minHeight: '418px'}} >
                                <CardCoverjoy>
                                <img
                                    src={theater}
                                    loading="lazy"
                                    alt=""
                                />
                                </CardCoverjoy>
                                <CardContentjoy>
                                <Typographyjoy
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    className='image-card-text'
                                >
                                    Theater
                                </Typographyjoy>
                                </CardContentjoy>
                            </Cardjoy>
                        </SwiperSlide>

                        <SwiperSlide className='categ-slider'>
                            <Cardjoy className='category-card' sx={{ width: '290px', minWidth: '258px', maxWidth: '258px', minHeight: '418px'}}>
                                <CardCoverjoy>
                                <img
                                    src={cinema}
                                    loading="lazy"
                                    alt=""
                                />
                                </CardCoverjoy>
                                <CardContentjoy>
                                <Typographyjoy
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    className='image-card-text'
                                >
                                    Cinema
                                </Typographyjoy>
                                </CardContentjoy>
                            </Cardjoy>
                        </SwiperSlide>

                        <SwiperSlide className='categ-slider'>
                            <Cardjoy className='category-card' sx={{ width: '290px !important', minWidth: '258px !important', maxWidth: '258px !important', minHeight: '418px'}}>
                                <CardCoverjoy>
                                <img
                                    src={sports}
                                    loading="lazy"
                                    alt=""
                                />
                                </CardCoverjoy>
                                <CardContentjoy>
                                <Typographyjoy
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    className='image-card-text'
                                >
                                    Sports
                                </Typographyjoy>
                                </CardContentjoy>
                            </Cardjoy>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className='blank'></div>
        </div>
  )
}

export default Homepage