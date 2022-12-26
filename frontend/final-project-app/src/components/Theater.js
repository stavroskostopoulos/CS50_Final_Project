import React, { useRef, useState } from "react";
import axios from 'axios'

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

    const [filterData, setFilterData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const [events, setEvents] = React.useState();
    const [loadingEvents, setLoadingEvents] = React.useState(true);

    // filters
    const [month, setMonth] = React.useState('All');
    const [year, setYear] = React.useState('All');
    const [city, setCity] = React.useState('All');




    React.useEffect(() => {

        getFilters()

    }, [])

    React.useEffect(() => {

        fetchProducts()

    }, [month, year, city])

    const fetchProducts = async () => {
        try{

            let url_param_count = 0;

            let url_str = "http://127.0.0.1:5000/theater";

            // construct url
            if(month!=="All"){
                url_param_count += 1;
                url_str += `?month=${month}`;
            }
            
            if(city!=="All"){
                
                if(url_param_count==0){
                    url_str += `?city=${city}`;   
                }else{
                    url_str += `&city=${city}`;
                }

                url_param_count += 1;
            }
            
            if(year!=="All"){
                
                if(url_param_count==0){
                    url_str += `?year=${year}`;   
                }else{
                    url_str += `&year=${year}`;
                }

                url_param_count += 1;
            }

            console.log(url_str)


            //now lets fetch the data
            const response = await axios.get(url_str);

            setEvents(response.data)
            setLoadingEvents(false)
            console.log(response.data)

            
        }catch(err){
            setLoadingEvents(true)
            console.log("Fetch events data fetch error!")
        }
    }

    const getFilters = async () => {
        try{
            const response = await axios.get("http://127.0.0.1:5000/data");
            // console.log(response.data)
            setFilterData(response.data)
            // response.data.months.map((option) => console.log(option))
            // console.log(response.data)
            setLoading(false)
        }catch(err){
            setLoading(true)
            console.log("Filter data fetch error!")
        }
    }

    let arr = [1, 2, 4, 5, 6 ,7 ,8, 9, 3, 10, 11, 12, 13, 14, 15, 16];
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
                <SwiperSlide className="myswiper-slide"><img key="image1" src={image1}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image2" src={image2}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image3" src={image3}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image4" src={image4}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image5" src={image5}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image6" src={image6}/></SwiperSlide>
                <SwiperSlide className="myswiper-slide"><img key="image7" src={image7}/></SwiperSlide>

            </Swiper>
            <div className="filters-box-container">
                <div className="filters-box">
                    <div className="filters-box-contents">
                        <p className="filters-text">Events</p>
                        <h3 className="filters-title">Theater</h3>
                        <div className="select-container">
                            {!loading &&
                            
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    label="Month"
                                    defaultValue="All"
                                    helperText={false}
                                    variant="filled"
                                    className="select-filters-tf"
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    {filterData.months.map((option) => (
                                        <MenuItem key={option} value={option}>
                                        {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                            {!loading &&  
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    label="City"
                                    defaultValue="All"
                                    helperText={false}
                                    variant="filled"
                                    className="select-filters-tf"
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {filterData.cities.map((option) => (
                                        <MenuItem key={option} value={option}>
                                        {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                            {!loading &&     
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    label="Year"
                                    defaultValue="All"
                                    helperText={false}
                                    variant="filled"
                                    className="select-filters-tf"
                                    onChange={(e) => setYear(e.target.value)}
                                >
                                    {filterData.years.map((option) => (
                                        <MenuItem key={option} value={option}>
                                        {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className="events-grid-container">
                <div className="events-grid">
                    { !loadingEvents &&

                        events.map((element) => (
                            <Card key={element.id} className='popular-card' sx={{ width: '290px', minWidth: '290px', maxWidth: '290px', maxHeight: '310px', minHeight: '304px'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="160"
                                    image={sliderarctic}
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
                        ))
                    }

                </div>
                
            </div>
            <div className="blank-fragment"></div>
        </div>
  )
}

export default Theater