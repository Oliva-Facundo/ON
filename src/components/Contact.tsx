import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_1m12iik",
        "template_hprfdrb",
        form.current as HTMLFormElement,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );
      setMessage("¡Mensaje enviado con éxito!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage("Error al enviar el mensaje. Inténtalo de nuevo.");
        console.error("FAILED...", error.message);
      } else {
        setMessage("Error desconocido. Inténtalo de nuevo.");
        console.error("FAILED...", error);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-5 items-center my-1 py-20"
    >
      <h2 className="text-2xl font-semibold pb-16">
        ¿Quieres trabajar con nosotros? Contáctanos
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-8 w-2/6 mb-5"
      >
        <div>
          <label htmlFor="user_name" className="sr-only">
            Nombre y Apellido
          </label>
          <input
            id="user_name"
            className="h-10 rounded-lg px-3 bg-transparent border-2 border-gray-300 w-full"
            type="text"
            name="user_name"
            placeholder="Nombre y Apellido"
            required
          />
        </div>
        <div>
          <label htmlFor="user_email" className="sr-only">
            Email
          </label>
          <input
            id="user_email"
            className="h-10 rounded-lg px-3 bg-transparent border-2 border-gray-300 w-full"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="message"
            className="h-28 rounded-lg p-2 bg-transparent border-2 border-gray-300 w-full resize-none overflow-hidden"
            placeholder="Mensaje"
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSending}
          className={`self-end border-2 py-2 px-4 rounded-lg font-semibold ${
            isSending
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:text-black"
          } ease-in-out duration-300`}
        >
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
    </section>
  );
};

export default Contact;
