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
    login(): void {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status: string = "active";
    constructor(id: number, userName: number, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            super.login();
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }

}