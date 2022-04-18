import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Jennifer Q.',
            image: 'https://bit.ly/37pptja',
            description: "I love caregiver as it has connected me to a world of information and people who are all dedicated to helping us take care of our parents.",
            ratings: 5,
        },
        {   
            id: 2,
            name: 'Maria M.',
            image: 'https://bit.ly/3MhsQrj',
            description: "We've recently had a bad experience with a very dysfunctional, self-centered caregiver and we want to warn other families to beware. Her name is Krista Collins.",
            ratings: 4,
        },
        {   
            id: 3,
            name: 'Karen E.',
            image: 'https://bit.ly/3xBqQpN',
            description: "I found this site because my sister in law recommended it to me when my father came down with parkinsons disease. This website has been a lifesaver for me.",
            ratings: 5,
        },
        {   
            id: 4,
            name: 'jessica w.',
            image: 'https://bit.ly/3uRqXLT',
            description: "Love the crew at caregivers for life. They are always kind and informative. Thanks for all the help.",
            ratings: 5,
        },
        {   
            id: 5,
            name: 'Barbara B.',
            image: 'https://bit.ly/3v0Puyt',
            description: "Caregiver is really an essential site for anyone who is new to the caregiving role. Our parents took care of us and now we need to learn to take care of them.",
            ratings: 5,
        },
        {   
            id: 6,
            name: 'Linda O.',
            image: 'https://bit.ly/3jQMa2c',
            description: "She is the worst. [Care Plus NJ 610 Valley Health Plaza, Paramus, NJ]. They lied and said they take Medicare but they still bill you) of course I never paid Kathleen DeMeers).",
            ratings: 5,
        },
    ];
    return (
        <div>
            <h2 className='text-center my-5'>Care Taker Reviews</h2>
            <hr className='w-50 mx-auto' />
            <div className="reviews container mt-5">            
            {
                reviews.map(review => <Review key={review.id} review={review}></Review> )
            }
        </div>
        </div>
    );
};

export default Reviews;