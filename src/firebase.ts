import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLs-77dIS-4yh6NiHqAzyrt8_AcWPiH80",
  authDomain: "finish-project-5c60b.firebaseapp.com",
  projectId: "finish-project-5c60b",
  storageBucket: "finish-project-5c60b.appspot.com",
  messagingSenderId: "183959520745",
  appId: "1:183959520745:web:d30fb135d0a77b50f57778",
  measurementId: "G-VG8R31YD1R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }

