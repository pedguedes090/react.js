class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number,height: number) {
        this.width = width;
        this.height = height;
    }
    setWidth(newWidth: number){
        this.width = newWidth;
    }
    setHeight(newHeight: number){
        this.height = newHeight;
    }
    getWidth(): number{
        return this.width;
    }
    getHeight(): number{
        return this.height;
    }

    dtich(): number{
        return this.width*this.height
    }
    cvi(): number{
        return (2*(this.width+ this.height))
    }
}
const rectangle = new Rectangle(4,5)
console.log("CHu vi: ",rectangle.cvi());
console.log("Diện tích: ",rectangle.dtich());

