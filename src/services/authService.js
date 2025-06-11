import auth from '@react-native-firebase/auth';

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return {success: true, user: response.user};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return {success: true, user: response.user};
  } catch (error) {
    return {success: false, error: error.message};
  }
};
