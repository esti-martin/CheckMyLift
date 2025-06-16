import styles from "./Button.module.css";
import { LuMapPin } from "react-icons/lu";

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']; // "button" | "submit" | "reset"
  disabled?: boolean;
  showIcon?: boolean;
};

// Componente funcional usando las props tipadas
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "btn-princ-s",
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  showIcon = (variant === "btn-princ-s" || variant === "btn-princ-l"),
  ...rest //--> Su función es recoger en una sola variable todos los argumentos o propiedades restantes que no se han desestructurado explícitamente
}) => {

   // Combina la clase del módulo y cualquier clase adicional
  const buttonClass = `${styles[variant]} ${className}`.trim();

   return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {showIcon && <LuMapPin className={styles["btn-icon"]} />}

      {children}
    </button>
  );
};

export default Button;