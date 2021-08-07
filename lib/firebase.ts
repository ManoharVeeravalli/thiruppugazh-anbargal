import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZj1DcjriYkzGsu6su5mgVdzFD0yC4-r8",
  authDomain: "thiruppugazhanbargal-515e8.firebaseapp.com",
  databaseURL: "https://thiruppugazhanbargal-515e8.firebaseio.com",
  projectId: "thiruppugazhanbargal-515e8",
  storageBucket: "thiruppugazhanbargal-515e8.appspot.com",
  messagingSenderId: "480701966077",
  appId: "1:480701966077:web:35118115fd6e0237",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function commentsToJSON(doc: any) {
  const data = doc.data();
  // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
  return {
    ...data,
    commentedOn: data.commentedOn.toMillis(),
  };
}
