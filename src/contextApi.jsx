import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const API = "https://66667522a2f8516ff7a372e8.mockapi.io/users";

  let Navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedFirstname, setUpdatedFirstname] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedLastname, setUpdatedLastname] = useState("");

  useEffect(() => {
    let getuserdata = async () => {
      try {
        const res = await axios.get(API);
        setUserData(res.data);
        console.log(userData);
      } catch (error) {
        console.log(`Error ${error.message}`);
      }
    };
    getuserdata();
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { Firstname: firstName, lastname: lastName, Email: email };
    try {
      const res = await axios.post(API, newUser);
      const addedData = [...userData, res.data];
      setUserData(addedData);
      console.log(userData);
      setFirstName("");
      setLastName("");
      setEmail("");
      alert("User Data Successfully Created");
      Navigate("/UserData");
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      const userdata = userData.filter((data) => data.id !== id);
      setUserData(userdata);
      console.log("deleted");
      alert("User Data Successfully Deleted");
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  };
  const handleEdit = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API}/${id}`, updatedData);
      const updatedUserdata = userData.map((data) =>
        data.id === id ? { ...res.data } : data
      );
      setUserData(updatedUserdata);
      console.log("Edited");
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  };

  const handleEditClick = (data) => {
    setEditingUserId(data.id);
    setUpdatedFirstname(data.Firstname);
    setUpdatedLastname(data.lastname);
    setUpdatedEmail(data.Email);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleEdit(editingUserId, {
        Firstname: updatedFirstname,
        Lastname: updatedLastname,
        Email: updatedEmail,
      });
      setEditingUserId(null);
    }
  };

  return (
    <userContext.Provider
      value={{
        firstName,
        lastName,
        setEmail,
        setFirstName,
        setLastName,
        email,
        handleSubmit,
        userData,
        handleDelete,
        handleEdit,
        editingUserId,
        updatedFirstname,
        setUpdatedFirstname,
        updatedEmail,
        setUpdatedEmail,
        updatedLastname,
        setUpdatedLastname,
        handleEditClick,
        handleEditSubmit,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
