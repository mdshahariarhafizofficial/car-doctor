import PageTopSection from '@/Components/PageTopSection';
import dbConnect from '@/libs/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
        const serviceDetails = await dbConnect("services").findOne({_id: new ObjectId(p.id)});
        console.log(serviceDetails);
        
    return (
        <div>
            <PageTopSection title={"Service Details"} path={"Service Details"}></PageTopSection>
        </div>
    );
};

export default page;