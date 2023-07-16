"use client";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";
import { Formik } from "formik";

const Contact = () => {
  return (
    <main className="flex flex-col justify-center h-screen items-center font-trajan-bold">
      <OptionTitle>Contact</OptionTitle>
      <div className="w-screen px-44 flex flex-col gap-4 flex-grow">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className=" flex flex-col flex-grow gap-7 justify-center items-center">
              <input type="text" name="name" id="name" placeholder="Your name" className=" w-1/3 h-10"/>
              <input className=" w-1/3 h-10"
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <textarea className=" w-1/3 h-52 resize-none"></textarea>
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Back />
    </main>
  );
};

export default Contact;
