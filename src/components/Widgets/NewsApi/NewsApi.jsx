import React from 'react';
import NewsCards from './NewsCards';
import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 80px;
    margin-bottom: 100px;

    .news-card {
        border: 1px solid grey;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: 'Poppins', sans-serif;
    }

    .news-card-title {
        line-height: 22px;
    }

    .read-more-news {
        background-color: red;
        color: white;
        border-radius: 0;
        float: right;
    }

    .equal-col {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
    }

    .card-img-top {
        max-height: 180px;
        height: 180px;
        object-fit: cover;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }

    .filter-section {
        background-color: #363636;
        width: 100%;
        margin: 0px;
    }

    .news-search, .sort-dropdown {
        width: 100%;
        max-width: 250px;
        height: 35px;
        outline: none;
        padding-left: 10px;
        padding-right: 10px;
    }

    .filter-btn {
        background-color: red;
        max-width: 200px;
        width: 100%;
        height: 40px;
        outline: none;
        border-radius: 0;
        display: inherit;
        @media (max-width: 768px){
            margin-top: 50px;
    }
    }

    .article-description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        -webkit-box-orient: vertical;
        line-height: normal;
        font-size: 14px;
        color: grey;
    }

`;

const NewsApi = () => {

    const [news, setNews] = React.useState([]);
    const [search, setSearch] = React.useState("covid");
    const [sort, setSort] = React.useState("popularity");

    const findNews = () => {
        fetch(`http://api.mediastack.com/v1/news?&countries=in&keywords=${search}&access_key=${process.env.REACT_APP_NEWSAPI_KEY}`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch((error) => {
                alert("Oppsss..Something went wrong! Please try again.")
                console.log(error);
            });
    }

    React.useEffect(() => {
        const findHeadlineNews = () => {
            fetch(`http://api.mediastack.com/v1/news?&countries=in&access_key=${process.env.REACT_APP_NEWSAPI_KEY}`)
                .then(res => res.json())
                .then(data => setNews(data))
                .catch((error) => {
                    alert("Oppsss..Something went wrong! Please try again.")
                    console.log(error);
                });
        }
        findHeadlineNews();
    }, [])


    return (
        <Wrapper className="container">
            <h3 className="text-center heading color-red mb-4">News</h3>
            <div className="row filter-section d-flex justify-content-around filter-categories py-3 py-md-2">
                <div className="col-md-4 col-6">
                    <div className="search news-search mx-auto">
                        <label className="color-white" htmlFor="searchNews">Search:</label> <br />
                        <input id="searchNews" placeholder="Search here" className="news-search" type="text" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="search col-md-4 col-6">
                    <div class="dropdown sort-dropdown mx-auto">
                        <label className="color-white" htmlFor="slct"> Sort By:</label> <br />
                        <select className="sort-dropdown" onChange={(e) => setSort(e.target.value)} name="slct" id="slct">
                            <option value="popularity">Popularity</option>
                            <option value="published_desc">Old First</option>
                            <option value="published_asc">Latest First</option>
                        </select>
                    </div>
                </div>
                <div className="filter col-md-4 col-12">
                    <button className="filter-btn mx-auto" onClick={() => findNews()}>Apply</button>
                </div>
            </div>
            <div className="row">
                {news?.data?.map((article) => (
                    <div className="col-12 col-md-6 col-lg-4 equal-col">
                        <NewsCards article={article} />
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default NewsApi;
