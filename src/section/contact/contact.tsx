import { Mail, MapPin, Phone } from "lucide-react";
import { ContactItem } from "./contactItem";
import styles from "./css/contact.module.css";
import { Button, Input, TextArea } from "../../components";


export const ContactSection = () => {
  return (
    <div className={styles.column}>
      <h2>
        <span>Contáctanos</span>
      </h2>

    

      <div className={styles.rowGrid}>
        <div className="space-y-8">
        <ContactItem icon={Phone} title="Teléfono" value="983113550" />
        <ContactItem icon={Mail} title="Email" value="info@heingenieria.com" />
        <ContactItem
          icon={MapPin}
          title="Dirección"
          value="JR. SAN IGNACIO NRO. 523 - SMP"
        />
        </div>
        
        
      <form className={styles.form}>
        <Input
          type="text"
          placeholder="Tu Nombre"
          className=""
        />
        <Input
          type="text"
          placeholder="Tu Email"
          className=""
        />
        <TextArea
            placeholder="Tu Mensaje"
            rows={5}         
        />
        <Button icon={Mail}>Enviar Mensaje</Button>
      </form>
      </div>

    </div>
  );
};
