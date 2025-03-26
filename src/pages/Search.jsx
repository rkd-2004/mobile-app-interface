import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Search = () => {
  return (
    <div className="page search-page">
      <Header title="Search" />
      
      <main className="content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
        
        {/* Search results would go here */}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Search;