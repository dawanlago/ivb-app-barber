import firebase from './firebase';
import IClient from '../models/Client';

export const createClientService = async ({
  name,
  shortName,
  email,
  phone,
  uid,
}: IClient) => {
  const messageError = '';
  const client = await firebase
    .database()
    .ref('barber-shop/000001/clients/' + uid);

  client.set({
    name: name,
    shortName: shortName,
    email: email,
    phone: phone,
    uid: uid,
  });

  if (messageError.length > 0) {
    return {
      success: false,
      message: messageError,
    };
  }

  return {success: true};
};
