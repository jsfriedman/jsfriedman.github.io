import React from "react";
import './Hobbies.css';

const Hobbies = () => {
    const hobbyList = [
        'Rock Climbing',
        'Perfuming',
        'Photography, Film & Digital',
        'Hiking',
        'Indoor Volleyball',
        'College Radio DJing',
        'Improv Comedy',
        'Blacksmithing',
        'Dog and Cat Fostering',
        'Video Games',
        'Bass Guitar',
        'Banjo',
        'Saxophone',
        'Bowling',
        'Birding',
        'Cooking',
        'Homebrewing',
        'Drums',
        'Tour Guiding (Budapest)',
        'Backpacking',
        'Coffee',
        'Woodworking',
    ];

    return(
    <>
        <p style={{width:'75ch'}}>My favorite hobby is learning new things, and picking up new hobbies. Over the years 
            I've learned the essentials of many; I've tried listing as many as I can remember out here. 
            One of my favorite parts of learning new hobbies is being able to connect with people who
            share the hobby, so please feel free to talk to me about any of these! Some of these hobbies 
            stick around in my life for a season, others are more permanent
        </p>

        <div className="list-container">
            <ul>
                {hobbyList.map((item, index)=>(
                    <li className="list-item" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </>
    )
}
export default Hobbies;