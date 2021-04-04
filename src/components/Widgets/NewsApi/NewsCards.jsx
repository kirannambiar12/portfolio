import React from 'react'
import ReactHtmlParser from "react-html-parser";

const NewsCards = ({ article }) => {
    return (
        <div className="card news-card background-black">
            <div>
                <img className="img-fluid card-img-top" src={article?.image || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"} alt="article visual presentation" />
            </div>
            <div className="card-body color-white">
                <h6 className="news-card-title">{article?.title}</h6>
                <p className="paragraph article-description">{ReactHtmlParser(article?.description)}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn read-more-news mt-3">Read More</a>
            </div>
        </div>
    )
}

export default NewsCards;
