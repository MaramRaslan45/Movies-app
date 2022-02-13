import { useState } from "react";

const Register = () => {
  const [Regex, setregex] = useState({
    regemail: /^[A-Z0-9._%+-]+@[A-Z]+\.[a-z]{3}$/gi,
    reguser: /^\S*$/i,
    regpass:/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
  });
  const [register, setregister] = useState({
    email: "",
    emailex: "xxx@xxxx.com",
    passex: "[ example : *@%$# ]",
    name: "",
    username: "",
    password: "",
    confirmpass:"",
  });

  const [passwordshown, setpasswordshown] = useState(false);
  const togglepassword = () => {
    setpasswordshown(!passwordshown);

    if (!passwordshown) {
      seticon({
        icon: (
          <svg
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
        ),
      });
    } else {
      seticon({
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-eye-slash float-end"
            viewBox="0 0 16 16"
          >
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
          </svg>
        ),
      });
    }
  };
  const [icon, seticon] = useState({
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-eye-slash float-end"
        viewBox="0 0 16 16"
      >
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
      </svg>
    ),
  });

  const [registererr, setregistererr] = useState({
    emmailerr: null,
    nameerr: null,
    usernameerr: null,
    passworderr: null,
    confirmpasserr:null,
  });

  const handlechange = (e) => {
    if (e.target.name === "email") {
      setregister({
        ...register,
        email: e.target.value,
      });
      setregistererr({
        ...registererr,
        emmailerr:
          e.target.value.length === 0
            ? "This Field is required"
            : Regex.regemail.test(e.target.value) == false
            ? "Enter Correct E-mail Fomrat"
            : null,
      });
    } else if (e.target.name === "name") {
      setregister({
        ...register,
        name: e.target.value,
      });
      setregistererr({
        ...registererr,
        nameerr: e.target.value.length === 0 ? "This Field is required" : null,
      });
    } else if (e.target.name === "username") {
      setregister({
        ...register,
        username: e.target.value,
      });
      setregistererr({
        ...registererr,
        usernameerr:
          Regex.reguser.test(e.target.value) == false
            ? "White spaces detected"
            : null,
      });
    } else if (e.target.name === "password") {
      setregister({
        ...register,
        password: e.target.value,
      });
      setregistererr({
        ...registererr,
        passworderr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 8
            ? "Length must not be less than 8"
            : Regex.regpass.test(e.target.value) == false
            ? "Please write a strong password"
            : null,
      });
    }
    else if (e.target.name === "confirm") {
        setregister({
          ...register,
          confirmpass: e.target.value,
        });
        setregistererr({
          ...registererr,
          confirmpasserr:
            e.target.value.length === 0
            ? "This Field is required"
            :e.target.value !== register.password?
            "Please write the same password"
            : null,
        });
      }
  };
  return (
    <div className="border border-solid w-25 p-3 my-5 mx-auto text-light">
      <form className=" mt-5 mx-3 mb-5 ">
        <h1>Register Form</h1>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Email address
          </label>
          <div>
            <small className="text-danger">{registererr.emmailerr}</small>
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
          <small className="text-muted">Example: {register.emailex}</small>
        </div>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <div>
            <small className="text-danger">{registererr.nameerr}</small>
          </div>
          <input
            type="text"
            className="form-control mt-2 "
            id="name"
            name="name"
            onChange={(e) => handlechange(e)}
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label fw-bold">
            Username
          </label>
          <div>
            <small className="text-danger">{registererr.usernameerr}</small>
          </div>
          <input
            type="text"
            className="form-control mt-2 "
            id="username"
            name="username"
            onChange={(e) => handlechange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>

          <div>
            <small className="text-danger">{registererr.passworderr}</small>
          </div>
          <input
           type={passwordshown ? "text" : "password"}
            className="form-control mt-2"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => handlechange(e)}
            required
          />

          <a onClick={togglepassword} style={{cursor:"pointer" ,color:"blue"}}>
            {icon.icon}
          </a>
        </div>

        <small className="text-muted">{register.passex}</small>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Confirm Password
          </label>

          <div>
            <small className="text-danger">{registererr.confirmpasserr}</small>
          </div>
          <input
           type="password"
            className="form-control mt-2"
            id="exampleInputPassword1"
            name="confirm"
            onChange={(e) => handlechange(e)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success  w-100">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
