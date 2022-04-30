import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const AustraliaApi = () => {
    const [news, setNews] = useState([]);
    
    const [flag, setFlag] = useState(false);

    const fetchNews = async () =>{
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=au&apiKey=d773becdd3f547a182344b8549aef36a");
        let data = await response.json();
        setFlag(true);
        setNews(data.articles);
        
    }

    useEffect(()=>{
        fetchNews();
    },[])

    if(flag){
        return (
            <>
            <div className="container text-primary" style={{marginBottom:"50px",marginTop: "75px"}}>
            <div className='row'>
                {
                    news.map((element)=>{
                        return (
                        <div className='col-md-4 border bg-light' key={element.title}>
                            <center className="mt-2"><img className="img" src={element.urlToImage}/></center>
                            <a href={element.url}><b className="">{element.title}</b></a>
                            <p className='mt-2 text-dark'>{element.description} </p>
                            <p className='text-success'>{element.publishedAt}</p>
                            <div style={{float:"right"}}><a href={element.url}><p>Source: {element.source.name}</p></a></div>
                        </div>
                    )
                    })
                }
                </div>
            </div>
            
            </>
          )
    }
    else{
        return <Loading/>
    }
  
}

export default AustraliaApi