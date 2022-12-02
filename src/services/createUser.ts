import firebase from './firebase';

interface IUser {
  email: string;
  password: string;
}

export const createUser = async ({email, password}: IUser) => {
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

  return {success: true, data: user};

  // console.log(email, password);
  // await firebase
  //   .database()
  //   .ref('barber-shop')
  //   .child('000001')
  //   .once('value', snapshot => {
  //     snapshot.forEach(childItem => {
  //       data = childItem.val();
  //     });
  //   });
  console.log(user);
  return {success: true};
};
