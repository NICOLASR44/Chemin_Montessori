import { useParams } from "react-router-dom";
import BlogArticleList from "../components/blog-article-page/BlogArticleList";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
// import { BlogContextProvider } from "../context/BlogContext";
import "./styles/BlogArticle.css";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";

export default function BlogArticle() {
  const { id } = useParams();

  return (
    <>
      <div className="NavBar">
        {" "}
        <NavBar />{" "}
      </div>
      <ScrollToTopButton />
      {/* <BlogContextProvider id={id}> */}
      <BlogArticleList id={id} />
      {/* </BlogContextProvider> */}
      <Footer />
    </>
  );
}
