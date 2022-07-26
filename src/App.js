import React, { useState } from "react";
import "./styles.css";

function RegisterYourForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...values, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setValues({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>Register Your Self : </h2>

        <label> First Name :</label>
        <input
          type="text"
          autoComplete="off"
          value={values.username}
          onChange={handleInput}
          name="username"
          id="username"
        />

        <label>Email :</label>
        <input
          autoComplete="off"
          value={values.email}
          onChange={handleInput}
          name="email"
          id="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          size="30"
          required
        />

        <label> Phone :</label>
        <input
          type="text"
          autoComplete="off"
          value={values.phone}
          onChange={handleInput}
          name="phone"
          id="phone"
          pattern="[6789][0-9]{9}"
          title="Please enter  10-digit valid phone number"
        />

        <label> Password :</label>
        <input
          type="text"
          autoComplete="off"
          value={values.password}
          onChange={handleInput}
          name="password"
          id="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />

        <button type="submit">Submit</button>
      </form>

      <div>
        {records.map((curEle) => {
          return (
            <div key={curEle.id} className="showdata">
              <h3>{`User Name : ${curEle.username}`}</h3>
              <h3>{`User Email : ${curEle.email}`}</h3>
              <h3>{`User Phone No: ${curEle.phone}`}</h3>
              <h3>{`User Password: ${curEle.password}`}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <RegisterYourForm />
    </div>
  );
}
