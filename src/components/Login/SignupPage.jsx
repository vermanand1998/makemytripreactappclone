import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import useFetch from "../../Hooks/useFetch";
import LoginContext from "../../Context/LoginContext";
import { toast } from "react-toastify";

const initialData = {
  name: "",
  email: "",
  password: "",
  cPassword: "",
};
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const SignupPage = () => {
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const [errors, setErrors] = useState(initialData);
  const [formData, setFormData] = useState(initialData);
  const { error: apiError, data, post, loading } = useFetch({});
  const [loginError, setLoginError] = useState(null);
  const { signUser, authenticated } = useAuthContext();

  const getErrors = (name, value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `Enter ${name}`;
    } else if (name === "email" && !validateEmail(value)) {
      errorMessage = "Enter a valid email";
    } else if (name === "password" && value.length < 6) {
      errorMessage = "Password must be atleast 6 characters";
    } else if (name === "cPassword" && formData.password != value) {
      errorMessage = "password not matched";
    }
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: getErrors(name, value),
    }));
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: getErrors(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for validation errors
    if (
      Object.values(errors).join("") ||
      Object.values(formData).some((val) => val === "")
    ) {
      toast.error("Please fill all the required fields.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    console.log(formData);
    await post("/bookingportals/signup", {
      ...formData,
      appType: "bookingportals",
    });
  };
  useEffect(() => {
    if (apiError) {
      if (
        apiError.status === 401 &&
        apiError.data?.message === "User already exists"
      ) {
        setLoginError(apiError.data.message);
      } else {
        toast.error("User already exists.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    if (data?.data) {
      signUser(data?.data);
      toast.success(data.data.status, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [apiError, data]);

  useEffect(() => {
    if (authenticated) {
      setShowLogin(false);
    }
  }, [authenticated]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        {errors.name && (
          <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="italic text-red-600 text-xs font-semibold ">
              !
            </span>
            {errors.name}
          </p>
        )}
        <label>Email</label>
        <input
          placeholder="Enter your valid email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        {errors.email && (
          <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="italic text-red-600 text-xs font-semibold ">
              !
            </span>
            {errors.email}
          </p>
        )}

        <label>Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        {errors.password && (
          <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="italic text-red-600 text-xs font-semibold ">
              !
            </span>
            {errors.password}
          </p>
        )}

        <label>Confirm Your Password</label>
        <input
          placeholder=""
          type="password"
          name="cPassword"
          value={formData.cPassword}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        {errors.cPassword && (
          <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="italic text-red-600 text-xs font-semibold ">
              !
            </span>
            {errors.cPassword}
          </p>
        )}
        <button disabled={loading} className="continueBtn">
          {loading ? "Loading..." : "CONTINUE"}
        </button>
      </form>
      <div className="termsandconditions">
        <p>By proceeding, you agree to MakeMyTrip's</p>
        <Link style={{ textDecoration: "None", color: "rgb(32, 166, 249)" }}>
          Privacy Policy , User Agreement
        </Link>
        <p>and</p>
        <Link style={{ textDecoration: "None", color: "rgb(32, 166, 249)" }}>
          T&Cs
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
