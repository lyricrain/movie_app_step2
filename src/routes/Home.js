import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  // async await : ES7  비동기 함수임을 알림 , await 시간이 걸리는 작업이므로 
  //               수행완료시까지 기다려라! 이렇게 쓰면 기존의 ajax 의 callback 함수 // //스타일로 개발하지 않아도 됨 
  // async 비동기란 의미, 자바스크립트에게 getMovies 함수는 시간이 필요하고 
  getMovies = async () => {
    // await 란   get 의 실행을 기다려 달라  
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // ES6 구조분해할당 이용해 편리하게 객체 접근하기 
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    // console.log(movies.data.data.movies);
    // console.log(movies);
    // 첫번째 키는 state 이고 두번째는 구조분해할당으로 받은 영화 데이터 
    // 두 요소가 이름이 같을 경우 movies 하나로 표현 가능 
    this.setState({ movies, isLoading: false });
  };

  render() {
    // 구조분해할당으로 this.state에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됨
    // 추가해서 state로부터 movies 를 받아온다 그래야 아래에서 45라인에서 사용가능 
    const { isLoading, movies } = this.state;
    return (<section className="container">
      {isLoading
        ? (
          <div className="loader">
            <span className="movies">'로딩중..'</span>
          </div>

        ) : (
          <div className="movies">
            {movies.map((movie) => {
              // console.log(movie);
              return (<Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}                
              />
              );
            }//화살표함수
            )//map 끝
            }
          </div>
        ) // 로딩마무리될때 실행 구문 
      }
    </section>
    );//render 함수 return 구문
  }

  // 컴포넌트가 화면에 제공된 직후 실행되는 라이프사이클메서드 
  componentDidMount() {
    //영화 데이터 로딩한다고 가정 
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },6000);
    //axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.getMovies();
  }
}
export default Home;
