import React from 'react';
import NewsCards from './NewsCards';
import Pagination from './Pagination';
import styled from "styled-components";
import { db } from '../../../config/firebase';
import Button from '@material-ui/core/Button';

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

    .article-description:not(.postedAt):hover {
        color: #BFBFBF;
    }

    .color-hover-red:hover {
        color: red;
        text-decoration: underline;
    }

    .article-description:not(.postedAt).onhover__border__expand:after {
        border-bottom: solid .5px #BFBFBF;  
    }

    .help-icon {
        width: 18px;
    }

    .show-all { 
        outline: none;
        margin:  50px auto 0 auto;
        display: block;
        .MuiButton-label {
        color: red;
    }
        color: #f34848;
    }


`;

const NewsApi = () => {
    const [news, setNews] = React.useState([]);
    const [pagination, setPagination] = React.useState(0);
    const [filteredNews, setFilteredNews] = React.useState([]);

    React.useEffect(() => {
        try {
            db.collection('hacker-news').doc("news-data").get()
                .then(doc => setNews(doc.data()))
        } catch (error) {
            console.log(error);
        }
    }, [news])

    const filterBySource = async (source) => {
        try {
            let pushFilterNewsData = [];
            await db.collection('hacker-news').doc("news-data").get()
                .then(doc => {
                    doc.data().data.forEach((data) => {
                        data.pageData.forEach((newsInfo) => {
                            if(newsInfo.source == source) {
                                pushFilterNewsData.push(newsInfo)
                            }
                        })
                    })
                })
                setFilteredNews(pushFilterNewsData);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Wrapper className="container">
            <h3 className="text-center heading color-red mb-4">News</h3>
            <div className="row">
                {!filteredNews.length > 0 && news.data && news?.data[pagination].pageData.map((article) => (
                    <div className="col-12 col-md-6 equal-col">
                        <NewsCards filterBySource={filterBySource} article={article} />
                    </div>
                ))}
                {filteredNews.length > 0 && filteredNews.map((article) => (
                    <div className="col-12 col-md-6 equal-col">
                        <NewsCards filterBySource={filterBySource} article={article} />
                    </div>
                ))}
            </div>

            {!filteredNews.length > 0 &&
            <Pagination setPagination={setPagination} pagination={pagination} totalPage={news?.data?.length} />
            }
            {filteredNews.length > 0 &&
                <Button onClick={() => setFilteredNews([])} className="show-all onhover__border__expand">Show All</Button>
            }
        </Wrapper>
    )
}

export default NewsApi;
