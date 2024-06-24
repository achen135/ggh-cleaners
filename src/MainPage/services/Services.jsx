import React from 'react';
import './Services.css';

const Services1 = ({imgSrc, name, bio}) => {
    return (
        <div className='service-container'>

            <div className='service-img-container'>
             <img className='service-img' src={imgSrc}/>
            </div>

            <div className='service-desc'>

               <div className='service-name'>
                    {name}
               </div>
               <hr className='service-hr'/>
                <div className='service-bio'>
                    {bio}
                </div>

            </div>

        </div>
    );
}

export const Services2 = ({imgSrc, name, bio}) => {
    return (
        <div className='service-container'>

            <div className='service-desc'>

               <div className='service-name'>
                    {name}
               </div>
               <hr className='service-hr'/>
                <div className='service-bio'>
                    {bio}
                </div>

            </div>

            <div className='service-img-container'>
             <img className='service-img' src={imgSrc}/>
            </div>

        </div>
    );
}

export default Services1