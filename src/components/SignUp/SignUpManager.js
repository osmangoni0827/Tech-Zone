import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

export const CreateUserEmailAndPassword=(name,email,password)=>{

   return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((res) => {
                // Signed in
                const NewUser={};
                    NewUser.IsSignUp=true;
                    NewUser.error='';
                    NewUser.success=true;
                    updateUserName(name); 
                    return NewUser;
                   
            })
            .catch((error) => {
                const errorMessage = error.message;
                const Newuser={};
                Newuser.error=errorMessage;
                Newuser.success=false;
                return Newuser;
            });
}

const updateUserName=(name)=>{
    var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
        }).then(function(res) {
          // Update successful.
        }).catch(function(error) {
          
        });
  }