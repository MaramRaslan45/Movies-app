import { useState } from "react";

const Loginform = () => {
  const [Regemail, setregemail] = useState({
    regemail: /^[A-Z0-9._%+-]+@[A-Z]+\.[a-z]{3}$/gi,
  });
  const [loginform, setloginform] = useState({
    email: "",
    password: "",
    emailex: "xxx@xxxx.com",
  });

  const [passwordshown, setpasswordshown] = useState(false);
  const togglePassword = () => {

    setpasswordshown(!passwordshown);
    
    if(!passwordshown){
       
        seticon({
            
            icons:<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-eye float-end"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        })
    
     
    } else{
        seticon({
            
            icons:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash float-end" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
          </svg>,

        })
    }

  };
  

  const [loginformerr, setloginformerr] = useState({
    emmailerr: null,
    passworderr: null,
  });
  const [icon, seticon] = useState({
    icons: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash float-end" viewBox="0 0 16 16">
    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
  </svg>,
  
   
  });
  const handlechange = (e) => {
    if (e.target.name === "email") {
      setloginform({
        ...loginform,
        email: e.target.value,
      });
      setloginformerr({
        ...loginformerr,
        emmailerr:
          e.target.value.length === 0
            ? "This Field is required"
            : Regemail.regemail.test(e.target.value) == false
            ? "Enter Correct E-mail Fomrat"
            : null,
      });
    } else if (e.target.name === "password") {
      setloginform({
        ...loginform,
        password: e.target.value,
      });
      setloginformerr({
        ...loginformerr,
        passworderr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 8
            ? "Length must not be less than 8"
            : null,
      });
    }
  };
  return (
    <div className="border border-solid w-25 p-3 my-5 mx-auto text-light">
      <form className=" mt-5 mx-3 mb-5 ">
        <h1 className="mb-5">Login </h1>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Email address
          </label>
          <div>
            <small className="text-danger">{loginformerr.emmailerr}</small>
          </div>
          <input
            type="email"
            className="form-control mt-2 "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => handlechange(e)}
            required
          />
          <small className="text-muted">Example: {loginform.emailex}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>

          <div>
            <small className="text-danger">{loginformerr.passworderr}</small>
          </div>
          <input
            type={passwordshown ? "text" : "password"}
            className="form-control mt-2"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => handlechange(e)}
            required
          />
          <a onClick={togglePassword} style={{cursor:"pointer", color:"blue"}}>{icon.icons}</a>
          
        </div>

        <button type="submit" className="btn btn-primary  w-100 mt-3">
          Login
        </button>
      </form>
    </div>
  );
};
export default Loginform;
