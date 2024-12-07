import Header from "./Header";
import Footer from "./Footer";
function MainLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
