import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import "./NewsContent.css";


const NewsContent = ({ NewsArray, NewsResults}) => {
    return (
        <Container maxWidth="md">
            <div className = "content"> 
                <div className = "message">
                    <span className = "messageText">
                    Million News, One News Website !
                        


                    </span>

                </div>
                {
                    NewsArray.map((NewsItem)=>(

                        < NewsCard NewsItem={NewsItem} key={NewsItem.title} />
                    ))
                }

                
            </div>
        
        
        </Container>
            
        
    )
}

export default NewsContent
