import * as React from "react";
import { cn } from "../utils/cs";
import styles from "./component.module.css";
const TextArea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          styles.inputText,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
