import React from "react";
import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from "react-router-dom"
import * as yup from "yup";
const scheme = yup.object().shape({
  FirstName: yup.string().required("Enter your First Name"),
  LastName: yup.string().required("Enter your Last Name"),
  Username: yup.string().required("Enter your Username"),
  Password: yup.string().required("Enter your Password"),
});

function Register() {
  return (
    <div className="Register">
      <div className="heading">Login/Register</div>
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          Username: "",
          Password: "",
        }}
        validationSchema={scheme}
        onSubmit={(value) => {
          alert("Anam");
          console.log(value);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstname" className="firstname">
                  {" "}
                  First Name{" "}
                </label>
                <div>
                  <Field
                    name="FirstName"
                    type="text"
                    placeholder=" Enter your First Name"
                  />
                  <ErrorMessage name="FirstName" component={"div"} />
                </div>
              </div>
              <div>
                <label htmlFor="LastName" className="lastname">
                  {" "}
                  Last Name{" "}
                </label>
                <div>
                  <Field
                    name="LastName"
                    type="text"
                    placeholder=" Enter your Last Name"
                  />
                  <ErrorMessage name="LastName" component={"div"} />
                </div>
              </div>
              <div>
                <label htmlFor="Username" className="username">
                  {" "}
                  Username{" "}
                </label>
                <div>
                  <Field
                    name="Username"
                    type="text"
                    placeholder=" Enter your Username"
                  />
                  <ErrorMessage name="Username" component={"div"} />
                </div>
              </div>
              <div>
                <label htmlFor="Password" className="password">
                  {" "}
                  Password{" "}
                </label>
                <div>
                  <Field
                    name="Password"
                    type="text"
                    placeholder=" Enter your Password"
                  />
                  <ErrorMessage name="Password" component={"div"} />
                </div>
              </div>
              <button
                type="submit"
                className="submit"
                style={{
                  background: "yellow",
                }}
              >
                Click to Register
              </button>
              <div>
                <label htmlFor="or">OR</label>
              </div>
              <Link to="/"> 
              <button
                type="register"
                className="register"
                style={{
                  background: "yellow",
                }}
              >
                Back to Login 
              </button>
              </Link>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Register;
