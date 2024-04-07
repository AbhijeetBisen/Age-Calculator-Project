const calculateAgeBtn = document.querySelector('#calculate-age');
const dobInput = document.querySelector('#dob');
const ageElm = document.querySelector('#age');

calculateAgeBtn.addEventListener('click', calculateAndDisplayAge);
dobInput.addEventListener('input', clearAge); // Clear age on input change

function calculateAndDisplayAge() {
  const dob = dobInput.value;
  if (!dob) return;

  const age = calculateAge(dob);
  ageElm.textContent = formatAge(age);
}

function clearAge() {
  ageElm.textContent = '';
}

function calculateAge(dateString) {
  const now = new Date();
  const dob = new Date(dateString);

  const ageInMilliseconds = now.getTime() - dob.getTime();
  const ageInYears = Math.floor(ageInMilliseconds / (31557600000)); // Number of milliseconds in a year

  const months = Math.floor(
    (ageInMilliseconds % 31557600000) / (31557600000 / 12)
  );

  const days = Math.floor(
    (ageInMilliseconds % 31557600000) / (31557600000 / 365) % 30
  );

  return { years: ageInYears, months: months, days: days };
}

function formatAge(age) {
  const yearsString = age.years === 1 ? ' year' : ' years';
  const monthsString = age.months === 1 ? ' month' : ' months';
  const daysString = age.days === 1 ? ' day' : ' days';

  const ageParts = [];
  if (age.years > 0) ageParts.push(`${age.years}${yearsString}`);
  if (age.months > 0) ageParts.push(`${age.months}${monthsString}`);
  if (age.days > 0) ageParts.push(`${age.days}${daysString}`);

  return ageParts.join(', ');
}
