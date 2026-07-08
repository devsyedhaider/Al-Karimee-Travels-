import whatsappImg from "../assets/whatsapp.png";

export default function WhatsAppButton() {
  const phoneNumber = "03022471111";
  const message =
    "Assalam-o-Alaikum! I would like to know more about your Hajj & Umrah packages.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group right-6 bottom-6 z-50 fixed"
    >
      <div className="relative">
        <span className="absolute inset-0 bg-green-500/40 rounded-full animate-ping"></span>

        <img
          src={whatsappImg}
          alt="WhatsApp"
          className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </a>
  );
}
