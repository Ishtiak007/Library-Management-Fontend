import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import BorrowedBookCard from "./BorrowedBookCard";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";

const BorrowedBook = () => {
    const [borrowedBook, setBorrowedBook] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookBorrower?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBorrowedBook(data)
            })
    }, [url]);



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to return your borrowed book?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return It'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookBorrower/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Returned',
                                'We received your borrowed book',
                                'success'
                            )
                            const remaining = borrowedBook.filter(borrowedBooking => borrowedBooking._id !== id)
                            setBorrowedBook(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div style={{ '--image-url': 'url(https://i.ibb.co/Gcvr90K/matthew-feeney-Nwkh-n6l25w-unsplash.jpg)' }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover rounded-lg'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-semibold font-serif">You Borrowed <span className="text-orange-400">{borrowedBook.length} </span>Books</h1>
                    </div>
                </div>
            </div>
            <div>
                <Marquee>
                    <h1 className="text-xl py-4 text-orange-400">Punctual Returns: When readers adhere to due dates, it promotes library efficiency, ensures access for others, and fosters responsible borrowing.</h1>
                </Marquee>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-center my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800">You have borrowed this kinds of Books</h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    borrowedBook?.map(books => <BorrowedBookCard key={books._id} books={books} handleDelete={handleDelete}></BorrowedBookCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBook;