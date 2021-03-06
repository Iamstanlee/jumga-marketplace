import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, InputError } from "../../components";
import { authenticateUser } from "../../redux/authentication/auth-actions";
import { authReset, selectAuth } from "../../redux/authentication/auth-slice";
import loginImg from "../../assets/images/loginImg.jpg";
import { validateLoginForm } from "../../helpers";
import "../../bg-color.css";

export default function Login() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [login, dispatchInputEvent] = useReducer((state, action) => {
    switch (action.type) {
      case "GET_INPUT":
        const event = action.payload;
        const { name, value } = event.target;
        return { ...state, [name]: value };
      default:
    }
  }, {});

  return (
    <div className="relative h-screen w-screen">
      <div className="hidden sm:block w-1/2 h-full">
        <div
          className="h-full bg-no-repeat bg-right bg-cover bg-img"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
      </div>
      <div className="w-full sm:w-1/2 absolute right-0 top-0 bg-white h-full">
        <div className="p-0 sm:p-9 w-full h-full relative flex flex-col items-center justify-center text-center">
          <div className="py-8">
            <h2 className="text-4xl">Welcome</h2>
            <p className="text-gray-500 py-1">
              Login to your account to continue
            </p>
          </div>
          <form
            className="flex flex-col justify-center items-center w-5/6"
            onSubmit={(event) => {
              event.preventDefault();
              const errors = validateLoginForm(login);
              if (errors.atLeastAnError) {
                setError(errors);
              } else {
                setError({});
                dispatch(authenticateUser(login, "login"));
              }
            }}
          >
            {auth.message && (
              <Alert
                label={auth.message}
                callback={() => dispatch(authReset())}
              />
            )}
            <input
              className="w-full border-solid border-b-2 border-gray-400 p-2 mt-4 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(event) => {
                event.persist();
                dispatchInputEvent({ type: "GET_INPUT", payload: event });
              }}
            ></input>
            {error.email && <InputError message={error.email} />}
            <input
              className="w-full border-solid border-b-2 border-gray-400 p-2 mt-4 focus:outline-none"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(event) => {
                event.persist();
                dispatchInputEvent({ type: "GET_INPUT", payload: event });
              }}
            ></input>
            {error.password && <InputError message={error.password} />}
            <small className="w-full mt-3 text-gray-500 text-right underline">
              <Link to="/reset-password">Forgot password?</Link>
            </small>
            <button
              className="px-4 bg-green-400 p-2 my-3 rounded-full text-white focus:outline-none hover:shadow-lg  transition duration-500 ease-in-out"
              type="submit"
            >
              {auth.isLoading ? "Please wait..." : "LOGIN"}
            </button>
            <p className="text-gray-500 my-3">
              Don't have an account?
              <Link
                to="/sign-up"
                replace={true}
                className="text-green-400 underline pl-0.5"
              >
                Signup here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
