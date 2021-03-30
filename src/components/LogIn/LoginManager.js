
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const firebaseinitializeApp=()=>{
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    else{
        firebase.app();
    }
}



export const HandleSignInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
         return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user=result.user;
            const signdInUser={
                IsSignIn:true,
                error:'',
                success:true,
                name:user.displayName,
                photo:user.photoURL,
                email:user.email
            }
          return signdInUser;
          
          // ...
        }).catch((error) => {
          const errorMessage = error.message;
          const signdInUser={
            IsSignIn:false,
            error:errorMessage,
            success:false,
          }
          return signdInUser;
        });
      }

export const HandleSignInWithEmailandPassword=(email, password)=>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
        const NewUserInformation=res.user;
        NewUserInformation.name=res.user. displayName;
        NewUserInformation.IsSignIn=true;
        NewUserInformation.error='';
        NewUserInformation.success=true;
        return NewUserInformation;
      // ...
    })
    .catch((error) => {
        const NewUserInformation={};
      const errorMessage = error.message;
      NewUserInformation.success=false;
      NewUserInformation.error=errorMessage;
      return NewUserInformation;
    });
}