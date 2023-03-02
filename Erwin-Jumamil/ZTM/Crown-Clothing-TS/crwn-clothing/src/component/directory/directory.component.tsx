import { CategoryPropsArr } from "../../model/category.model";
import { CategoryItem } from "../category-item/category-item.component";
import "./directory.style.scss";

export const Directory = ({ categories }: CategoryPropsArr) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
