const  Delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms, true));

export const LoginToServer = async (email, password) => {
  await Delay(1000);
  return { email, id: 1231, fullName: 'Thariq Agfi Hermawan'}
}
