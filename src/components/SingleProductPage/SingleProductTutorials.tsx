import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../icons/general/Spinner';
import { getTutorials } from '@/api/products/getTutorials';

type Tutorial = {
    name: string;
    link: string;
};

const SingleProductTutorials = () => {
    const { data: tutorials = [], isLoading } = useQuery<Tutorial[]>({
        queryKey: ['tutorials'],
        queryFn: getTutorials,
    });

    console.log("Tutorials areeeeeee : ", tutorials);

    if (isLoading) return <div><Spinner /></div>;

    return (
        <section className='container mt-8'>
            <div>
                {tutorials.map((tutorial, index) => (
                    <div key={index} className='mt-4'>
                        <h2 className='text-[#000000] text-2xl font-bold'>{tutorial.name}</h2>
                        <a href={tutorial.link} className='text-[#ff0000]' target="_blank" rel="noopener noreferrer">
                            Watch Tutorial
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SingleProductTutorials;
