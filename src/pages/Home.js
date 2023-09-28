import { useEffect, useState } from 'react';
import getDayFilms from '../service/api-request-film';

const Home = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    //axios get request
    // getDayFilms();
    const res = getDayFilms()
    setData(res)
  }, []);

  console.log(data);

  return (
    <>
      <h1>Trending today</h1>
      <div>Homeeeee</div>
      <ul>
      {/*{data && data.results.map((results) => (*/}
      {/*  <li >*/}
      {/*    {results.title}*/}
      {/*  </li>*/}

      {/*))}*/}
      </ul>
    </>
  );
};

export default Home;
