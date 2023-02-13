import './Status.css';

export default function Status({status}){
    return (
        <div className='status'>
            <p className='status-info'>{status}</p>
        </div>
    )
}