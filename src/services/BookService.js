import axios from 'axios'
const REST_API_URL = 'http://localhost:8080/api/books';
class BookService {
    getBooks() {
        return axios.get(REST_API_URL);
    }
    createBook(book) {
        return axios.post(REST_API_URL, book);
    }
    getById(id) {
        return axios.get(REST_API_URL + '/' + id);
    }
    updateBook(id, book) {
        return axios.put(REST_API_URL + '/' + id, book);
    }
    deleteBook(id) {
        return axios.delete(REST_API_URL + '/' + id);
    }

}
export default new BookService();
