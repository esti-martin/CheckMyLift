import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']; // "button" | "submit" | "reset"
  disabled?: boolean;
};

// Componente funcional usando las props tipadas
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "btn-princ-s",
  className = '',
  onClick,
  type = 'button',
  disabled = false,
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
      {children}
    </button>
  );
};

export default Button;