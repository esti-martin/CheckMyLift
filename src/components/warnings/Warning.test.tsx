import { render, screen } from "@testing-library/react";
import WarningMessage from "./Warning";
import '@testing-library/jest-dom';

describe("WarningMessage", () => {
  it("muestra el mensaje positivo cuando type es 'positive'", () => {
    render(<WarningMessage type="positive" />);
    expect(screen.getByText("Todo funciona correctamente.")).toBeInTheDocument();
  });

  it("muestra el mensaje negativo cuando type es 'negative'", () => {
    render(<WarningMessage type="negative" />);
    expect(screen.getByText("Existe una avería.")).toBeInTheDocument();
  });
});