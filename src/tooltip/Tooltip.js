import { useState } from 'react';

import style from  './Tooltip.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';





function Tooltip({message,children}){

    const [hoverState, setHoverState] = useState(false);
    const [toolStyle, setToolStyle] = useState( `${style.tooltip}` );

    // { Mouse hover funct } 
        const handleMouseEnter = () => {
            setHoverState(true);
            setToolStyle(`${style.tooltip}  ${style.toolAnimOn}`);
        };

        const handleMouseLeave = () => {
            const timeout = setTimeout(() => {
                 setHoverState(false);
            }, 900);
           
            setToolStyle(`${style.tooltip}  ${style.toolAnimOff}`);
            return () => clearTimeout(timeout);
        };

    // {style states}

   



    return(

     
      <div className={style.tooltipContainer}>

        {/* // CHILDREN  */}
         <p className={style.child}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}>
            {children}
        </p> 


        {/* // TOOLTIP  */}
        {hoverState &&
           
           ( <div className={toolStyle}>
              <FontAwesomeIcon className={style.pointer} icon={faCaretLeft} />
               <p className={style.tooltipMsg}> {message} </p>              
            </div>   
        
           )
         }
      
      </div>
       
      
   
      
    );
}



export default Tooltip;