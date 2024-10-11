import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../services/useFetch/useFetch";

const Home = () => {
  const { data: bodies, isLoading, error } = useFetch("https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false");
  const navigate = useNavigate();

  console.log(bodies);
  

  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const handleNavigate = (id) => {
    navigate(`/cuerpo/:${id}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Celestial Bodies</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {bodies.map((body) => (
          <div 
            key={body.id} 
            onClick={() => handleNavigate(body.id)} 
            style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}
          >
            <h3>{body.englishName}</h3>
            <h3>{body.mass?.massValue }</h3>
            <h3>{body.density }</h3>
            <h3>{body.gravity }</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
