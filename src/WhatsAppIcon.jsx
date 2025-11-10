import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppIcon = () => {
  const phoneNumber = '918867270931'; // Replace with your actual WhatsApp number

  return (
    <a 
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;