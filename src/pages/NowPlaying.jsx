import React from 'react';
import axios from "axios";
import {  Layout , Col } from 'antd';
import MovieCard from '../components/MovieCard';
import Foot from '../components/Footer';

const { Content } = Layout;

const baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=ee0d2a6d55c88ac95b75ac1a2702e1be&language=en-US";

export default function NowPlaying() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseURL}`)
        .then((response) => { setMovies(response.data.results); console.log(response.data);})
        .catch(err => {console.log(err)})
    }, [])

  return (
   <Layout style={{backgroundColor: "#5a5a5a"}}>
    <Content style={{ padding: '0 0', marginTop: 64, display: "flex", }}>
        <Col xl={24} lg={24} md={24} xs={24} style={{display: "flex", flexWrap:"wrap",justifyContent: "space-evenly" , border: '1px solid black', padding:'10px 10px'}}>
        {movies.map(data => {
            return(
               <MovieCard res={data} isPlaying={true}/>
            )
        })}
        </Col>
    </Content>
    <Foot/>
  </Layout>
  );
}
