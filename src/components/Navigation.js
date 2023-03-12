import React from "react";
// 페이지 로딩이 아니라 필요한 부분만 다시 그려주기 위해 react router dom의 Link 를 사용
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation(){
    return(
        <div className="nav">
            <Link to="/movie_app_step2">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;