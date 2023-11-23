import UserModel from '../model/UseModel'

export default class AppManager {
    static shared = new AppManager()

    currentUser: UserModel = null as any

    isHaveAccessToken = () => {
        return this.currentUser?.uid != null && this.currentUser?.uid != ''
    }
}
