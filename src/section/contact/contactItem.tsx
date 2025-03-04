import { LucideIcon } from "lucide-react";

import styles from "./css/contactItem.module.css";

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  value,
}) => {
  return (
    <div className={styles.columnIcon}>
      <div className={styles.iconColor}>
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};
