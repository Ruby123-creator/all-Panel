import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { showToasterMessage } from "../../../Framework/utils/constant";
import { useAdminDetails, useChangePassword } from "../../../Framework/login";
import { useUI } from "../../../context/ui.context";
const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

const Password = () => {
  const {userData,loginData} = useUI();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: changePassword, isError: error } = useChangePassword();
  const togglePasswordVisibility = (setter: { (value: React.SetStateAction<boolean>): void; (arg0: (prev: any) => boolean): void; }) => {
    setter((prev: any) => !prev);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      showToasterMessage({messageType:"error",description:"Fields are required"})
     
      return;
    }
    if (newPassword !== confirmPassword) {
      showToasterMessage({messageType:"error",description:"New password and confirm password do not match!"})

    
      return;
    }
    console.log(passwordRegex.test(confirmPassword),"FLAGGSGSG")
    if(!(passwordRegex.test(confirmPassword))){
      showToasterMessage({messageType:"error",description:"Password should contain alphanumeric values"})

    }
    // if (oldPassword !== loginData?.password) {
    //   showToasterMessage({messageType:"error",description:"Incorrect old password!"})

     
    //   return;
    // }
    

    // showToasterMessage({messageType:"success",description:"Password Changed Successfully"})
    const val = {
      UserName: userData?.UserName,
      newpassword:newPassword,
      confirmpassword: confirmPassword,
      currentpassword: oldPassword
     
    }
     changePassword(val);
  };

  return (
    
      <div title="Change Password" className="report-form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-2 font-lato">
            {[{
              label: "Current Password",
              value: oldPassword,
              setValue: setOldPassword,
              show: showOldPassword,
              setShow: setShowOldPassword,
              name: "oldPassword"
            }, {
              label: "New Password",
              value: newPassword,
              setValue: setNewPassword,
              show: showNewPassword,
              setShow: setShowNewPassword,
              name: "newPassword"
            }, {
              label: "Confirm Password",
              value: confirmPassword,
              setValue: setConfirmPassword,
              show: showConfirmPassword,
              setShow: setShowConfirmPassword,
              name: "confirmPassword"
            }].map(({ label, value, setValue, show, setShow, name }, index) => (
             
               <div className="row row10" key={"password"+index}>
                  <div className="mb-3 position-relative col-md-6">
                    <label className="form-label">{label}:</label>
                    <div className=" relative">
                    {/* <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max"  >
                    <RiLockPasswordFill  fill="var(--color-secondary)" size={20}/>
                    
                    </span> */}
                    <input
                    placeholder={label}
                    name={name}
                     className="form-control"
                    readOnly
  onFocus={(e) => e.target.removeAttribute('readOnly')}
                    autoComplete="off"
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                    {/* <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      <button
                        type="button"
                        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined  cursor-pointer"
                        onClick={() => togglePasswordVisibility(setShow)}
                      >
                      <IoEyeOutline  fill="var(--color-secondary)" size={20}/>
                      </button>
                    </span> */}
                  </div>
                    
                  </div>
                </div>
             
             
            ))}
       <div className="row row10">
                  <div className="mb-3 col-md-6">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
          </div>
        </form>
      </div>
   
  );
};

export default Password;
