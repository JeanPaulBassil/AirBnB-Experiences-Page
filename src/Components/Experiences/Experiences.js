import Experience from "../Experience/Experience";
import './Experiences.css'
import Photo from '../../Images/image 12.png';


export default function Experiences(){
    const first = {
        img: Photo,
        status: 'SOLD OUT',
        rating: 5.0,
        numberOfRatings: 6,
        country: 'USA',
        experienceName: "Life lessons with Katie Zaferes",
        experiencePrice: 136
    };
    return (
        <ul>
            <li><Experience 
                img={Photo}
                status='SOLD OUT'
                rating= {5.0}
                numberOfRatings= {6}
                country= 'USA'
                experienceName= "Life lessons with Katie Zaferes"
                experiencePrice= {136}
                />
            </li>
            <li><Experience /></li>
            <li><Experience /></li>
        </ul>
    )
}