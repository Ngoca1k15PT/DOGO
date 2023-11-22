export default class UserModel {
    accessToken: String = ''
    uid: String = ''
    email: String = ''
    name: String = ''
    avatar: String = ''
    isActivity: Boolean = false

    constructor(dict: any) {
        if (dict == undefined || dict == null) {
            return
        }
        this.accessToken = dict.accessToken ?? null
        this.uid = dict?.uid ?? null
        this.email = dict?.email ?? null
        this.name = dict?.name ?? null
        this.avatar = dict?.avatar ?? null
        this.isActivity = dict?.isActivity ?? false
    }

    setUid(uid: string) {
        this.uid = uid
    }

    setEmail(email: string) {
        this.email = email
    }

    setAvatar(url: string) {
        this.avatar = url
    }

    setIsActivity(isActivity: Boolean) {
        this.isActivity = isActivity
    }

    setName(name: string) {
        this.name = name
    }

    toDictionary() {
        return {
            accessToken: this.accessToken,
            uid: this.uid,
            name: this.name,
            email: this.email,
            avatar: this.avatar,
            isActivity: this.isActivity
        }
    }

    resetUser() {
        this.accessToken = ''
        this.uid = ''
        this.name = ''
        this.email = ''
        this.avatar = ''
        this.isActivity = false
    }
}
