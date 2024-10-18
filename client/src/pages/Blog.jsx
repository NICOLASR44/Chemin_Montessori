import { BlogContextProvider } from "../context/BlogContext";
import BlogList from "../components/blog-page/BlogList";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import Title from "../components/shared/Title";
import GreenSpring from "../components/svg/GreenSpring";
import "./styles/Blog.css";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";

export default function Blog() {
  return (
    <>
      <div className="NavBar">
        {" "}
        <NavBar />{" "}
      </div>
      <ScrollToTopButton />
      <div className="blog-page__svg-title">
        <div className="blog-page__svg">
          <GreenSpring />
        </div>
        <div className="blog-page__title">
          <Title
            style={{ marginBottom: "4rem", fontSize: "3.5rem" }}
            boldText="Les dernières notes du"
            italicText="Blog"
          />
        </div>
      </div>
      <BlogContextProvider>
        <BlogList />
      </BlogContextProvider>
      <div className="blog-page__footer">
        <Footer />
      </div>
    </>
  );
}
