import * as Yup from 'yup';

export const PaySchema = Yup.object().shape({
    number: Yup.string().required('El numero de boleta es obligatorio'),
    name: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    documentNumber: Yup.string().required('El nro. de documento es obligatorio'),
    email: Yup.string().email('Escriba un email valido').required('El correo electrónico es obligatorio'),
    contactNumber: Yup.string().required('El nro. de telefono es obligatorio'),
    productBuy: Yup.string().required('Escoja una opcion'),
    shopStore: Yup.string().required('La tienda es obligatoria'),
    ticketNumber: Yup.string().required('Es obligatorio la boleta de pago'),
    privacyPolicy: Yup.string().required('Debe aceptar las politicas de privacidad'),
    termsConditions: Yup.string().required('Debe aceptar los terminos y condiciones'),
});