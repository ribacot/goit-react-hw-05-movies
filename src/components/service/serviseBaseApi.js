import axios from 'axios';

export  const movieApi = axios.create({
 baseURL:'https://api.themoviedb.org/3/',
  headers: {
  'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY0NTBkYTE3OWZlNDIxY2Y5NzQyYWU2OWEzM2RlNCIsInN1YiI6IjY0ZGI1NWJmMDAxYmJkMDBlMzVkMzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMhBhXm6B0N1kwqvUOCBJyHASuDqGrhcINSUolbmq0w',
  // 'accept': 'application/json'
},
})
// export default async function movieApi() {
//   const resp = await axios(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=ac6450da179fe421cf9742ae69a33de4&page=2&per_page=10`
//   );
//   console.log(resp);
//   // api_key=ac6450da179fe421cf9742ae69a33de4
// }

// curl --request GET \
//      --url https://api.themoviedb.org/3/authentication \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY0NTBkYTE3OWZlNDIxY2Y5NzQyYWU2OWEzM2RlNCIsInN1YiI6IjY0ZGI1NWJmMDAxYmJkMDBlMzVkMzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMhBhXm6B0N1kwqvUOCBJyHASuDqGrhcINSUolbmq0w' \
//      --header 'accept: application/json'

//      curl --request GET \
//      --url 'https://api.themoviedb.org/3/account/20303333/rated/tv?language=en-US&page=1&sort_by=created_at.asc' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY0NTBkYTE3OWZlNDIxY2Y5NzQyYWU2OWEzM2RlNCIsInN1YiI6IjY0ZGI1NWJmMDAxYmJkMDBlMzVkMzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMhBhXm6B0N1kwqvUOCBJyHASuDqGrhcINSUolbmq0w' \
//      --header 'accept: application/json'
