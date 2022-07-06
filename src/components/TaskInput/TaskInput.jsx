import React, {useState} from 'react';

function TaskInput(props) {
    const [value, setValue] = useState("")

    function handleKeyUp(e){
        if(e.key==="Enter"){
            setValue("")
        }
    }

    return (
        <>
        <input type="text" data-testid="taskInput" value={value} onChange={(e)=>setValue(e.target.value)}
        onKeyUp={handleKeyUp}
        />
        </>
    );
}

export default TaskInput;
