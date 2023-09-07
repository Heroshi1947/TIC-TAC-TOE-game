import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa' ;

function Icon({name}){
     if(name == "circle"){
        return < FaRegCircle/> // icon of regular circle
     } else if( name == "cross"){
        return < FaTimes /> // icon of cross 
     }else{
        return < FaPen /> //default icon of pen 
     }
    
}
    
export default Icon ; 