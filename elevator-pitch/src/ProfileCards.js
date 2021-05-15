import React, {useState} from 'react';
import TinderCard from "react-tinder-card";


function ProfileCards(){
const [people, setPeople ] = useState([
    {
        name: 'Bill Gates',
        url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987',
    },
    {
        name: 'Jack Dorsey',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSKGEF5o0cXxVcKqRoVZRkcPzcjVx3h-7lQ&usqp=CAU',
    },
]);


    return (
        <div>
           
            {people.map(person =>(
             <TinderCard className="swipe" key={person.name}>
                 <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                    <h3>{person.name}</h3>              
                 </div>
             </TinderCard>
            ) )}
        </div>
    );
}

export default ProfileCards;