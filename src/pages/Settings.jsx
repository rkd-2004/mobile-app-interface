import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Settings = () => {
  return (
    <div className="page settings-page">
      <Header title="Settings" />
      
      <main className="content">
        <div className="settings-list">
          <div className="setting-item">
            <h3>Notifications</h3>
            <input type="checkbox" />
          </div>
          <div className="setting-item">
            <h3>Dark Mode</h3>
            <input type="checkbox" />
          </div>
          {/* More settings items */}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Settings;