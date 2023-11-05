import { useEffect, useState } from "react";
import FilteredCategories from "./FilteredCategories";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h1 className="text-center my-5 text-2xl font-bold">Categories {category.length}</h1>
            <div className="lg:flex justify-center">
                <div className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-5">
                    {
                        category.map(data => <FilteredCategories key={data._id} data={data}></FilteredCategories>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Category;