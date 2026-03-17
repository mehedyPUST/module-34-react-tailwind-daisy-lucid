import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl text-center'>Get Our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map((pricing, index) => <DaisyPricingCard key={index} pricing={pricing} ></DaisyPricingCard>)
                }


            </div>
        </div>
    );
};

export default PricingOptions;