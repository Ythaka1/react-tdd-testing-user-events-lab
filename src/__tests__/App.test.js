import { render, screen } from "@testing-library/react"; // Ensure this is imported
import "@testing-library/jest-dom";
import App from "../App";

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  
  // Check for individual checkbox labels
  const codingCheckbox = screen.getByLabelText(/coding/i);
  const designCheckbox = screen.getByLabelText(/design/i);
  const marketingCheckbox = screen.getByLabelText(/marketing/i);

  expect(codingCheckbox).toBeInTheDocument();
  expect(designCheckbox).toBeInTheDocument();
  expect(marketingCheckbox).toBeInTheDocument();
});
