import './Preview.css';
import Status from '../Status/Status';

export default function Preview({img, status}){
    return (
        <div className='photoCont'>
            <img className='preview' src={img}/>
            <div className='stat'>
                <Status status={status}/>
            </div>
        </div>
    )
}