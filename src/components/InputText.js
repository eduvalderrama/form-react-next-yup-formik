import { Field } from "formik";

import ErrorMessage from "./ErrorMessage";
``

const InputText = ({ size, text, placeholder, name, type, options, error, touched }) => {
  return (
    <>
      {
        type === 'text' && (
          <div className={size}>
            <label htmlFor={name} className="block text-sm font-bold leading-6 text-gray-900">
              {text}
            </label>
            <div className="mt-2">
              <Field
                placeholder={placeholder}
                type="text"
                name={name}
                id={name}
                autoComplete={name}
                className={`block w-full px-6 py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ${error && touched ? 'ring-orange-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
            {(error && touched) && <ErrorMessage error={error} touched={touched} />}
          </div>
        )
      }
      {
        (type === "select" && options?.length) && (
          <div className={size}>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{text}</label>
            <div className="mt-2">
              <Field as="select" id={name} name={name} autoComplete={name} className={`block w-full px-4 py-4 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ${error && touched ? 'ring-orange-600' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
                <option>Seleccione</option>
                {
                  options.map(({ name, value }, index) => {
                    return <option key={index} value={value}>{name}</option>
                  })
                }
              </Field>
            </div>
            {(error && touched) && <ErrorMessage error={error} />}
          </div>
        )
      }
      {
        type === 'file' && (
          <div className={size}>
            <label htmlFor={name} className="block text-sm font-bold leading-6 text-gray-900">
              {text}
            </label>
            <div className="relative mt-2">
              <Field
                type="file"
                name={name}
                id={name}
                autoComplete={name}
                className={`w-full px-6 py-3 text-gray-900 border-0 rounded-md shadow-sm lock ring-1 ring-inset ${error && touched ? 'ring-orange-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-6 h-6 transform -translate-y-1/2 right-3 top-7">
                <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
              </svg>

              <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-300" id={name}>*Solo se podrá adjuntar un archivo con peso menor a 10MB en los formatos JPG, PNG, BMP, TIF, PDF</p>
            </div>
            {(error && touched) && <ErrorMessage error={error} touched={touched} />}
          </div>
        )
      }
      {
        type === 'checkbox' && (
          <div className={`flex flex-col items-center  ${size}`}>
            <div className={`flex items-center justify-center mb-4`}>
              <Field id={name} name={name} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">{text}</label>
            </div>
            {(error && touched) && <ErrorMessage error={error} touched={touched} />}
          </div>
        )
      }

    </>
  )
}

export default InputText;