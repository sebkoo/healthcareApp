import {loginUser, registerUser} from '../src/services/authService';
import auth from '@react-native-firebase/auth';

// Mock Firebase auth
jest.mock('@react-native-firebase/auth', () => {
  const authInstance = {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
  };
  return () => authInstance;
});

describe('authService', () => {
  beforeEach(() => {
    // Reset mocks before each test
    auth().signInWithEmailAndPassword.mockReset();
  });

  it('logs in a user successfully', async () => {
    auth().signInWithEmailAndPassword.mockResolvedValue({user: {uid: '123'}});
    const result = await loginUser('test@example.com', 'password123');
    expect(result.success).toBe(true);
    expect(result.user.uid).toBe('123');
  });

  it('handles login errors', async () => {
    auth().signInWithEmailAndPassword.mockRejectedValue(
      new Error('Invalid credentials'),
    );
    const result = await loginUser('test@example.com', 'wrong');
    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid credentials');
  });
});
