import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {   id: 1,
            name: 'Home and Senior Care', 
            price: 100, 
            image: 'https://i.ibb.co/S6QGhwT/care-giver1.jpg',
            description: 'You really have to be patient and you have to be loving and caringg.This is about making a difference in the lives of the elderly.'
        },       
        {   id: 2,
            name: 'Administering and supervising medications', 
            price: 100, 
            image: 'https://i.ibb.co/PTztK6h/care-giver2.jpg',
            description: 'One of the recommendations to reduce medication errors and harm is to use the “five rights”: the right patient, the right drug, the right dose, the right route.'
        },       
        {   id: 3,
            name: 'Pain care / control', 
            price: 100, 
            image: 'https://i.ibb.co/k9JnRfv/care-giver3.jpg',
            description: 'Pain management is an aspect of medicine and health care involving relief of pain (pain relief, analgesia, pain control) in various dimensions, from acute and simple to chronic and challenging.'
        },       
        {   id: 4,            
            name: 'Instruction and emotional support', 
            price: 100, 
            image: 'https://i.ibb.co/9cDchk3/care-giver4.jpg',
            description: "According to the authors, those six tools are: (1) Reading for Meaning, (2) Compare and Contrast, (3) Inductive Learning, (4) Circle of Knowledge, (5) Write to Learn, and (6) Vocabulary's CODE."
        },       
        {   id: 5,
            name: 'Dementia Care', 
            price: 100, 
            image: 'https://i.ibb.co/7VCyg8R/care-giver5.jpg',
            description: 'Effective dementia care also supports loved ones through what can be a difficult, confusing and distressing time.These principles define our approach to specialist dementia care at Sherborne House.'
        },       
        {   id: 6,
            name: 'Monitoring vital signs', 
            price: 100, 
            image: 'https://i.ibb.co/z2RjbTY/care-giver6.jpg',
            description: 'Vital signs monitoring is crucial for living a long and healthy life. Vitals gives us a glimpse into our overall wellbeing. They signal early signs of an infection, prevent a misdiagnosis, detect symptom-less medical problems.'
        },       
    ]
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Services</h2>
            <div className="services">
            {
                services.map(service => <Service key={service.id} service={service}/>)

            } 
                </div>           
        </div>
    );
};

export default Services;