import React from 'react';
import {useJsApiLoader} from '@react-google-maps/api';
import {useSelector} from 'react-redux';

import css from './LocationPage.module.css';
import {GoogleLocateMap} from '../../Components';


const API_KEY = process.env.REACT_APP_API_KEY;


const LocationPage = () => {

    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    const centerDefault = {
        lat: -3.745,
        lng: -38.523
    };


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    });


    return (
        <div className={css.location_page}>
            <div className={css.exterior}>
                <div className={css.title}>
                    Екстер'єр
                </div>
                {oneRestaurant.exterior &&
                    <div>
                        {oneRestaurant.exterior.map(photo =>
                            <img src={`https://drive.google.com/uc?export=view&id=${photo}`}
                                 alt={oneRestaurant.name}
                            />)
                        }
                    </div>
                }
            </div>
            <div className={css.google_map}>
                <div className={css.title}>
                    Карта
                </div>
                <div className={css.map_wrap}>
                    {isLoaded && <GoogleLocateMap center={oneRestaurant.coordinates}/>}
                </div>
            </div>

        </div>
    );
};


export {LocationPage};