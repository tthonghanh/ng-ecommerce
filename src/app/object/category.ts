export class Category {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;
  userId: number;

  constructor() {
    this.categoryId = 0;
    this.categoryName = '';
    this.parentCategoryId = 0;
    this.userId = 0;
  }
}
