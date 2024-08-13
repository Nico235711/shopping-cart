
export const Footer = () => {

  return (
    <div className="bg-blue-400 py-5">
      <footer className="max-w-60 md:max-w-2xl lg:max-w-5xl mx-auto text-lg text-white">
        <p>Todos los derechos reservados - {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
