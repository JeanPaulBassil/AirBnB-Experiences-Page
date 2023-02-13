import Experience from "../Experience/Experience";
import './Experiences.css'
import data from '../../data';


export default function Experiences(){
    

    const output = data.map(attr => {
        if (attr.openSpots == 0) attr.status = 'SOLD OUT';
        else attr.status = 'AVAILABLE';
        return (
        <li>
            <Experience img={attr.img}
            status={attr.status}    
            rating={attr.rating}
            numberOfRatings={attr.numberOfRatings}
            country={attr.country}
            experienceName={attr.experienceName}
            experiencePrice={attr.experiencePrice}
            />
        </li>
        )
        
        
        
    })
    return (
        <ul>
            {output}
        </ul>
    )
}