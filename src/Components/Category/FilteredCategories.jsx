import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const FilteredCategories = ({ data }) => {
    const { category, image } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Category" className="rounded-xl h-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-medium">Category : <span className="bg-gray-100 rounded-3xl px-[8px] py-[2px] text-blue-900">{category}</span></h2>
                    <div className="card-actions mt-3">
                        <Link to={`/totalAllBooks/${category}`}><button className="flex gap-2 items-center bg-slate-200 rounded-3xl px-3 py-2 text-blue-900 font-medium">Explore More <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
FilteredCategories.propTypes = {
    data: PropTypes.object
};
export default FilteredCategories;