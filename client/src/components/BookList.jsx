import { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3300/api/books").then((res) => {
      setBooks(res.data);
      console.log(books[0].imagePath);
    });
  }, []);

  return (
    <>
      <table
        style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Book name</th>
            <th>Description</th>
            <th>Publish Date</th>
            <th>Picture</th>
            <th>Writer</th>
            <th>Writer Country</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.description}</td>
              <td>{book.publishDate}</td>
              <td>
                <img
                  src={book.imagePath}
                  alt={book.name}
                  style={{ objectFit: "cover", width: "200px", height: "100%" }}
                />
              </td>
              <td>{`${book.writer.firstname} ${book.writer.lastname}`}</td>
              <td>{book.writer.country.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
