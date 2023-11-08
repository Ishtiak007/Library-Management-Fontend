import PropTypes from 'prop-types';
const BorrowedBookCard = ({ books, handleDelete }) => {
    const { _id, email, image, bookName, category, returnDate, borrowedDate } = books;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure><img src={image} className="h-[300px] w-[200px] lg:rounded-l-xl rounded-xl" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Book Name : {bookName}</h2>
                    <h2>User Email : {email}</h2>
                    <p>Category : {category}</p>
                    <p>Borrowed Date : {borrowedDate}</p>
                    <p>Return Date : {returnDate}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-success">Return Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
BorrowedBookCard.propTypes = {
    books: PropTypes.object,
    handleDelete: PropTypes.func
};
export default BorrowedBookCard;