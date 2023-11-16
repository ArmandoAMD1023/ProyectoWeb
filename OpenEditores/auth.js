const auth =firebase.auth();
const provaider = new firebase.auth.GoogleAuthProvider();

auth.lenguageCode= "es";
    export async function login(){
        try{
            const response = await auth.signInWithPopup(provaider);
            console.log(response);
            return response.user;
        }catch(error){
            throw new Error(error);
        }
    }

    export function logout(){
        auth.signOut();
    }