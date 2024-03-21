"use client"
import { fieldsForm } from "@/mock/fieldsForm";
import InputText from "./InputText";
import { Form, Formik } from "formik";
import { PaySchema } from "@/utils/Validations";

const FormCheil = () => {
  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
        lastName: '',
        documentNumber: '',
        email: '',
        contactNumber: '',
        productBuy: '',
        shopStore: '',
        ticketNumber: '',
        privacyPolicy: '',
        termsConditions: '',
        promotions: '',
      }}
      validationSchema={PaySchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ errors, touched }) => (

        <Form>
          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            {
              fieldsForm.map(({ size, text, placeholder, name, type, options }, index) => {
                return <InputText
                  key={index}
                  size={size}
                  text={text}
                  placeholder={placeholder}
                  name={name}
                  type={type}
                  options={options}
                  error={errors[name]}
                  touched={touched[name]}
                />
              })
            }
            <div className="col-span-6 text-center">
              <p className="text-base font-bold leading-7">Este sitio esta protegido por reCAPTCHA. Aplican la Politica de Privacidad de Google y los Términos del Servicio</p>
              <button type="submit" className="px-10 py-4 mt-4 mb-2 text-sm font-bold text-white bg-gray-800 rounded-full sm:px-32 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">REGISTRAR</button>
            </div>
          </div >
        </Form>
      )}
    </Formik >
  )
}

export default FormCheil;
