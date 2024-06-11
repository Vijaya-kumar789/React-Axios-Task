import { useContext } from "react";
import userContext from "./contextApi";


function InputPage () {
    const {firstName,setFirstName,lastName,setLastName,email,setEmail,handleSubmit} = useContext(userContext)
    return (
    <>
    <div className="container my-5 py-2">
      <div className="row align-items-center">
    <div className="col-md-10 mx-auto col-lg-7">
            <h2 className="display-4 fw-bold lh-1 mb-4 d-flex justify-content-center ">
               <span className="text">Enter Your Data</span>
            </h2>
      <form className="p-4 p-md-5 mb-5 border rounded bg-light form " onSubmit= {handleSubmit}>
        <div className="mb-3 ">
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter Your First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="nameInput"
            required
            placeholder="Enter Your Last Name"
           value = {lastName}
           onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="Email"
            className="form-control"
            id="exampleInputEmail"
            required
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className= "d-flex justify-content-center " >
        <button type="submit" className="btn sub-btn lh-3" >
          Submit
        </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </>
  );
}

export default InputPage;
