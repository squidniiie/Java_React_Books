package com.sydnie.mvc.services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sydnie.mvc.models.Book;
import com.sydnie.mvc.repositories.BookRepository;

@Service 
public class BookService {
	 // adding the book repository as a dependency
    private final BookRepository bookRepository;
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
 // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
// update a book
//    public Book updateById(Long id, String title, String description, String language, Integer pages) {
//    	Book foundBook = findBook(id);
//    	foundBook.setTitle(title);
//    	foundBook.setDescription(description);
//    	foundBook.setLanguage(language);
//    	foundBook.setNumberOfPages(pages);
//    	
//    	return bookRepository.save(foundBook);
//    }
    
    public Book updateBook(Book book) {
    	return bookRepository.save(book);
    }
    
 // delete a book
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    	
    }
  }
    

    
    
