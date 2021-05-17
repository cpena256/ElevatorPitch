import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import './ProfileCards.css';

function ProfileCards(){
const [people, setPeople ] = useState([

    {
        name: "Elon Musk",
        url: "https://images.barrons.com/im-335496?width=620&size=1.5",
        skills: "Electric Cars | Spacecraft  ", 

    },
    {
        name: "Jack Dorsey",
        url: "https://image.cnbcfm.com/api/v1/image/105218543-GettyImages-459305148.jpg?v=1545153819",
        skills: "Social Media | Web Development ",
    },
    {
        name: "Erlich Bachman",
        url: "https://i2.wp.com/www.nationalreview.com/wp-content/uploads/2017/05/silicon-valleys-erlich-bachman-capitalist-hero.jpg?fit=788%2C460&ssl=1",
        skills: "Marketing | Sales ",
    },
]);
    // useEffect(() => {

    //     const unsubscribe = database
    //     .collection('people')
    //     .onSnapshot(snapshot => 
    //      setPeople(snapshot.docs.map(doc => doc.data()))
    //     );
       
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [[people]]);
    return (
        <div>
           <div className="tinderCards__cardContainer">
            {people.map(person =>(
             <TinderCard className="swipe" 
             key={person.name}
             preventSwipe={['up', 'down']}
             >
                 <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                    <h3>{person.name}</h3>              
                    <h4>{person.skills}</h4>
                 </div>
             </TinderCard>
            ) )}
            </div>
        </div>
    );
}

export default ProfileCards;