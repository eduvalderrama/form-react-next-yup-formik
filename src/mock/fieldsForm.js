export const fieldsForm = [
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Nro de Comprobante de Pago(*)",
    placeholder: "BP88-245030",
    name: "number",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Nombre(*)",
    name: "name",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Apellidos(*)",
    name: "lastName",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "DNI/Carnet de extranjería(*)",
    name: "documentNumber",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Correo Electrónico(*)",
    name: "email",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Numero de Contacto(*)",
    name: "contactNumber",
    type: "text"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Producto comprado(*)",
    name: "productBuy",
    type: "select",
    options: [
      {
        name: 'Galaxy s24 Ultra',
        value: 1
      },
      {
        name: 'Galaxy s24+',
        value: 2
      },
      {
        name: 'Galaxy s24',
        value: 3
      }
    ]
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Tienda(*)",
    name: "shopStore",
    type: "select",
    options: [
      {
        name: 'San Miguel',
        value: 1
      },
      {
        name: 'San Isidro',
        value: 2
      },
      {
        name: 'San Martin de Porres',
        value: 3
      }
    ]
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Adjuntar tu boleta de pago(*)",
    name: "ticketNumber",
    type: "file"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Acepto la POLÍTICA DE PRIVACIDAD(*)",
    name: "privacyPolicy",
    type: "checkbox"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Acepto los Términos y condiciones(*)",
    name: "termsConditions",
    type: "checkbox"
  },
  {
    size: "col-span-6 min-[800px]:col-span-3 lg:col-span-2",
    text: "Deseo recibir información de promociones Samsung",
    name: "promotions",
    type: "checkbox"
  },
]