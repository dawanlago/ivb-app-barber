import firebase from './firebase';

interface Service {
  name: string;
  price: number;
  time: number;
}

export const getServices = async (): Promise<Array<Service>> => {
  let data = [] as Service[];
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
