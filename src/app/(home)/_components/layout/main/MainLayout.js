import Header from "./Header";
import Footer from "./Footer";
function MainLayout({ children }) {
  return (
    <div className="overscroll-x-none relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
