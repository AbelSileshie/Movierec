import React, { useEffect, useState } from 'react';
import MovieCard from '../Component/MovieCard';

const KEY = "cd03c49615cd326a66da1a5a7b3cc69e";

function Home() {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTVShows] = useState([]);

    useEffect(() => {
        async function getTopRatedMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`);
            const data = await res.json();
            setMovies(data.results);
            console.log("rated",data.results);

        }

        async function getPopularTVShows() {
            const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`);
            const data = await res.json();
            setTVShows(data.results);
            console.log("popular",data.results);
        }

        getTopRatedMovies();
        getPopularTVShows();
    }, []);

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4 text-white">Top Rated Movies</h2> {/* Add text-white class */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4 text-white">Popular TV Shows</h2> {/* Add text-white class */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                    {tvShows.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
