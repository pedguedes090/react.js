class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    if (width > 0) {
      this.width = width;
    } else {
      console.error("Chiều rộng phải lớn hơn 0.");
    }
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    if (height > 0) {
      this.height = height;
    } else {
      console.error("Chiều dài phải lớn hơn 0.");
    }
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}