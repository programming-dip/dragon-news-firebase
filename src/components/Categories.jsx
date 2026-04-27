import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise);
    return (
        <div>
            <p className='font-semibold text-xl'>All Categories</p>
            <div className='grid grid-cols-1 mt-5 gap-3 mx-5'>
                {categories.map(category => (
                    <NavLink className="hover:bg-base-200 p-5 text-xl text-accent" to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;