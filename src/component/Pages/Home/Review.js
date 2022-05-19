import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl">{review.name}</h3>
                    <p>{review.country}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Review;