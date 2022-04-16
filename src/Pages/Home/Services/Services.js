import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {   id: 1,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 2,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 3,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 4,            
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 5,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 6,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/2ytsjGS/caregiver-slider1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
    ]
    return (
        <div className='container'>
            <h2>Services</h2>
            <div className="service">
            {
                services.map(service => <Service key={service.id} service={service}/>)

            } 
                </div>           
        </div>
    );
};

export default Services;