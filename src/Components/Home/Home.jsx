import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import BookListLink from "../BookListLink/BookListLink";
import Category from "../Category/Category";
import FindFavouriteBook from "../FindFavouriteBook/FindFavouriteBook";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindFavouriteBook></FindFavouriteBook>
            <AfterBanner></AfterBanner>
            <Category></Category>
            <BookListLink></BookListLink>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;