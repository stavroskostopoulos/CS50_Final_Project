import React, { useRef, useState } from "react";

//import MATERIAL UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import sliderarctic from '../images/sliderarctic.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import css
import '../css/Theater.css'

//import images
import carou from '../images/arctic.jpg'

import image1 from '../images/theater/1.jpg';
import image2 from '../images/theater/2.jpg';
import image3 from '../images/theater/3.jpg';
import image4 from '../images/theater/4.jpg';
import image5 from '../images/theater/5.jpg';
import image6 from '../images/theater/6.jpg';
import image7 from '../images/theater/7.jpg';


//import variables
import months from "../variables/Months";
import cities from "../variables/Cities";
import years from "../variables/Years";



function Theater() {

    let arr = [1, 2, 4, 5, 6 ,7 ,8, 1, 2, 4, 5, 6, 4, 4, 3, 1];
    return (
        <div>
            <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination]}
            initialSlide="2"
            className="mySwiper"
            >
                <SwiperSlide className="myswiper-slide"><img src={image1}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image2}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image3}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image4}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image5}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image6}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img src={image7}/></SwiperSlide>

            </Swiper>
            <div className="filters-box-container">
                <div className="filters-box">
                    <div className="filters-box-contents">
                        <p className="filters-text">Events</p>
                        <h3 className="filters-title">Theater</h3>
                        <div className="select-container">
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Month"
                                defaultValue="0"
                                helperText={false}
                                variant="filled"
                                className="select-filters-tf"
                            >
                                {months.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="City"
                                defaultValue="0"
                                helperText={false}
                                variant="filled"
                                className="select-filters-tf"
                            >
                                {cities.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Year"
                                defaultValue="0"
                                helperText={false}
                                variant="filled"
                                className="select-filters-tf"
                            >
                                {years.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                </div>

            </div>
            <div className="events-grid-container">
                <div className="events-grid">
                        {arr.map((element) => (
                            <Card className='popular-card' sx={{ width: '290px', minWidth: '290px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
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
                        ))}
                </div>
                
            </div>
            <div className="blank-fragment"></div>
        </div>
  )
}

export default Theater