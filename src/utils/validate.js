export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(name);

  if (name !== undefined && name.trim() === '') return 'Name cannot be empty.';

  if (name !== undefined && !isNameValid)
    return 'Full Name must contain only letters and spaces.';
  if (!isEmailValid) return 'Email ID is not valid.';
  if (!isPasswordValid)
    return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';

  return null;
};
