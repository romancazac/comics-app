import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';

import './singleComic.scss';




const SingleComic = () => {
    const { id } = useParams();
    const { getComics, loading } = useMarvelService();
    const [comic, setComic] = useState([])
    const fetchComic = () => {
        getComics(id).then((res) => setComic(res))
    }
    useEffect(() => {
        fetchComic()
    }, [])

    return (
        <div className="single-comic">
            {   loading ?
                 <Spinner/> :   
                <>
                    <img src={comic.thumbnail} alt="x-men" className="single-comic__img" />
                    <div className="single-comic__info">
                        <h2 className="single-comic__name">{comic.title}</h2>
                        <p className="single-comic__descr">{comic.description}</p>
                        <p className="single-comic__descr">{comic.pageCount} pages</p>
                        <p className="single-comic__descr">{comic.language}</p>
                        <div className="single-comic__price">{comic.price}</div>
                    </div>
                    <Link to="/comics" className="single-comic__back">Back to all</Link>
                </>
            }

        </div>
    )
}

export default SingleComic;