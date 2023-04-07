import './contact.css'

function Contact() {
  return (
    <section className='contact'>
     <div className='container'>
     <h2>Contacto</h2>
      <div className='contact-content'>
        <div className='contact-info'>
          <span>Correo</span>
          <p>test_123@gmail.com</p>
          <span>Número de teléfono</span>
          <p>+51 986175271</p>
          <span>Ubicación</span>
          <p>Cusco, Perú</p>
        </div>
        <form>
          <label htmlFor="">
            <p>Nombre</p>
            <input type="text" placeholder='Ingresa tu nombre' />
          </label>
          <label htmlFor="">
            <p>Correo electrónico</p>
            <input type="email" placeholder='Ingresa tu correo electrónico' />
          </label>
          <label htmlFor="">
            <p>Mensaje</p>
            <textarea type="text" placeholder='Ingresa un mensaje'></textarea>
          </label>
          <button type='submit'>Enviar</button>
        </form>
      </div>
     </div>
    </section>
  )
}

export default Contact