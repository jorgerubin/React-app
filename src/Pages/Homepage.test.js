import { render, screen } from '@testing-library/react';
import Homepage from './Pages/Homepages';
import data from "./data.json";

test('Existe News', () => {
  render(<Homepage />);

  expect(screen.getByText("Nieuws en updates")).toBeInTheDocument();

});

/*
test('renderiza toda la informacion', () => {
  render(<App />);

  // Verificar que los componentes clave están presentes
  expect(screen.getByText(data.info.name)).toBeInTheDocument(); // Header
  expect(screen.getByText(data.experience[0].company)).toBeInTheDocument(); // ExperienceSection
  expect(screen.getByText(data.skills[0].name)).toBeInTheDocument(); // SkillsSection
  expect(screen.getByText(data.education[0].degree)).toBeInTheDocument(); // EducationSection
});
*/