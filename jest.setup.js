jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({user: {uid: '123'}}),
    ),
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({user: {uid: '123'}}),
    ),
  });
});
