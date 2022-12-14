import {createClientService} from './createClientService';
import firebase from './firebase';
import IUser from '../models/User';

export const createUserService = async ({
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
        } else if (err.code === 'auth/email-already-in-use') {
          messageError = 'O email informado ja está cadastrado';
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
  const uid = user.user.uid;
  await createClientService({
    name,
    shortName,
    email,
    phone,
    uid,
  });
  return {success: true};
};
