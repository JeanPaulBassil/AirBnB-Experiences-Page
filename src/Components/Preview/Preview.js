import './Preview.css';
import Status from '../Status/Status';

export default function Preview(){
    return (
        <div className='preview'>
            <div className='stat'>
                <Status />
            </div>
        </div>
    )
}