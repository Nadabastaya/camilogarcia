"use client";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";
import { Formik, Field, Form } from "formik";
import ContactForm from "../components/ContactForm";
import { sendContactForm } from "@/lib/api";
import * as Yup from "yup";

const Contact = () => {
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short :(")
      .max(65, "Too Long :(")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <div id="hola" className=" flex flex-col md:flex-row p-6 md:p-10 lg:px-20 xl:px-32 2xl:px-96 mb-10"> {/* ESTA WEA es más grande que la pantalla */}
      <div className=" md:w-1/2 flex flex-col items-center justify-center ">
        <div className="text-5xl 2xl:text-6xl">
          Wanna work with me?
          <div className="text-xl md:text-2xl xl:text-3xl py-6">
            Es simple! sólo llena el formulario y me pondré en contacto contigo
            a la brevedad.
          </div>
        </div>
      </div>
      <div className="md:w-1/2  flex items-center justify-center md:justify-end">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={contactFormSchema}
          onSubmit={async (value) => {
            await sendContactForm(value);
          }}
          className=""
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 items-center justify-center text-black">
              <Field
                id="name"
                name="name"
                placeholder="Your Name"
                className="h-14 w-72 lg:w-96 rounded-lg placeholder:pl-3 pl-3"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="h-14 w-72 lg:w-96 rounded-lg placeholder:pl-3 pl-3"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                component="textarea"
                id="message"
                name="message"
                placeholder="Let me know"
                className="h-28 max-h-28 w-72 lg:w-96 rounded-lg placeholder:p-3 p-3"
              />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
              <button
                className="bg-black rounded-lg px-3 w-36 h-14 text-lg hover:border-2 text-white"
                type="submit"
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

export default Contact;
/* <OptionTitle>Projects</OptionTitle>
      <div className="flex flex-grow flex-col p-10 bg-green-300">
        <div className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nemo
          molestiae iusto beatae sint tenetur, aliquam laborum ducimus!
          Inventore adipisci rem sed expedita officiis id veritatis reiciendis
          magnam rerum eum voluptate aperiam quibusdam ipsum maiores optio
          necessitatibus voluptatem quisquam beatae laboriosam eligendi,
          consequuntur dicta molestias excepturi! Aliquid quas harum voluptatum.
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={contactFormSchema}
          onSubmit={async (value) => {
            await sendContactForm(value);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 w-96">
              <Field id="name" name="name" placeholder="Your Name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Your Name"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                component="textarea"
                id="message"
                name="message"
                placeholder="Your Name"
              />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
              <button type="submit">SUBMIT</button>
            </Form>
          )}
        </Formik>
      </div> */
