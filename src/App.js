import React, {useState}  from "react";
//import classCounter from "./ClassCounter";
import Counter from "./Counter";
import "./styles/App.css"
import Post from "./PostItem";
import NewsList from "./components/NewsList";
import Select from "./components/Select";
//import {BrowserRouter, Route} from "react-router-dom";

function App() {
    let [news, setNews] = useState([{id: 1, name: "ffff", author: "Rinat", rating: 0, date: 4},
    {id: 2, name: "afff 2", author: "fdf", rating: 0, date: 6},
    {id: 3, name: "ffff 3", author: "fsfdf", rating: 0, date: 8},
    {id: 4, name: "ffff 3", author: "fsfdf", rating: 0, date: 9},
    {id: 5, name: "cfff 3", author: "fsfdf", rating: 0, date: 1},
    {id: 6, name: "ffkf 3", author: "fsfdf", rating: 0, date: 3},
    {id: 7, name: "ffff 3", author: "fsfdf", rating: 0, date: 2},
    {id: 8, name: "dfff 3", author: "fsfdf", rating: 0, date: 11},
    {id: 9, name: "ffgf 3", author: "fsfdf", rating: 0, date: 10},
    {id: 10, name: "ffff 3", author: "fsfdf", rating: 0, date: 30}])
    let [selectedSort, setSelectedSort] = useState('')

    // function goToPage(id) {
    //     <Route path="/id={id}">
    //         <PostPage/>
    //     </Route>
    // }

    function sortNews(sort) {
        setSelectedSort(sort)
        if (sort === 'name') {
            setNews([...news].sort((a, b) => a[sort].localeCompare(b[sort])))
        } else {
            setNews([...news].sort(function(a, b) {
                            return a[sort] - b[sort];
}))
        }
    }

    return (
        <div className="App">
        <div>
                <Select
                    value={selectedSort}
                    onChange = {sortNews}
                    options={[
                        {value: 'name', name: 'Name'},
                        {value: 'date', name: 'Date'},
                    ]}

                />
        </div>
        <hr style={{margin: '15px'}}/>
        <NewsList news={news} title="Breaking NEWS"/>
        </div>
    );
}

export default App;
