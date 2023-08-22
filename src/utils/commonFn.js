export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatNumberWithSuffix = (number) => {
  const THOUSANDS = 1000;
  const MILLIONS = 1000000;

  if (number > MILLIONS) {
    return Math.round(number / MILLIONS) + "M";
  } else if (number > THOUSANDS) {
    return Math.round(number / THOUSANDS) + "k";
  } else {
    return number.toString();
  }
};

export const Statistic = ({ label, value }) => {
  return (
    <span className="text-gray-600">
      <b>{label}</b>: {formatNumberWithSuffix(value)}
    </span>
  );
};

// Get Random 3 digit number

export function generateRandomThreeDigitNumber() {
  return Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999
}
