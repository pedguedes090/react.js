"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin = false;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status = "active";
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
