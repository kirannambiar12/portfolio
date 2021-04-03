import React from 'react'

const NewsCards = ({ article }) => {
    return (
        <div className="card news-card background-black">
            <div>
            <img className="img-fluid card-img-top" src={article?.urlToImage || "https://media.ticketmaster.co.uk/tm/en-gb/img/mw/images/f0/87/122346p1.jpg"} alt={article?.title} alt={article?.title} />
            </div>
            <div className="card-body color-white">
                <h6 className="news-card-title">{article?.title}</h6>
                <a href={article?.url} target="_blank" rel="noopener noreferrer" className="btn read-more-news mt-3">Read More</a>
            </div>
        </div>
    )
}

export default NewsCards;
