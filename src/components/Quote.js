import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Quote.css"


const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
        let arrayOfQuotes = [];

        try {
            const data = await axios.get("https://api.quotable.io/random");
            arrayOfQuotes = data.data;
            console.log(arrayOfQuotes);
            
        }
        catch (error) {
            console.log(error);
        }

            try {
                setQuote(arrayOfQuotes.content);
                setAuthor(arrayOfQuotes.author);
            }
            catch (error) {
                console.log(error);
        
        
        }
    };
    useEffect(() => {

        quoteAPI();

    }, []);
    return  (
    <div className="App"> 
    
    <div className="container"> 
    <div className="quoteBox"> 
    <div className="quote"> " {quote} "
    <div className="author"> - {author} 
    </div>
    </div>
    </div>
    </div>
    </div>);

    
};



export default Quote
