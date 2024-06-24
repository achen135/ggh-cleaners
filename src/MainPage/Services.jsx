import React from 'react';
import './Services.css';

const Services1 = ({imgSrc, name, bio}) => {
    return (
        <div className='container'>

            <div className='Img'>
             <img src={imgSrc} alt="powerwash" />
            </div>

            <div className='desc'>

               <div className='name'>
                    {name}
               </div>
               <hr />
                <div className='bio'>
                    {bio}
                </div>

            </div>

        </div>
    );
}

export const Services2 = ({imgSrc, name, bio}) => {
    return (
        <div className='container'>

            <div className='desc'>

               <div className='name'>
                    {name}
               </div>
               <hr />
                <div className='bio'>
                    {bio}
                </div>

            </div>

            <div className='Img'>
             <img src={imgSrc} alt="powerwash" />
            </div>

        </div>
    );
}

export default Services1