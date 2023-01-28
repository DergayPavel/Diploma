import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = ({ type, color }:any) => (
    <div className='loading-box'>
        <ReactLoading 
            type={type} 
            color={color} 
            height={'90px'} 
            width={'300px'}/>
    </div>
    
);

export default Loading;