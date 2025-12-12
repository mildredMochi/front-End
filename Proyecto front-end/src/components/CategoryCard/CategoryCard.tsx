import React from 'react';
import './CategoryCard.css';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default CategoryCard;