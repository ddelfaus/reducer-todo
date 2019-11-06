import React from 'react';

const ClearTodo = props => {
    return (
        <div>
            <button onClick ={props.clear} >Clear</button>

        </div>
    )
}


export default ClearTodo