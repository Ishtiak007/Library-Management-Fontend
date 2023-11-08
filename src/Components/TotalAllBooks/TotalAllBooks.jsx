import { useLoaderData, useParams } from "react-router-dom";
import BooksCard from "../AddBook/BooksCard";

const TotalAllBooks = () => {
    const totalAllBooks = useLoaderData();
    const { category } = useParams();
    const allBooks = totalAllBooks?.filter(item => item.category.toLowerCase() === category.toLowerCase());
    return (
        <div>
            <div className="flex justify-evenly flex-wrap">
                {
                    allBooks?.map(data => <BooksCard key={data._id} data={data}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default TotalAllBooks;