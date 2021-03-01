import React from "react";
import BookCard from "../BookCard/index.js"

function ResultList(props) {
    return (
        <div className="list">
            {
                props.results.map((result, i) => {
                    return <BookCard
                        key={i}
                        image={result.volumeInfo.imageLinks.thumbnail}
                        title={result.volumeInfo.title}
                        author={result.volumeInfo.authors}
                        published={result.volumeInfo.publishedDate}
                    />
                })
            }
        </div>
    )
}

export default ResultList;