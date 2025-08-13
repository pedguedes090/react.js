class Account {
    public id: number;
    public userName: number;
    private password: string;
    public isLogin: boolean = false;
    public role: string;
    constructor(id: number, userName: number, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(password: string): boolean {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
            return true;
        }
        console.log("Đăng nhập thất bại");
        return false;
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status: string;
    constructor(id: number, userName: number, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(password: string): boolean {
        if (this.status === "active") {
            return super.login(password);
        } else {
            console.log("Tài khoản đã bị khóa");
            return false;
        }
    }

}
class adminAcc extends Account {
    constructor(id: number, userName: number, password: string, isLogin: boolean, role: string) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm`);
    }
}