import React, { useState, useEffect } from 'react'
import BookService from '../services/BookService'
import { Link, useHistory } from 'react-router-dom';

function Books() {
    const history = useHistory()
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        BookService.getBooks()
            .then((res) => {
                setBooks(res.data)
                console.log(res.data)
            });
    }
    const deleteBook = (id) => {
        BookService.deleteBook(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className='p-4 m-4 grid grid-cols-1'>
            <button className="bg-green-300 font-Montserrat text-lg font-bold text-white rounded-full mt-4 p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-green-400 hover:shadow-xl" onClick={(e) => history.push('/create')}>
                Create New Book
            </button>
            <br />
            <h1 className="text-3xl font-bold text-center font-Quicksand">The Need to Read List</h1>
            <br />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center tracking-wider">
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Author
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th> */}
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Pages
                                        </th> */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {books.map((book) => (
                                        <tr key={book.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{book.id}</div>
                                                    <div className="text-sm text-gray-500">{book.title}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-wrap">
                                                <div className="text-sm text-gray-900">{book.description}</div>
                                                <div className="text-sm text-gray-500">{book.language}</div>
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td> */}
                                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.numberOfPages}</td> */}
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <p className="flex justify-evenly">
                                                    <Link to={`/edit/${book.id}`} className="bg-indigo-300 text-white rounded-full p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-indigo-400 hover:shadow-xl" >Edit</Link>
                                                    <button onClick={() => deleteBook(book.id)} className="bg-red-300 text-white rounded-full p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-red-400 hover:shadow-xl">Delete</button>
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books
