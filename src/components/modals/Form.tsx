import styles from "./Form.module.css"
import React, { useState } from "react";
import Button from "../buttons/Button";

type FormProps = {
  options: Array<{ value: string; label: string }>;
  title?: string;
};

const Form: React.FC<FormProps> = ({ options, title = "" }) => {
    const [selectedType, setSelectedType] = useState("");
    const [description, setDescription] = useState("");


    return (
    <form 
      action="https://formsubmit.co/hola.checkmylift@gmail.com"
      method="POST"
    >

      {/* Campos ocultos para personalizar el email */}
      <input type="hidden" name="_subject" value="Nuevo reporte de avería" />
      <input type="hidden" name="ascensor" value={title} />
      <input type="hidden" name="_captcha" value="false" /> 
      {/* Opcional: desactiva captcha */}
      {/* <input type="hidden" name="_next" value="https://tudominio.com/gracias" /> */}
      
      <section className={styles.type}>
        <label htmlFor="type">Tipo de avería:</label>
        <select
          id="type"
          name="type" 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          required
        >
          <option value="">Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      <section className={styles.description}>
        <label htmlFor="description">¿Quieres añadir algo más?</label>
        <textarea
          id="description"
          name="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe aquí si quieres añadir algo"
        />
      </section>

      <Button variant="btn-princ-s" showIcon={false} type="submit" className={styles.submit}>
        Enviar
      </Button>
    </form>
  );
};

export default Form;
