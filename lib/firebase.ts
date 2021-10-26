import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { Feedback, Playlist, Song, User } from "../components/common";

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
export function commentsToJSON(doc: any): Feedback {
  const data = doc.data();
  // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
  return {
    ...data,
    fid: doc.id,
    commentedOn: data.commentedOn.toMillis(),
  };
}

export async function getUser(uid: string) {
  return await firestore.collection("users").doc(uid).get();
}

export async function getUserWithUsername(username: string) {
  const userRef = firestore.collection("users");
  const query = userRef.where("username", "==", username).limit(1);
  return (await query.get())?.docs[0];
}

export function playlistToJSON(doc: any): Playlist {
  const data = doc.data();
  // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export async function getPlayList(username: string, pid: string) {
  const userDoc = await getUserWithUsername(username);
  if (!userDoc.exists) {
    return {
      notFound: true,
    };
  }
  const user = userDoc.data() as User;
  const doc = await firestore
    .collection("users")
    .doc(user.uid)
    .collection("playlists")
    .doc(pid)
    .get();
  if (!doc.exists) {
    return {
      notFound: true,
    };
  }
  const playlist: Playlist = doc.data() as Playlist;
  const songs = (
    await Promise.all(
      playlist.list.map((l) => firestore.collection("songs").doc(`${l}`).get())
    )
  ).map((doc) => ({ ...doc.data(), id: doc.id } as Song));
  return {
    props: {
      playlist: playlistToJSON(doc),
      songs,
      user,
    },
  };
}
