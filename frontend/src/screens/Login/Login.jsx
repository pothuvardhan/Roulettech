import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import interview from "../../assets/loginImage.jpg";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { institution_login } from "../../redux/action";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '30px',
});

const StyledFormControlLabel = styled(FormControlLabel)({
  fontSize: "50px",
  '& .MuiSvgIcon-root': {
    color: '#4A90E2',
  },
  '& .MuiTypography-root': {
    color: '#333',
    fontSize: "20px",
    paddingRight: "30px"
  }
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate=useNavigate();
  const [universityId, setUniversityId] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("institution");

  const loginInputHandler = (e) => {
    const { name = "", value = "" } = e.target;
    if (name === "universityId") {
      setUniversityId(value);
    } else {
      setPassword(value);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: universityId,
      password: password,
    };
    dispatch(institution_login(payload, () => {

      window.location.href = "./dashboard";
    }));
  };


  const handleSubmit1 = () => {

    navigate("/registration")
  };

  return (
    <div className="p-4">

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/6 p-5 md:p-20">
          <div className="bg-white rounded-lg p-6">



            <div className="mb-4">
              <h2 className="text-2xl font-semibold  mb-4">Institution Login</h2>

            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="space-y-4">
                  <div className="mb-2">
                    <label htmlFor="universityId" className="text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                      id="universityId"
                      name="universityId"
                      placeholder=""
                      value={universityId}
                      onChange={loginInputHandler}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      className="mt-2 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                      id="password"
                      name="password"
                      placeholder=""
                      value={password}
                      onChange={loginInputHandler}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Login
                  </button>


                </div>

                <div className="mt-4 flex">
                  <div className="">New to University?</div>

                  <Button
                    variant="contained"
                    sx={"bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"}
                    type="primary"
                    onClick={() => {
                      handleSubmit1();
                    }}
                  >
                    SignUp
                  </Button>

                  {/* <button
                    type="submit"
                    className="w-4/6 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    SignUp
                  </button> */}


                </div>

              </div>
            </form>


          </div>
        </div>
        <div className="hidden md:inline w-3/6">
          <img
            src={interview}
            className="w-full p-5 md:p-20"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
