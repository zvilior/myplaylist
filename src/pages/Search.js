import { useState } from "react";

export default function Search() {

    // const [data, setData] = useState([]);



    function getitems(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': '36759d224cmshb2bb4d1b0cc42e4p1366b3jsnb4ae37d91bbe'
            }
        };

        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }


    return (
        <form onSubmit={getitems}>
            <input type="text" placeholder="search" /></form>
    )
}