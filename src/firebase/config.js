import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_znFaqU1C7GcS3tb5pgUvCbCLoywK60E",
  authDomain: "twitter-copy-that-i-m-making.firebaseapp.com",
  projectId: "twitter-copy-that-i-m-making",
  storageBucket: "twitter-copy-that-i-m-making.appspot.com",
  messagingSenderId: "390068336947",
  appId: "1:390068336947:web:7ff8b31a91240c676a6646",
  measurementId: "G-EXDNLCY0MY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}