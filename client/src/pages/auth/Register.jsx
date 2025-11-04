import FormControl from "@/components/common/FormControl";
import { registerUser } from "@/store/auth-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Register() {
  const dispatch = useDispatch()
  const formControls = [
    {
      type: "input",
      name: "userName",
      label: "UserName",
      placeholder: "Enter your username",
    },
    {
      type: "input",
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      type: "input",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
    },
  ];
  const [formData, setFormData] = useState({
    userName : "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    
    dispatch(registerUser(formData)).then(data=>{
      if(data.payload?.success){
        toast.success(`${data.payload?.message}`)
        navigate('/auth/login')
      } else{
        console.log(data)
        toast.error(`${data.payload?.message === undefined ? 'user already registerd, Login please!' : data.payload?.message }`)
      }
    })
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-xl shadow-lg p-8 rounded-lg flex flex-col gap-2">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center">Create New Account</h2>
          <h3 className="text-sm text-center">You already have an account?
            <Link to="/auth/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </h3>
        </div>
        <FormControl
          formControls={formControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          buttonText="Sign in"
        />
      </div>
    </div>
  );
}

export default Register;