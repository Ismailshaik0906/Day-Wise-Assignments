import React, { useEffect, useState } from "react";

const BookExplorer = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("all");
  const [sort, setSort] = useState("none");

  
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        setFilteredBooks(data.results);
      });
  }, []);

  
  useEffect(() => {
    let results = [...books];
    if (search) {
      results = results.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (language !== "all") {
      results = results.filter((b) => b.languages.includes(language));
    }

    if (sort === "popularity") {
      results.sort((a, b) => b.download_count - a.download_count);
    }

    setFilteredBooks(results);
  }, [search, language, sort, books]);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Public Domain Book Explorer</h1>
      <div className="d-flex gap-3 mb-4">
        <input type="text" placeholder="Search by title or author" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)}/>

        <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="all">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
        </select>

        <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">Default</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
      </div>
      <div className="row">
          {filteredBooks.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="text-muted">
                    {book.authors.map((a) => a.name)}
                  </p>
                  <p>
                    <b>Language:</b> {book.languages}
                  </p>
                  <p className="fw-bold text-success">
                    Downloads: {book.download_count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {filteredBooks.length === 0 && (
          <p className="text-center text-muted">No Books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookExplorer;
