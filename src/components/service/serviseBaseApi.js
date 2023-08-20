import axios from 'axios';

export  const movieApi = axios.create({
 baseURL:'https://api.themoviedb.org/3/',
  headers: {
  'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzY0NTBkYTE3OWZlNDIxY2Y5NzQyYWU2OWEzM2RlNCIsInN1YiI6IjY0ZGI1NWJmMDAxYmJkMDBlMzVkMzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMhBhXm6B0N1kwqvUOCBJyHASuDqGrhcINSUolbmq0w',
},
})
