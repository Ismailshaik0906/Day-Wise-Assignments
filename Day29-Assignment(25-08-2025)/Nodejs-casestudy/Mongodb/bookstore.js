import mongoose from 'mongoose';

// 🔹 Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB!'))
.catch(err => console.error(err));

// 🔹 Define Schema (collection model)
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
});

// 🔹 Create collection
const Book = mongoose.model('Book', bookSchema);

// 🔹 Insert Book
async function run() {
    const newBook = new Book({ title: 'Node.js Basics', author: 'Ismail', price: 499 });
    await newBook.save();
    console.log('Book inserted:', newBook);

    // 🔹 Fetch all books
    const books = await Book.find();
    console.log('All Books:', books);

    // 🔹 Find book by title
    const singleBook = await Book.findOne({ title: 'Node.js Basics' });
    console.log('Found Book:', singleBook);

    // 🔹 Update book price
    const updatedBook = await Book.findOneAndUpdate(
        { title: 'Node.js Basics' },
        { price: 599 },
        { new: true }
    );
    console.log('Updated Book:', updatedBook);
}

run();
