import React, { useEffect, useState } from 'react'

const SearchNews = () => {
    const [news, setNews] = useState([]);
    const [data, setData] = useState("");
    const [query, setQuery] = useState("");
    const [flag, setFlag] = useState(false);

    const fetchNews = async () =>{
        let response = await fetch(`https://newsapi.org/v2/everything?q=${query}}&apiKey=d773becdd3f547a182344b8549aef36a`);
        let data = await response.json();
        setNews(data.articles);
    }

    useEffect(()=>{
        fetchNews();
    },[query])

    const handle = (e) =>{
        e.preventDefault();
        setQuery(data);
        setFlag(true);
    }

    if(flag){
        return (
            <>
            <div className="container text-primary" style={{marginBottom:"50px",marginTop: "75px"}}>
            <div className='row gx-5'>
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
        return (
            <>
            <div className="container w-50" style={{marginTop:'250px'}}>
            <div className="form-outline mb-4 mt-5">
                <label className="form-label" htmlFor="searchnews"><b>Search News</b></label>
                <input type="text" id="searchnews" onChange={(e)=>setData(e.target.value)} value={data} placeholder='Please enter your topic here' className="form-control" />
                <center><button className='btn btn-success my-3' onClick={handle}>Search</button></center>
            </div>
            </div>
            </>
        )
    }
  
}

export default SearchNews