import Star from '../../Images/Star 1.png';
import './Experience info.css'

export default function ExperienceInfo(){
    return (
        <div>
           <img className='star' src={Star} alt='Star'/>
           <p className='rating-number'>5.0</p>
           <p className='number-of-ratings'>(6) • USA</p>
           <p className='experience-name'>Life lessons with Katie Zaferes</p>
           <p className='experience-price'><b>From $136</b> / person</p>
        </div>
    )
}