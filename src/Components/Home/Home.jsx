import AboutUs from "../AboutUs/AboutUs";
import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import BookListLink from "../BookListLink/BookListLink";
import Category from "../Category/Category";
import FindFavouriteBook from "../FindFavouriteBook/FindFavouriteBook";
import Librarian from "../Librarian/Librarian";
import MarqueeSlider from "../MarqueeSlider/MarqueeSlider";
import RegisterLink from "../RegisterLink/RegisterLink";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindFavouriteBook></FindFavouriteBook>
            <AfterBanner></AfterBanner>
            <Category></Category>
            <BookListLink></BookListLink>
            <Librarian></Librarian>
            <RegisterLink></RegisterLink>
            <Testimonial></Testimonial>
            <MarqueeSlider></MarqueeSlider>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;