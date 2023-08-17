import { useStorage } from '@vueuse/core'
import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { UserLogin } from '~/model/UserLogin';
import { getFirstWordFromEmail } from '~/utils/fucntion';

export const isLogin = useStorage('isLogin', false)
export const userLogin = useStorage('userLogin', {} as UserLogin)


export const storeDataUser = async (user: User) => {
    const docRef = doc(firestoreDb, "user_account", String(user.uid));
    const data = await getDoc(docRef);
    
    if (data.exists()) {
      isLogin.value = true
      const refs = doc(firestoreDb, "user_account", String(data.id));
      getDoc(refs).then((a) => {
        userLogin.value = a.data() as UserLogin;
      });
     
      useUserLogin().value = userLogin.value
      return;
    }

    let newUser:UserLogin = {
      email: user.email,
      uid: user.uid,
      name: getFirstWordFromEmail(user.email!),
    }
  
    setDoc(
      docRef,
      newUser
      ,
      { merge: true }
    );
    isLogin.value = true
    userLogin.value = newUser


  };