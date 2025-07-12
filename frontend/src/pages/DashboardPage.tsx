import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import Header from '../components/Dashboard/Header/Header';
import MainContent from '../components/Dashboard/MainContent/MainContent';

type DashboardPageProps = {
  setIsLoggedIn: (value: boolean) => void;
};

function DashboardPage({ setIsLoggedIn }: DashboardPageProps) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] font-orbitron w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl border-2 border-cyan-400">
        <Header setIsLoggedIn={setIsLoggedIn} />
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardPage;