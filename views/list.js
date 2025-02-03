
import createBookTemplate from './book.js';

const createListTemplate = (books) => /*html*/`
  ${books.length > 0 
    ?`
    <ul>
      ${books.map((book) => createBookTemplate(book)).join('')}
    </ul>`
    : '<p>No books found</p>'
  }
`;

export default createListTemplate;