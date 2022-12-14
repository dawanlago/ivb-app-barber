import firebase from './firebase';

export const loginService = async (email: string, password: string) => {
  let messageError = '';
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err: firebase.FirebaseError) => {
      if (err.code) {
        if (err.code === 'auth/invalid-email') {
          messageError = 'O email está inválido';
        } else if (err.code === 'auth/user-not-found') {
          messageError = 'Email ou senha estão incorretos';
        } else if (err.code === 'auth/wrong-password') {
          messageError = 'Email ou senha estão incorretos';
        } else {
          messageError = 'Ops... houve um erro interno';
        }
      }
    });

  if (messageError.length > 0) {
    return {
      success: false,
      message: messageError,
    };
  }

  return {success: true, data: user};
};
