import { useEffect, useState } from "react";
import FilteredCategories from "./FilteredCategories";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://library-management-system-server-seven.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-5 text-2xl font-bold">Categories</h1>
            <h2 className="text-center text-3xl"> . . . . . . . . </h2>
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