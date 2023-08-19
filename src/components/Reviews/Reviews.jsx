import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import fetchReviews from 'components/service/serviseRewiews';

export default function Reviews() {
  // console.log('Reviews');
  const { id } = useParams();
const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(r => setReviews(r.results));
  }, [id]);

  return <>
  <h1>Reviews</h1>
  {reviews.length?<ul>
    {reviews.map(({author,content,id})=>{return <li key={id}><h3>{author}</h3><p>{content}</p></li>})}
  </ul>:<h2>Reviews not found</h2>
  }
  </>;

}
