import { useRef } from "react"
import { NavLink } from "react-router-dom";

function Register({onLogin}) {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleClick(e) {
        e.preventDefault();

        const user = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        fetch ("https://auth-rg69.onrender.com/api/auth/signup", {
            method: "POST",
            headers:{
                'Content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                onLogin(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
  <>
    <div className='container mt-3'>
        <h2 className='text-center mb-5'>Register page</h2>
        <form className="w-50 mx-auto" >
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username..." ref={usernameRef}/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter username..." ref={emailRef}/>
            </div>

            <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="Password" className="form-control" id="Password" placeholder="Enter username..." ref={passwordRef}/>
            </div>
            <button className="btn btn-success " onClick={handleClick}>Save</button> 
            <NavLink to={'/login'}>Log in</NavLink>
        </form>
     </div>
    </>
  )
}

export default Register