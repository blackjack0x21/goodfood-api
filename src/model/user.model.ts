type User = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  verificationCode: string | null;
  passwordResetCode: string | null;
  verified: boolean;
}

export { User };