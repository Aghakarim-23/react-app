import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import LatestNews from "./pages/asideLinks/LatestNews";
import FeaturedStories from "./pages/asideLinks/FeaturedStories";
import UpcomingEvents from "./pages/asideLinks/UpcomingEvents";
import RecentComments from "./pages/asideLinks/RecentComments";
import TrendingTopics from "./pages/asideLinks/TrendingTopics";
import RecommendedReads from "./pages/asideLinks/RecommendedReads";
import NewsletterSignup from "./pages/asideLinks/NewsletterSignup";
import SocialMediaLinks from "./pages/asideLinks/SocialMediaLinks";
import AboutUs from "./pages/asideLinks/AboutUs";
import Nav from "./components/Nav.jsx"

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <div className="flex pt-16">
        <Nav/>
      

        <div>
          <main className="w-[70vw] h-screen px-3 bg-green-500  ">
            <Routes> 
              <Route path="/" element={<Navigate to="/first" />} />
              <Route path="/first" element={<First />} />
              <Route path="/second" element={<Second />} />
              <Route path="/third" element={<Third />} />

              {/* Aside roots */}
              <Route path="/latestNews" element={<LatestNews/>} />
              <Route path="/featuredStories" element={<FeaturedStories/>} />
              <Route path="/upcomingEvents" element={<UpcomingEvents/>} />
              <Route path="/recentComments" element={<RecentComments/>} />
              <Route path="/trendingTopics" element={<TrendingTopics/>} />
              <Route path="/recommendedReads" element={<RecommendedReads/>} />
              <Route path="/featuredStories" element={<FeaturedStories/>} />
              <Route path="/newsletterSignup" element={<NewsletterSignup/>} />
              <Route path="/socialMediaLinks" element={<SocialMediaLinks/>} />
              <Route path="/aboutUs" element={<AboutUs/>} />
            </Routes>
          </main>
        </div>

        <aside className="w-full">
          <ul className="flex flex-col  font-semibold ">
            <Link to="/latestNews" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Latest News</Link>
            <Link to="/featuredStories" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Popular Articles</Link>
            <Link to="/upcomingEvents" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Upcoming Events</Link>
            <Link to="/recentComments" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Recent Comments</Link>
            <Link to="/trendingTopics" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Trending Topics</Link>
            <Link to="/recommendedReads" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Recommended Reads</Link>
            <Link to="/featuredStories" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Featured Stories</Link>
            <Link to="/newsletterSignup" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Newsletter Signup</Link>
            <Link to="/socialMediaLinks" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">Social Media Links</Link>
            <Link to="/aboutUs" className="border-b-2 hover:bg-zinc-400 p-3  text-center hover:cursor-pointer">About Us</Link>
          </ul>
        </aside>

      </div>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
