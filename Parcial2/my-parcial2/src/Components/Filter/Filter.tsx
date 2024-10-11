
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>Filter Page</h1>

      <button onClick={handleNavigation}>Go to Home</button>
    </div>
  );
};

export default Home;