import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Special from "./components/Special";
import Consoles from "./components/Consoles";
import Browse from "./components/Browse";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#004156] to-[#022748]">
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center xl:-ml-[240px]">
        <div className="">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="">
          {/* Categories */}
          <Categories />
          {/* Featured */}
          <Featured />
          {/* Special Offers */}
          <Special />
          {/* Consoles */}
          <Consoles />
          {/* Browse */}
          <Browse />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
