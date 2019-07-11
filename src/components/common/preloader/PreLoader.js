import preLoader from '../../../assets/images/loading.svg';
import React from 'react';


let PreLoader = (props) => {
    return <div>
                <img src={preLoader} style={{backgroundColor: 'white'}} /> 
            </div>
}

export default PreLoader;