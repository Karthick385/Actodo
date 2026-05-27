import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function Signup(props)

{
    const Navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers
    
    
    const [eusername,Seteusername] = useState()
    const [epassword,Setepassword] = useState()

    function handleUInput(evt)
        {
            Seteusername(evt.target.value)
        }

        function handlePInput(evt)
        {
            Setepassword(evt.target.value)
        }

        function addUser()
        {
            setusers([...users,{username:eusername,password:epassword}])
            Navigate("/")
        }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up Here :)</p> 

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md"
                    placeholder="username" onChange={handleUInput} />

                    <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md"
                    placeholder="password" onChange={handlePInput}/>

                    <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md"
                    placeholder="confirm password" />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
                        signup
                    </button>

                    <p>Already have an account? <Link to={"/"}  className="underline">Login</Link></p>
                </div>


            </div>

        </div>
    )
}

export default Signup