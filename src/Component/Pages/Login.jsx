import React from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from "react-router-dom"
import * as yup from "yup";
const scheme = yup.object().shape({
  Username: yup.string().required("Enter your Username"),
  Password: yup.string().required("Enter your Password"),
});

function Login() {
  return (
    <div className="Login">
      <div className="heading">Login/Register</div>
      <Formik
        initialValues={{
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
                Click to Login
              </button>
              <div>
                <label htmlFor="or">OR</label>
              </div>
              <Link to="/Register"> 
               <button
                type="register"
                className="register"
                style={{
                  background: "yellow",
                }}
              >
                Register Here
              </button>
              </Link>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
