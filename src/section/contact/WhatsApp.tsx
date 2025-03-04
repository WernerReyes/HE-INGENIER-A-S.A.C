import WhatsAppImg  from "../../../public/WhatsApp.svg.png";
import "./css/WhatsApp.css";
export const WhatsApp = () => {
  return (
    <div className="WhatsApp">
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=917549994&amp;text=Hola tengo una consulta..."
        className=""
      >
        <img src={WhatsAppImg} width="68" height="68" />
      </a>
    </div>
  );
};
