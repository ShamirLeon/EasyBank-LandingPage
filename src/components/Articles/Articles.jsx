import ArticlesItem from "./ArticlesItem";
import Data from "../../data/data.json";

import ImgCurrency from "../../assets/images/image-currency.jpg";
import ImgConfetti from "../../assets/images/image-confetti.jpg";
import ImgPlane from "../../assets/images/image-plane.jpg";
import ImgRestaurant from "../../assets/images/image-restaurant.jpg";

const Images = [ImgCurrency, ImgRestaurant, ImgPlane, ImgConfetti];

const Articles = () => {
  return (
    <article className="py-8 px-6 lg:grid lg:grid-cols-4  lg:px-24 lg:gap-5">
      <h2 className="lg:text-4xl px-7 lg:px-0 text-2xl text-DarkBlue mb-5 text-center col-start-1 col-end-5 lg:text-left">Latest Articles</h2>
      {Data.articles.map((Article, index) => (
        <div className=" mb-12">
          <img src={Images[index]} alt="Images" className="mb-6 rounded-t-lg" />
          <ArticlesItem
            by={Article.by}
            title={Article.title}
            description={Article.description}
            />
        </div>
      ))}
    </article>
  );
};

export default Articles;
