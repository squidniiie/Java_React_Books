package com.sydnie.mvc.controllers;
import java.util.List;
import javax.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.sydnie.mvc.models.Book;
import com.sydnie.mvc.services.BookService;

@Controller
public class BookController {
	
	private final BookService bookService;
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
//@Autowired
//BookService bookService;

//	Retrieve one page:
	@GetMapping("/books/{id}")
	public String index(Model model, @PathVariable("id") Long id) {
		System.out.println(id);
		Book book = bookService.findBook(id);
		System.out.println(book);
		
		model.addAttribute("book", book);
		return "index.jsp";
	}
// Retrieve all page:
    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("booksList", books);
        return "books.jsp";
    }
// Create new page:
    @RequestMapping("/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "new.jsp";
    }
    @RequestMapping(value="/books", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }

	
}
