import {useState} from "react";
function AddTodoForm(props)
{
    const activityArr = props.activityArr
    const setactivityArr=props.setactivityArr 

    const [newActivity,setNewActivity] =useState("")

    function handlechange(evt)
    {
        setNewActivity(evt.target.value)
    }
    
    function addActivity()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }
    return(
         
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>

                <div>
                <input value={newActivity} onChange={handlechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"/>
                <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>

            </div>
    )
}

export default AddTodoForm