const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-5 items-center my-14">
      <h2 className="text-2xl font-semibold py-4">
        Quieres trabar con nosotros? Contactanos
      </h2>
      <form className="flex flex-col gap-8">
        <input type="text" placeholder="Nombre y Apellido" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Telefono" />
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
