// Định nghĩa kiểu dữ liệu cho Discount
interface Discount {
    code: string;
    value: number;
}

// Lớp User
class User {
    id: string;
    name: string;
    email: string;
    phone: string;
    purchasedCourses: string[];
    discounts: string[];

    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.purchasedCourses = [];
        this.discounts = [];
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }

    buyCourse(course: string): void {
        this.purchasedCourses.push(course);
    }
}

// Lớp trừu tượng Course
abstract class Course {
    courseId: string;
    courseName: string;
    price: number;
    duration: number;
    students: number;

    constructor(courseId: string, courseName: string, price: number, duration: number) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.price = price;
        this.duration = duration;
        this.students = 0;
    }

    displayCourse(): string {
        return `ID: ${this.courseId}, Name: ${this.courseName}, Price: ${this.price}, Duration: ${this.duration}h, Students: ${this.students}`;
    }

    getCourse(discount?: number): string {
        this.students++;
        const finalPrice = discount ? this.price - (this.price * discount / 100) : this.price;
        return `Course purchased for ${finalPrice}`;
    }

    abstract getCertificate(): string;
    abstract getRefundPolicy(): string;
}

// Lớp FreeCourse kế thừa Course
class FreeCourse extends Course {
    constructor(courseId: string, courseName: string, duration: number) {
        super(courseId, courseName, 0, duration);
    }

    getCertificate(): string {
        return "No certificate available for free courses";
    }

    getRefundPolicy(): string {
        return "No refund policy for free courses";
    }
}

// Lớp PaidCourse kế thừa Course
class PaidCourse extends Course {
    constructor(courseId: string, courseName: string, price: number, duration: number) {
        super(courseId, courseName, price, duration);
    }

    getCertificate(): string {
        return `Certificate for ${this.courseName}`;
    }

    getRefundPolicy(): string {
        return "Refund available if studied less than 2 hours";
    }
}

// Lớp CourseManager
class CourseManager {
    courses: Course[];
    users: User[];
    discounts: Discount[];

    constructor() {
        this.courses = [];
        this.users = [];
        this.discounts = [];
    }

    addCourse(type: "free" | "paid", courseName: string, coursePrice: number, courseDuration: number): void {
        const courseId = `COURSE_${this.courses.length + 1}`;
        if (type === "free") {
            this.courses.push(new FreeCourse(courseId, courseName, courseDuration));
        } else {
            this.courses.push(new PaidCourse(courseId, courseName, coursePrice, courseDuration));
        }
    }

    createUser(name: string, email: string, phone: string): void {
        const userId = `USER_${this.users.length + 1}`;
        this.users.push(new User(userId, name, email, phone));
    }

    createNewDiscount(discountCode: string, discountValue: number): void {
        this.discounts.push({ code: discountCode, value: discountValue });
    }

    handleBuyCourse(userId: string, courseId: string): string {
        const user = this.users.find(u => u.id === userId);
        const course = this.courses.find(c => c.courseId === courseId);
        
        if (!user || !course) {
            return "User or course not found";
        }

        // Tìm mã giảm giá tốt nhất
        let bestDiscount = 0;
        if (user.discounts.length > 0) {
            const userDiscounts = user.discounts.map(code => 
                this.discounts.find(d => d.code === code)
            ).filter(d => d !== undefined);
            
            if (userDiscounts.length > 0) {
                bestDiscount = Math.max(...userDiscounts.map(d => d!.value));
            }
        }

        const result = course.getCourse(bestDiscount);
        user.buyCourse(courseId);
        return result;
    }

    handleRefundCourse(userId: string, courseId: string): string {
        const user = this.users.find(u => u.id === userId);
        const course = this.courses.find(c => c.courseId === courseId);
        
        if (!user || !course) {
            return "User or course not found";
        }

        const index = user.purchasedCourses.indexOf(courseId);
        if (index === -1) {
            return "Course not purchased by user";
        }

        if (course instanceof PaidCourse) {
            user.purchasedCourses.splice(index, 1);
            course.students--;
            return "Refund successful";
        }
        
        return "Refund not available for this course";
    }

    listCourses(numOfStudents?: number): void {
        let filteredCourses = this.courses;
        if (numOfStudents !== undefined) {
            filteredCourses = this.courses.filter(course => course.students >= numOfStudents);
        }
        
        const courseList = filteredCourses.map(course => course.displayCourse());
        console.log("Courses:");
        courseList.forEach(course => console.log(course));
    }

    showUserInformation(email: string): void {
        const user = this.users.find(u => u.email === email);
        if (user) {
            console.log(user.getDetails());
            console.log("Purchased Courses:", user.purchasedCourses);
            console.log("Discounts:", user.discounts);
        } else {
            console.log("User not found");
        }
    }

    calculateTotalRevenue(): number {
        return this.courses.reduce((total, course) => {
            return total + (course.price * course.students);
        }, 0);
    }

    giftDiscount(userId: string, discountCode: string): void {
        const user = this.users.find(u => u.id === userId);
        const discount = this.discounts.find(d => d.code === discountCode);
        
        if (user && discount) {
            user.discounts.push(discountCode);
            console.log("Discount gifted successfully");
        } else {
            console.log("User or discount not found");
        }
    }

    getCertificate(userId: string): void {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            const certificates = user.purchasedCourses.map(courseId => {
                const course = this.courses.find(c => c.courseId === courseId);
                return course ? course.getCertificate() : "Certificate not found";
            });
            console.log("Certificates:", certificates);
        } else {
            console.log("User not found");
        }
    }

    getRefundPolicy(courseId: string): void {
        const course = this.courses.find(c => c.courseId === courseId);
        if (course) {
            console.log("Refund Policy:", course.getRefundPolicy());
        } else {
            console.log("Course not found");
        }
    }
}

// Hàm main để chạy chương trình
function main(): void {
    const courseManager = new CourseManager();
    
    while (true) {
        console.log("\n=== COURSE MANAGEMENT SYSTEM ===");
        console.log("1. Thêm người dùng");
        console.log("2. Thêm khóa học");
        console.log("3. Thêm mã giảm giá");
        console.log("4. Mua khóa học");
        console.log("5. Hoàn tiền khóa học");
        console.log("6. Hiển thị danh sách khóa học");
        console.log("7. Hiển thị thông tin người dùng");
        console.log("8. Tính tổng doanh thu");
        console.log("9. Tặng mã giảm giá");
        console.log("10. Hiển thị chứng chỉ người dùng");
        console.log("11. Hiển thị chính sách hoàn tiền");
        console.log("12. Thoát");
        
        const choice = prompt("Chọn chức năng (1-12):");
        
        switch (choice) {
            case "1":
                const name = prompt("Nhập tên người dùng:") || "";
                const email = prompt("Nhập email:") || "";
                const phone = prompt("Nhập số điện thoại:") || "";
                courseManager.createUser(name, email, phone);
                console.log("Thêm người dùng thành công");
                break;
                
            case "2":
                const courseType = prompt("Loại khóa học (free/paid):") || "";
                const courseName = prompt("Tên khóa học:") || "";
                const price = parseInt(prompt("Giá khóa học:") || "0");
                const duration = parseFloat(prompt("Thời gian khóa học (giờ):") || "0");
                courseManager.addCourse(courseType as "free" | "paid", courseName, price, duration);
                console.log("Thêm khóa học thành công");
                break;
                
            case "3":
                const discountCode = prompt("Mã giảm giá:") || "";
                const discountValue = parseInt(prompt("Giá trị giảm giá (%):") || "0");
                courseManager.createNewDiscount(discountCode, discountValue);
                console.log("Thêm mã giảm giá thành công");
                break;
                
            case "4":
                const buyUserId = prompt("ID người dùng:") || "";
                const buyCourseId = prompt("ID khóa học:") || "";
                const buyResult = courseManager.handleBuyCourse(buyUserId, buyCourseId);
                console.log(buyResult);
                break;
                
            case "5":
                const refundUserId = prompt("ID người dùng:") || "";
                const refundCourseId = prompt("ID khóa học:") || "";
                const refundResult = courseManager.handleRefundCourse(refundUserId, refundCourseId);
                console.log(refundResult);
                break;
                
            case "6":
                const minStudents = prompt("Lọc theo số học viên tối thiểu (để trống nếu không lọc):");
                courseManager.listCourses(minStudents ? parseInt(minStudents) : undefined);
                break;
                
            case "7":
                const userEmail = prompt("Email người dùng:") || "";
                courseManager.showUserInformation(userEmail);
                break;
                
            case "8":
                const revenue = courseManager.calculateTotalRevenue();
                console.log(`Tổng doanh thu: ${revenue}`);
                break;
                
            case "9":
                const giftUserId = prompt("ID người dùng:") || "";
                const giftCode = prompt("Mã giảm giá:") || "";
                courseManager.giftDiscount(giftUserId, giftCode);
                break;
                
            case "10":
                const certUserId = prompt("ID người dùng:") || "";
                courseManager.getCertificate(certUserId);
                break;
                
            case "11":
                const policyCourseId = prompt("ID khóa học:") || "";
                courseManager.getRefundPolicy(policyCourseId);
                break;
                
            case "12":
                console.log("Thoát chương trình");
                return;
                
            default:
                console.log("Lựa chọn không hợp lệ");
        }
    }
}

main();