
import { LucideIcon } from "lucide-react"; 

import styles from "./css/contactItem.module.css";

interface ContactItemProps {
  icon: LucideIcon; 
  title: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, value }) => {
  return (
    <div className={styles.columnIcon}>
      <div >
        <Icon className="text-white" size={24} /> 
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;
