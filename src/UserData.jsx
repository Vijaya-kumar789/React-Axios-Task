import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./contextApi";

function UserData() {
  const {
    userData, handleDelete,
    editingUserId, updatedFirstname,
    setUpdatedFirstname, updatedEmail,
    setUpdatedEmail, updatedLastname,
    setUpdatedLastname, handleEditClick,
    handleEditSubmit,
  } = useContext(userContext);
  
  return (
    <>
      <div className="container">
        {userData.length ? (
          <table className="table table-dark table-striped">
            <thead className="table table-dark table-striped ">
              <tr>
                <th scope="col">SL NO</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>
                    {" "}
                    {editingUserId === data.id ? (
                      <input
                        type="text"
                        value={updatedFirstname}
                        onChange={(e) => {
                          setUpdatedFirstname(e.target.value);
                        }}
                      />
                    ) : (
                      data.Firstname
                    )}
                  </td>
                  <td>
                    {editingUserId === data.id ? (
                      <input
                        type="text"
                        value={updatedLastname}
                        onChange={(e) => {
                          setUpdatedLastname(e.target.value);
                        }}
                      />
                    ) : (
                      data.lastname
                    )}
                  </td>
                  <td>
                    {editingUserId === data.id ? (
                      <input
                        type="text"
                        value={updatedEmail}
                        onChange={(e) => {
                          setUpdatedEmail(e.target.value);
                        }}
                      />
                    ) : (
                      data.Email
                    )}
                  </td>
                  <td scope="col">
                    {editingUserId === data.id ? (
                      <button
                        type="button"
                        className="btn text-white"
                        style={{ backgroundColor: "#563d7c" }}
                        onClick={handleEditSubmit}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-secondary "
                        onClick={() => handleEditClick(data)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td scope="col">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h1 className="d-flex justify-content-center lp mt-5">
              {" "}
              No user data
            </h1>
            <div className="d-flex justify-content-center lp mt-5">
              <Link to="/">
                <button className="btn btn-dark">Home</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default UserData;
