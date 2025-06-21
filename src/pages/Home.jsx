import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import Chat from "../components/Chat";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <Chat />
      <Footer />
    </div>
  );
}

export default Home;
