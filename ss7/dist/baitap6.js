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
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
            return true;
        }
        console.log("Đăng nhập thất bại");
        return false;
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "active") {
            return super.login(password);
        }
        else {
            console.log("Tài khoản đã bị khóa");
            return false;
        }
    }
}
class adminAcc extends Account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm`);
    }
}
