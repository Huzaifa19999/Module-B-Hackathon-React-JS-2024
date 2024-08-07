import { getDatabase, onValue, push, ref, set, remove, update } from "firebase/database";
import app from "./firebaseConfig";
import { signOut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, updatePassword } from "firebase/auth";



const db = getDatabase(app);
const auth = getAuth(app)

export const sendData = (nodeName:string,data:any) => {

    return new Promise((resolve, reject) => {

        data.id = push(ref(db,`${nodeName}`)).key
        const reference = ref(db,`${nodeName}/${data.id}`);
        set(reference,data)
        .then(()=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        });     
    });
}




export const getData = (nodeName:any, id?:any) => {

    return new Promise((resolve,reject) => {
        
        const reference = ref(db, `${nodeName}/${id ? id : "" }`);
    
        onValue(reference,(dt) => {
            // console.log(Object.values(dt.val()))
            if (dt.exists()) {
                resolve(dt.val());
                // resolve(dt.val());
            } else {
                reject({message:"Data not found"})
            } 
        });
    });
};

export const deleteData = (nodeName:string,id:string) => {

    return new Promise<void>((resolve, reject) => {
            
        const reference = ref(db, `${nodeName}/${id ? id : ""}`);
        remove(reference)
        .then(()=>{
           resolve()
        }).catch((err)=>{
            reject(err)
        })
    })
}


export const editData = (nodeName:string,id:string,updatedData:any) => {
    return new Promise<void>((resolve, reject) => {        
        const reference = ref(db, `${nodeName}/${id}`);
        update(reference,updatedData)
        .then(()=>{
            resolve(updatedData)
        }).catch((err)=>{
            reject(err)
        });
    });
}


export const logInUser = (email:string,password:string) =>{
    return new Promise((resolve, reject) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // const user = userCredential.user;
            resolve("success")
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            reject(errorMessage)
        });
        })

}


export const signUpUser = (name:string,email:string,password:string) => {


    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        console.log(res,"Sign Up Successfully")
        sendData(`users/${res.user.uid}`,{name:name,email:email})
    }).catch((err)=>{
        console.log(err,'Error cannot Signup')
    })

}


export const alreadySignInUser = () => {
    return new Promise((resolve, reject) => {
        
        onAuthStateChanged(auth,(user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid)
            } else {
                reject(0)
            }
        })
    })
}


export const signOutUser = () => {
    return new Promise((resolve, reject) => {
        
        signOut(auth)
        .then(()=>{resolve("Sign Out Successfully")
        })
        .catch((err)=>{
            reject(err)
        })
        
    })
}


export const  editPassword = (newPassword:string) => {

    const user:any = auth.currentUser;

    updatePassword(user,newPassword).then( () => {
        alert("User Password Changed")
    }).catch((err)=>{
        alert("Password not Changed")
        console.log(err)
    });
}