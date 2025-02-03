const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="search" style="text-align: center;">
        <input 
        type="search"
        name= "search"
        placeholder="Search books by title..."
        hx-post="/book/search"
        hx-trigger="keyup changed delay:500ms"
        hx-target=".book-list"
        />

        </div>



        <div class="book-list">
          <button 
          hx-get="/books" 
          hx-target=".book-list" 
          hx-target=".book-list"
          hx-trigger="click"
          >Show Books</button>
          <!-- here -->
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form 
              hx-post="/books"
              hx-on::after-request="document.querySelector('form').reset()"
              hx-target=".book-list ul"
              hx-swap="beforeend"
              >
            <input 
              type="text"
              name="title"
              placeholder="Title"
              required  
            />
            <input 
              type="text"
              name="author"
              placeholder="Author"
              required  
            />
            <button>Add book</button>
          </form>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;