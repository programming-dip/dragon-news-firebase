import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryPage = () => {
    const { id } = useParams();
    const newsData = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id === "0") {
            setCategoryNews(newsData);

        } else if (id === "1") {
            const filteredNews = newsData.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        } else {
            const filteredNews = newsData.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
 
    }, [newsData, id]);

    console.log(categoryNews);



    return (
        <div className='mt-2'>
            {
                categoryNews.map(news=><NewsCard news={news}></NewsCard>)
            }

        </div>
    );
};

export default CategoryPage;