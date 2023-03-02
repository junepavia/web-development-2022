export default interface Category {
  id: number;
  title: string;
  imageUrl: string;
}
export interface CategoryProps {
  category: Category;
}
export interface CategoryPropsArr {
  categories2: Category[];
}
