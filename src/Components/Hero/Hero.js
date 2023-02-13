import './Hero.css';
import Photos from '../../Images/Group 77.png';


export default function Hero(){
    return (
        <div>
            <img src={Photos} className='pix'/>
            <h3 className='header'>Online Experiences</h3>
            <p className='text'>Join unique interactive activities led by <br/>one-of-a-kind hosts-all without leaving<br/>home.</p>
        </div>
    )
}