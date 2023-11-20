import { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";
import { Buffer } from "buffer";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSendEmail = async () => {
    try {
      setLoading(true);
      const { name, email, message } = inputs;
      if (!name || !email || !message)
        return toast.error("Todos los campos son obligatorios.");
      const res = await fetch(import.meta.env.VITE_SEND_EMAIL_API || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          bxg: Buffer.from(import.meta.env.VITE_EMAIL_SEND || "").toString(
            "base64"
          ),
        }),
      });
      const data = await res.json();
      if (data.messageId) {
        toast.success("Mensaje enviado.");
        return setInputs({
          name: "",
          email: "",
          message: "",
        });
      }
      toast.error("Error al enviar el mensaje.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
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
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              <p>Correo electrónico</p>
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              <p>Mensaje</p>
              <textarea
                type="text"
                placeholder="Ingresa un mensaje"
                name="message"
                value={inputs.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button
              type="button"
              disabled={loading}
              onClick={loading ? () => {} : handleSendEmail}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
