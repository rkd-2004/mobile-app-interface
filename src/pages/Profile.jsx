import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  return (
    <div className="page profile-page">
      <Header title="Profile" />
      
      <main className="content">
        <div className="profile-section">
          <img 
            src="/assets/avatar-placeholder.png" 
            alt="Profile" 
            className="profile-avatar"
          />
          <h2>John Doe</h2>
          <p>john.doe@email.com</p>
        </div>
        
        <div className="profile-actions">
          <Button>Edit Profile</Button>
          <Button variant="secondary">Settings</Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;