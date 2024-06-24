import React from 'react';
import './MainPage.css';
import Services1, { Services2 } from './Services'; // Import Services1 as default and Services2 as named export

const MainPage = () => {
    const servicesData = [
        {
            imgSrc: './powerwash.jpg',
            name: 'Power Washing',
            bio: 'We powerwash driveways and other stuff prolly. Prices depend on how stanky it is and the size type beat. Other information. Hollar at us!'
        },
        {
            imgSrc: './powerwash.jpg',
            name: 'Power Washing',
            bio: 'We powerwash driveways and other stuff prolly. Prices depend on how stanky it is and the size type beat. Other information. Hollar at us!'
        },
    ];

    return (
        <>
            <div className='wholePage'>
                <div className='mainImage'>
                    r1
                </div>

                <div className='otherStuff'>
                    <div className='services'> 
                        {servicesData.map((service, i) => (
                            i % 2 == 0 ? (
                                <div className='services' key={i}>
                                    <Services1 imgSrc={service.imgSrc} name={service.name} bio={service.bio}/>
                                </div>
                            ) : (
                                <div className='services' key={i}>
                                    <Services2 imgSrc={service.imgSrc} name={service.name} bio={service.bio}/>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </>  
    );
}

export default MainPage;