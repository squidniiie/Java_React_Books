import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import BookService from '../services/BookService';

function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("");
    const [numberOfPages, setPages] = useState([]);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const { id } = useParams();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const book = {
            title, description, language, numberOfPages
        }
        if (id) {
            BookService.updateBook(id, book)
                .then((res) => {
                    console.log(res.data)
                    history.push("/")
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            BookService.createBook(book)
                .then(res => {
                    history.push("/")
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                    console.log("didn't work")
                    // const errorResponse = err.response.data.errors;
                    // const errorArr = [];
                    // for (const key of Object.keys(errorResponse)) {
                    //     errorArr.push(errorResponse[key].message)
                    // }
                    // setErrors(errorArr);
                })
        }
    }

    useEffect(() => {
        BookService.getById(id)
            .then((res) => {
                console.log(id)
                console.log(res)
                setTitle(res.data.title)
                setDescription(res.data.description)
                setLanguage(res.data.language)
                setPages(res.data.numberOfPages)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const header = () => {
        if (id) {
            return <h1 className="text-2xl font-bold text-center">Update Book</h1>
        } else {
            return <h1 className="text-2xl font-bold text-center">Add Book</h1>
        }
    }

    return (
        <div>
            <button className="bg-green-300 font-Montserrat text-lg font-bold text-white rounded-full mt-4 p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-green-400 hover:shadow-xl" onClick={(e) => history.push('/')}>
                Back to Dashboard
            </button>
            <div className="shadow-xl bg-gray-50 rounded-lg p-4 m-4">
                <div className="font-Quicksand text-center">
                    {header()}
                    <form className="col" onSubmit={onSubmitHandler}>
                        {errors.map((err, index) => <p className="text-red-500" key={index}>{err}</p>)}
                        <label>Title:</label>
                        <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
                            <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </p>
                        <label>Author:</label>
                        <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white">
                            <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                        </p>
                        <label>Language:</label>
                        <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white">
                            <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setLanguage(e.target.value)} value={language} />
                        </p>
                        <label>Number of Pages:</label>
                        <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white">
                            <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="number" onChange={(e) => setPages(e.target.value)} value={numberOfPages} />
                        </p>
                        <input className="bg-green-300 font-Montserrat text-lg font-bold text-white rounded-full mt-4 p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-green-400 hover:shadow-xl" type="submit" value="Create" onSubmit={(e) => history.push("/")} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
