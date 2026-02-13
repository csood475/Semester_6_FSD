import Navbar from "../components/Navbar";

const MainLayout = ({ children, setPage }) => {
  return (
    <div className="main-container">
      <Navbar setPage={setPage} />
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        © Experiment 1 | Made By Charu "23BAI70044"
      </footer>
    </div>
  );
};

export default MainLayout;