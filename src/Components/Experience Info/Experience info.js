import Star from '../../Images/Star 1.png';
import './Experience info.css'

export default function ExperienceInfo({rating, numberOfRatings, country, experienceName, experiencePrice}){
    return (
        <div>
           <img className='star' src={Star} alt='Star'/>
           <p className='rating-number'>{rating}</p>
           <p className='number-of-ratings'>({numberOfRatings}) • {country}</p>
           <p className='experience-name'>{experienceName}</p>
           <p className='experience-price'><b>From ${experiencePrice}</b> / person</p>
        </div>
    )
}