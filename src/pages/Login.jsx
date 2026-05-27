
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


function Login(props)
{
    const Navigate = useNavigate()
    const [eusername,Seteusername] = useState()
    const [epassword,Setepassword] = useState()
    const [ruser,Setruser] = useState(true)

    const users = props.users
  
    
        function checkUser()
        {

            var userfound = false

            users.forEach(function(item)
            {
                if (item.username === eusername && item.password ===epassword)
                {
                    console.log("Login Successfull")
                    userfound=true
                    Navigate("/landing",{state:{user:eusername}})
                }
               
            })
            if(userfound===false)
            {
                console.log("Login Failed")
                Setruser(false)
            }
        }

        function handleUInput(evt)
        {
            Seteusername(evt.target.value)
        }

        function handlePInput(evt)
        {
            Setepassword(evt.target.value)
        }
    return(

         <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you manage your activities after you login  :)</p>:<p className="text-red-400">Please Signup before you Login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md"
                    placeholder="username" onChange={handleUInput}/>

                    <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md"
                    placeholder="password" onChange={handlePInput} />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                        Login
                    </button>

                    <p>Don't have an account? <Link to={"/Signup"}  className="underline">Sign up</Link></p>
                </div>


            </div>

        </div>
    )

}

export default Login