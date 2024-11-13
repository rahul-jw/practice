"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import registerImg from "@/assets/register.jpg"

const Register = () => {
  const [data, setData] = useState();
  const registerSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't exceed 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  console.log(data)
  return (
    <div className=" w-full h-screen flex  items-center justify-evenly ">
      <div className="leftDiv">
        <Image src={registerImg} alt="" width={600}  quality={65}/>
      </div>
      <div className="rightDiv w-[550px] p-2">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(val) => {
            setData(val);
          }}
        >
          {({ touched, error }) => (
          <Form>
          <div className="mb-6 w-[100%]">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Field
              id="name"
              name="name"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm mt-2"
            />
          </div>
        
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm mt-2"
            />
          </div>
        
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <Field
              id="phone"
              name="phone"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600 text-sm mt-2"
            />
          </div>
        
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 text-sm mt-2"
            />
          </div>
        
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-600 text-sm mt-2"
            />
          </div>
        
          <button
            type="submit"
            className="w-full py-3 px-4 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
