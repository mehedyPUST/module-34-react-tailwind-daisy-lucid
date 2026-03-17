import { CheckCheck, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
    console.log(feature)
    return (
        <span className='flex gap-2 items-center'>
            <CircleCheckBig></CircleCheckBig>
            <p>{feature}</p>
        </span>
    );
};

export default PricingFeature;