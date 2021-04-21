import React from 'react'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const NewsCards = ({ article, filterBySource }) => {
    return (
        <div className="card news-card background-black w-100">
            <div className="card-body color-white">
                <h6 className="news-card-title">{article?.title.replace(/ *\([^)]*\) */g, "")}</h6>
                <div className="d-flex justify-content-between">
                <p className="paragraph article-description postedAt">{article?.postedAt}</p>
                <div className="d-flex">
                    <p onClick={() => filterBySource(article?.source)} className="paragraph article-description cursor-pointer onhover__border__expand mr-2">{article?.source.replace(/[()]/g, '')}</p>
                    <Tooltip TransitionComponent={Zoom} title="Click on link to filter by source" placement="top">
                    <ContactSupportIcon className="help-icon" />
                    </Tooltip>
                    </div>
                </div>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="color-red color-hover-red ml-auto">
                    <span className="onhover__border__expand">
                        Read More
                    </span>
                </a>
            </div>
        </div>
    )
}

export default NewsCards;
