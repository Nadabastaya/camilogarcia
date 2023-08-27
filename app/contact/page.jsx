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
    <main className="flex flex-col justify-center h-screen items-center font-trajan-bold">
      <OptionTitle>Contact</OptionTitle>
      <div className="w-screen px-44 flex flex-col gap-4 flex-grow ">
        <div className=" p-12">
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
            <Form className="flex flex-col gap-4">
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
      </div>
      <Back />
    </main>
  );
};

export default Contact;
