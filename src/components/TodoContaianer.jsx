import {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";


function TodoContainer()
{

     const [activityArr,setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have breakfast"
        },
        {
            id:3,
            activity:"Take a shower" 
        }
    ]) 



    return(
        <div>

          <div className="flex gap-5 flex-wrap">   
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            
        </div>


        </div>
    )
}
export default TodoContainer