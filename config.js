
// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

//pro.smartapps.goitapp
const firebaseConfig = {
  apiKey: 'AIzaSyD7GAucgM-gdgrQjwdVQV8iwARQIQysPkw',
  authDomain: 'mygoitapp.firebaseapp.com',
  projectId: 'mygoitapp',
  storageBucket: 'gs://mygoitapp.firebasestorage.app',
  appId: '1:984332421140:android:62b1c6b593cb97c9057f01',
};

const app = initializeApp(firebaseConfig);

// Ініціалізація Auth з AsyncStorage для роботи редакс персистора
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
