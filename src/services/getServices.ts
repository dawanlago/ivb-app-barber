import firebase from './firebase';

export const getServices = async () => {
  let data = {};
  await firebase
    .database()
    .ref('barber-shop')
    .child('000001')
    .once('value', snapshot => {
      snapshot.forEach(childItem => {
        data = childItem.val();
      });
    });

  return data;
};
