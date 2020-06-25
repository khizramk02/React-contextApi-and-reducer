import React from 'react';
import Child from './child';
import Child2 from './child2';

function Parent (props){
    return(
       <div> 
            <h1>hello from parent method</h1>
            <Child />

            <Child2 />
        </div>
    )
}

export default Parent;