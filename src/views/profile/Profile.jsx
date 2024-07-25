import React, { useEffect, useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";
import { profile } from "../../services/apiCalls";
import { updateProfile } from "../../services/apiCalls";
import "./Profile.css";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    is_active: null,
    created_at: "",
    updated_at: "",
  });

  const [editData, setEditData] = useState({
    name: "",
    email: "",
  });

  const [editing, setEditing] = useState(false);

  const passport = JSON.parse(localStorage.getItem("passport"));

  let token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringProfile = async () => {
        const response = await profile(passport.token);
        setProfileData(response.data);
        console.log(response);
      };
      bringProfile();
    }
  }, []);

  const editButtonHandler = () => {
    setEditData({
      name: profileData.name,
      email: profileData.email,
    });
    setEditing(!editing);
  };

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    console.log("estamos editanto en el input", editData);
  };

  const confirmButtonHandler = async () => {
    try {
      const response = await updateProfile(editData, passport.token)
      console.log(response);
    } catch (error) {
      console.log();
    } finally {
      navigate(0)
    }
  }

  //if(passport)
  return (
    <div>
      <h2>Profile info</h2>
      <p className={editing ? "hidden" : ""}>
        {" "}
        Name: {profileData.name ? profileData.name : "No disponible"}
      </p>
      <CInput
        type="text"
        placeholder="Name:"
        name="name"
        className={editing ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <p className={editing ? "hidden" : ""}>
        {" "}
        Name: {profileData.email ? profileData.email : "No disponible"}
      </p>
      <br />
      <CInput
        type="email"
        placeholder={profileData.email}
        name="email"
        className={editing ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <p>Active:{profileData.is_active ? "Yes" : "No"}</p>
      <p>Created At:{profileData.created_at}</p>
      <p>Updated At:{profileData.updated_at}</p>
      <CInput
        type="button"
        value="Edit"
        clickFunction={editButtonHandler}
      ></CInput>
      <br />
      <CInput type="button" value="Save" clickFunction={confirmButtonHandler} />
    </div>
  );
};
