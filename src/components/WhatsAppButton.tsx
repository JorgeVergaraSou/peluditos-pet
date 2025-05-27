// components/WhatsAppButton.tsx o .jsx

const WhatsAppButton = () => {
  const phoneNumber = '56920304635'; // cambia este número
  const message = 'Hola, estoy interesado en tus productos para mascotas';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success whatsapp-button"
      aria-label="WhatsApp"
    >
      <i className="bi bi-whatsapp fs-4"></i>
    </a>
  );
};

export default WhatsAppButton;
