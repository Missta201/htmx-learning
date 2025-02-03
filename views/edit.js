const createEditFormTemplate  = (book) => /*html*/`
<form>
    <input 
        type="text"
        name="title"
        placeholder="Title"
        required  
        value="${book.title}"
    />
    <input 
        type="text"
        name="author"
        placeholder="Author"
        required
        value="${book.author}"
        />
    <button>Add book</button>
    </form>
`;


export default createEditFormTemplate;