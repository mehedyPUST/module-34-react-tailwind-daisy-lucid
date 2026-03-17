import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    // console.log(pricing)

    const { name, price, description, features } = pricing;
    return (
        <div className=' flex  flex-col border border-green-400 bg-green-100 rounded-md p-4'>

            {/* card header  */}
            <div className='space-y-2'>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className=' mt-5 bg-green-300 p-2 rounded-sm space-y-2 flex-1'>
                <p>{description}</p>
                <hr className='text-white' />
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>

            <button className="btn w-full mt-5">Subscribe</button>
        </div>
    );
};

export default PricingCard;