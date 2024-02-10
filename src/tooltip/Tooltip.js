import { useState } from 'react';

import style from  './Tooltip.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';










function Tooltip({message,children,color,bgcolor,left,top}){

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
            }, 480);
           
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

          

                ( <div className={toolStyle} 

                        style={{backgroundColor:bgcolor,left:`${parseInt(left)+130}px`,top:`${parseInt(top)+20}px`}}
                >
                  
                    <FontAwesomeIcon 
                    className={style.pointer} 
                    icon={faCaretLeft} 
                    style={{color:bgcolor,backgroundColor:'transparent'}}
                    />
                    
                
                    <p 
                    className={style.tooltipMsg}
                    style={{color:color}}
                    > {message} </p> 
                                  
                  </div>   
              
                )
         }



      
      </div>
       
      
   
      
    );
}



export default Tooltip;