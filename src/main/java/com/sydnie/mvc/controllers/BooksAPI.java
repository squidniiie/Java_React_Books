package com.sydnie.mvc.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.sydnie.mvc.models.Book;
import com.sydnie.mvc.services.BookService;

@RestController
@CrossOrigin("*")
public class BooksAPI {
	@Autowired
    private final BookService bookService;
    public BooksAPI(BookService bookService){
        this.bookService = bookService;
    }
    
//    private BookRepository bookRepository;
	
	  @GetMapping("/api/books")
	    public List<Book> index() {
	        return bookService.allBooks();
	  }
	  
//		Create Method:
//	  @PostMapping(value="/api/books")
//	    public Book create(@RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages) {
//	        Book book = new Book(title, desc, lang, numOfPages);
//	        return bookService.createBook(book);
//	  }
	  @PostMapping(value="/api/books")
	    public Book create(@RequestBody Book book) {
	        return bookService.createBook(book);
	  }
	  
	    
//		Retrieve Method:
	  @GetMapping("/api/books/{id}")
	    public Book show(@PathVariable("id") Long id) {
	        Book book = bookService.findBook(id);
	        return book;
	   }
	  
//		Update Method:
//	  @PutMapping(value="/api/books/{id}")
//	    public Book update(
//	    		@PathVariable("id") Long id, 
//	        	@RequestParam(value="title") String title, 
//	        	@RequestParam(value="description") String desc, 
//	        	@RequestParam(value="language") String lang,
//	        	@RequestParam(value="numberOfPages") Integer numberOfPages) {
//	         Book updatedBook = new Book(title, desc, lang, numberOfPages);
//	         updatedBook.setId(id);
//	         
//	         updatedBook = bookService.updateBook(updatedBook);
//	         return updatedBook;
//	   }
	  @PutMapping(value="/api/books/{id}")
	    public Book update(
	    		@PathVariable("id") Long id, @RequestBody Book bookDetails) {
	         Book updatedBook = new Book();
	         updatedBook.setId(id);
	         updatedBook.setTitle(bookDetails.getTitle());
	         updatedBook.setDescription(bookDetails.getDescription());
	         updatedBook.setLanguage(bookDetails.getLanguage());
	         updatedBook.setNumberOfPages(bookDetails.getNumberOfPages());
	         updatedBook = bookService.updateBook(updatedBook);
	         return updatedBook;
	   }
	   
//	   Delete Method:
	  @DeleteMapping(value="/api/books/{id}")
	   public void destroy(@PathVariable("id") Long id) {
	         bookService.deleteBook(id);
	  }
}
	

