import React from 'react'

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
    return (
        <div>

            <div className='hero'>
                <div className="slider_bg_div sliderColor3"></div>
                    <div className='homepage-container seach-image-homepage-container'>
                        <div className='search-container'>
                            <div>

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


            <div className='homepage-container popular-homepage-container'>
                <h2 className='popular-title'>Popular</h2>
                <p className='popular-description'>The audience's favorites</p>
                <div className='popular-slider-container'>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='popular-slider'
                        // breakpoints={{
                        //     // when window width is >= 640px
                        //     380: {
                        //         // width: 640,
                        //         slidesPerView: 1,
                        //         spaceBetween: 7,
                        //     },
                        //     600: {
                        //         // width: 640,
                        //         slidesPerView: 2,
                        //         spaceBetween: 7,
                        //     },
                        //     994: {
                        //     // width: 640,
                        //     slidesPerView: 3,
                        //     spaceBetween: 7,
                        //     },
                        //     // when window width is >= 768px
                        //     1360: {
                        //     // width: 1160,
                        //     slidesPerView: 4,
                            
                        //     },
                        // }}
                        >
                        <SwiperSlide className='categ-slider'>
                            <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='categ-slider'>
                        <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='categ-slider'>
                        <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='categ-slider'>
                            <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='categ-slider'>
                            <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='categ-slider'>
                            <Card className='popular-card' sx={{ width: '290px', minWidth: '200px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
                                    alt="green iguana"
                                    />
                                    <CardContent className='card-content'>
                                        <Typography sx={{ fontSize: 14, color: '#32c1d5', fontWeight: '550' }} color="text.secondary" gutterBottom>
                                            18 JULY
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" className='card-text'>
                                            Release Athens 2023/ ARCTIC MONKEYS + THE HIVES + WILLIE J HEALEY
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='card-text-info'>    
                                            Πλατεια Νερου, Φαληρο
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='homepage-container category-homepage-container'>
                <h2 className='popular-title'>Categories</h2>
                <p className='popular-description'>Whatever you prefer, we've got something for you</p>

                <Swiper
                    spaceBetween={20}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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
            <div className='blank'></div>
        </div>
  )
}

export default Homepage