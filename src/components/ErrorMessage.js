const ErrorMessage = ({ error, touched }) => {
  return (
    <>
      {
        (error) && (
          <div className="mt-1 ml-2 text-sm text-orange-600 font-mdbold">{error}</div>
        )

      }
    </>
  )
}

export default ErrorMessage;