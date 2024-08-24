import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { registerInstitute } from "../../redux/action";
import { TimePicker } from "antd";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const [mainData, setMainData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handleSubmit = () => {
   
    const payload = {
      first_name: mainData?.first_name,
      last_name: mainData?.last_name,
      contact: mainData?.contact,
      email: mainData?.email,
      "about": "A software developer.",
      "age": 25,
      "sex": "Male",
      address: mainData?.address,
      password: mainData?.password,

    };

    dispatch(registerInstitute(payload));
    navigate("/");
  };

  const userFeilds = [
    {
      label: "First Name",
      key: "first_name",
      value: mainData?.first_name ?? "",
      type: "text",
      required: true
    },
    {
      label: "Last Name",
      key: "last_name",
      value: mainData?.last_name ?? "",
      type: "text",
      required: true
    },
    {
      label: "Phone Number",
      key: "contact",
      value: mainData?.contact ?? "",
      type: "text",
      required: true
    },
    {
      key: "email",
      label: "Email",
      value: mainData?.email ?? "",
      type: "text",
      required: true
    },
    {
      label: "Address",
      key: "address",
      value: mainData?.address ?? "",
      type: "text",
      required: true
    },
    {
      label: "Password",
      key: "password",
      value: mainData?.password ?? "",
      type: "text",
      required: true
    },


  ]





  const handleInputChange = (key, value) => {
    let temp = { ...mainData };
    temp[key] = value;
    setMainData(() => ({ ...temp }));
  };



  return (
    <div
      className="bg-gray-100 p-5 min-h-[100vh]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="rounded-xl overflow-hidden bg-white "
        style={{ width: "60%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '20px' }}
      >
        <div className="px-4 py-2 border-b-2">
          <h2 className="text-2xl font-medium">Join With Us</h2>

        </div>

        <div className="grid grid-cols-2 gap-6 p-6">
          {userFeilds?.map((o) => (
            <>
              {o?.type === "select" ? (
                <>
                  <Autocomplete
                    size="small"
                    fullWidth
                    multiple={o?.multiple ?? false}
                    options={o?.options ?? []}
                    getOptionLabel={(option) => option?.label}
                    defaultValue={o?.value}
                    filterSelectedOptions={true}
                    value={o?.value}
                    renderInput={(params) => (
                      <TextField {...params} label={(
                        <div>
                          {o?.label}
                          {o?.required && (
                            <span style={{ color: 'red' }}>*</span>
                          )}
                        </div>
                      )} />
                    )}
                    onChange={(e, value) => {
                      handleInputChange(o?.key, value);
                    }}
                  />
                </>
              ) : (
                <>
                  <TextField
                    key={o?.key}
                    type={o?.type}
                    label={(
                      <div>
                        {o?.label}
                        {o?.required && (
                          <span style={{ color: 'red' }}>*</span>
                        )}
                      </div>
                    )}
                    value={o?.value}
                    size="small"
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      handleInputChange(o?.key, e.target.value);
                    }}
                    // required={o?.required}
                    InputLabelProps={{
                      style: { color: "black" }, // Set the label text color
                    }}
                  />

                  {/* {o?.required && (
                    <span
                      className="text-red absolute top-1/2 right-2 transform -translate-y-1/2 "
                      style={{ fontSize: "0.75rem" }}
                    >
                      *
                    </span>
                  )} */}
                </>

              )}
            </>
          ))}
        </div>





        <div className="flex justify-end p-6 gap-6">
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            type="primary"
            onClick={() => {
              handleSubmit();
            }}
          // disabled={!isFormValid}
          >
            Register Institute
          </Button>


        </div>
      </div>
    </div>
  );
};
export default Register;
