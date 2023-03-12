import React from "react";
import { useLocation } from 'react-router-dom';
// v6 버전부터는 history 가 아니라 navigate 를 써야 한다 
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);

    useEffect(() => {
        if(location.state==null)
        navigate('/');
    });

    
    return (
      <div>{location.pathname}  영화제목:  {location.state}</div>
    )
  }

export default Detail;