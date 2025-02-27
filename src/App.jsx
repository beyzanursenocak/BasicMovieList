import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
  {
    Id: "780",
    Title: "How To Train Your Dragon",
    Year: "2019",
    Poster:
      "https://image.tmdb.org/t/p/original/gHoZaNRTCYNjftaqZFjjV15OSHr.jpg",
  },
  {
    Id: "781",
    Title: "Godzilla vs. Kong",
    Year: "2021",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.07JfvOKy0t7f56-UFDMd4AHaLH&w=200&h=300&c=7",
  },
  {
    Id: "782",
    Title: "Bullet Train",
    Year: "2022",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.m1ADuyQh2onYT5dbd_w5swHaLH&w=200&h=300&c=7",
  },
  {
    Id: "783",
    Title: "Schindler's List",
    Year: "1993",
    Poster:
      "https://tse1.mm.bing.net/th?id=OIP.hyACVFqccWly7fIhynXNQgHaLH&w=200&h=300&c=7",
  },
  {
    Id: "784",
    Title: "The Godfather",
    Year: "1972",
    Poster:
      "https://tse2.mm.bing.net/th?id=OIP.BV6gCt1rwqEmjRnWZ-sdPAHaLK&w=200&h=301&c=7",
  },
  {
    Id: "785",
    Title: "Forrest Gump",
    Year: "1994",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.Jyg-EAm0bkeoRGNh8_-0igHaLH&w=200&h=300&c=7",
  },
  {
    Id: "27204",
    Title: "Fight Club",
    Year: "1999",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.GGzj_iHbeurTqIEcNGIEdwHaLH&w=200&h=300&c=7",
  },
  {
    Id: "101",
    Title: "Pulp Fiction",
    Year: "1994",
    Poster:
      "https://tse2.mm.bing.net/th?id=OIP.lJ1SALoAkquFWQ_RZcLteQHaLH&w=200&h=300&c=7",
  },
  {
    Id: "102",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.nq66xqwF5qVWxt11yjmU6gHaLH&w=200&h=300&c=7",
  },
  {
    Id: "121",
    Title: "The Dark Knight",
    Year: "2008",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH&w=200&h=300&c=7",
  },
];

const selected_movie_list = [
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    duration: 125,
    rating: 9.4,

  },
  {
    Id: "785",
    Title: "Forrest Gump",
    Year: "1994",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.Jyg-EAm0bkeoRGNh8_-0igHaLH&w=200&h=300&c=7",
    duration: 120,
    rating: 8.4,
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    duration: 125,
    rating: 8.8,
  },
  {
    Id: "27204",
    Title: "Fight Club",
    Year: "1999",
    Poster:
      "https://tse4.mm.bing.net/th?id=OIP.GGzj_iHbeurTqIEcNGIEdwHaLH&w=200&h=300&c=7",
    duration: 110,
    rating: 9.8,
  },
];

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list)

  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <NavSearchResult movies={movies} />
      </Nav>
      <Main>
      <div className="row mt-2">
        <div className="col-md-9">
          <ListContainer>
            <MovieList movies = {movies} />
          </ListContainer>
        </div>
        <div className="col-md-3">
          <ListContainer>
            <>
              <MyListSummary selectedMovies={selectedMovies} />
              <MyMovieList selectedMovies={selectedMovies} />
            </>
          </ListContainer>
        </div>
      </div>
      </Main>
    </>
  );
}

function Nav({children}) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>
      Movie App
    </div>
  );
}

function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film Ara..." />
    </div>
  );
}

function NavSearchResult({movies}) {
  return (
    <div className="col-4">
      <strong>{movies.length}</strong> kayıt bulundu
    </div>
  );
}

function Main({children}) {
  return (
    <main className="container">
      {children}
    </main>
  );
}

function ListContainer({children}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({movies}) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Id} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="col mb-2">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{movie.Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyListSummary({ selectedMovies }) {
  const avgRating = getAverage(selected_movie_list.map((m) => m.rating));
  const avgDuration = getAverage(selected_movie_list.map((m) => m.duration));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selectedMovies.length}] film eklendi</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-1">
              <span>{avgRating.toFixed(2)}</span>
            </i>
          </p>
          <p>
            <i className="bi bi-hourglass-split text-warning me-1">
              <span>{avgDuration.toFixed(2)}</span>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies }) {
  return (
    <>
      {selectedMovies.map((selectedMovie) => (
        <MyListMovie selectedMovie={selectedMovie} key={selectedMovie.Id} />
      ))}
    </>
  );
}

function MyListMovie({ selectedMovie }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{selectedMovie.Title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{selectedMovie.rating}</span>
              </p>
              <p>
                <i className="bi bi-hourglass-split text-warning me-1"></i>
                <span>{selectedMovie.duration}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
