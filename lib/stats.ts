// Function to increase number by 1 if a year has passed
function increaseNumberByYear(startYear: number) {
  const currentYear = new Date().getFullYear();
  const yearsPassed = currentYear - startYear;

  return yearsPassed;
}

const experience = increaseNumberByYear(2014); 

export const stats = [
    { number: `${experience}+`, label: 'Years Experience' },
    { number: '10+', label: 'Happy Clients' },
    { number: '50K+', label: 'Deliveries Completed' },
    { number: '50+', label: 'Contries Served' },
  ];