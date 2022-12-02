import {createClient} from './createClient';
import firebase from './firebase';

interface IUser {
  name: string;
  shortName: string;
  email: string;
  phone: string;
  password: string;
}

export const createUser = async ({
  name,
  shortName,
  email,
  phone,
  password,
}: IUser) => {
  let messageError = '';
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err: firebase.FirebaseError) => {
      if (err.code) {
        if (err.code === 'auth/weak-password') {
          messageError = 'A senha deve conter no mínimo 6 caracteres';
        } else if (err.code === 'auth/invalid-email') {
          messageError = 'O email informado é invalido';
        } else {
          messageError = 'O email informado ja está cadastrado';
        }
      }
    });

  if (messageError.length > 0) {
    return {
      success: false,
      message: messageError,
    };
  }
  const uid = user.user.uid;
  const client = await createClient({name, shortName, email, phone, uid});
  return {success: true, data: client};
};
