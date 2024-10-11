import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../services/useFetch/useFetch";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  
  const { data: body, isLoading, error } = useFetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${id}}`);

  console.log(body, isLoading,error);
  
  if (isLoading) return <h1>Cargando...</h1>;

   if (error) return <h1>Error: {error}</h1>;



  return (
     <div>
   <h3>{body.englishName}</h3>
    <h3>{body.mass?.massValue }</h3>
    <h3>{body.density }</h3>
    <h3>{body.gravity }</h3>
     </div>
  );
};

export default Details;
