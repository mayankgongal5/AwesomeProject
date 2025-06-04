import auth from '@react-native-firebase/auth';

export const signIn = async (email: string, password: string) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
