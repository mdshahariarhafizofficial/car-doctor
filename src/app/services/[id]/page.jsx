import dbConnect from '@/libs/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
        const serviceDetails = await dbConnect("services").findOne({_id: new ObjectId(p.id)});
        console.log(serviceDetails);
        
    return (
        <div>
            {JSON.stringify(serviceDetails)}
        </div>
    );
};

export default page;