import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FindFavouriteBook from "../FindFavouriteBook/FindFavouriteBook";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindFavouriteBook></FindFavouriteBook>
            <AfterBanner></AfterBanner>
            <Category></Category>
        </div>
    );
};

export default Home;