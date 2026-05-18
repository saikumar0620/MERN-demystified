import { Account,ID } from "appwrite";
import appwriteClient from ".";


class AppwriteAccount {
  constructor() {
    this.appWriteaccount = new Account(appwriteClient);
  }
  async createNewUser(data){
    const newUser= await this.appWriteaccount.create({
      userId:ID.unique(),
      ...data
    });
    return newUser;
  }

  async logInWithEmailAndPassword(data){
    const loggedInUserSession= await this.appWriteaccount.createEmailPasswordSession({

      ...data
    });
    return loggedInUserSession;
  }

  async getCurrentUser() {
      const currentUser = await this.appWriteaccount.get();

      return currentUser;
   
  }

  async logOutCurrentUser() {
    const logOutSession= await this.appWriteaccount.deleteSession({

      sessionId:"current"
    } );
    return logOutSession;
  }
}

export default AppwriteAccount;
