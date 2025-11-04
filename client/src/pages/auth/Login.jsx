import FormControl from "@/components/common/FormControl";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function Login() {
  const formControls = [
    {
      type: "input",
      name : 'email',
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      type: "input",
      name : "password",
      label: "Password",
      placeholder: "Enter your password",
    },
  ];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData, "formData");
    
    dispatch(loginUser(formData)).then(data=>{
      if(data.payload?.success){
        console.log(data.payload)
        
        toast.success(`${data.payload?.message}`)
      } else{
        toast.error(`${data.payload?.message === undefined ? 'account not found, please register!' : data.payload?.message }`)
      }
    })
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-xl shadow-lg p-8 rounded-lg flex flex-col gap-2">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
          <h3 className="text-sm text-center">Create an Account
            <Link to="/auth/register" className="text-blue-500 hover:underline ml-1">
              Sign Up
            </Link>
          </h3>
        </div>
        <FormControl
          formControls={formControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          buttonText="Login"
        />
      </div>
    </div>
  );
}

export default Login;