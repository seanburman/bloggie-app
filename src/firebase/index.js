import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const APIKEY = process.env.REACT_APP_APIKEY
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN
const PROJECTID = process.env.REACT_APP_PROJECTID
const STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET
const MESSAGINGSENDERID = process.env.REACT_APP_MESSAGINGSENDERID
const APPID = process.env.REACT_APP_APPID
const MEASUREMENTID = process.env.REACT_APP_MEASUREMENTID


const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default}