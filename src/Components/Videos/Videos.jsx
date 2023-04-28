import axios from "axios";
import { useEffect, useState } from "react";
import './video.css'
import { useDispatch, useSelector } from "react-redux";

const Videos = () => {

    let dispatch = useDispatch()

    let data = useSelector(state => state.videos)
    console.log(data);

    useEffect(()=>
    {
   
      const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
        params: {
          query: 'cat',
          geo: 'US',
          lang: 'en'
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': 'e48b310c10mshe3ad9c3de1eaad4p1350b2jsn683e361aa82b',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
         axios.request(options)
         .then((responce)=>{
           dispatch( { type: "video_data" , payload : responce.data.data } )
           dispatch( { type: "dummy_data" , payload : responce.data.data } )
          //  setData(responce.data.data)
         })
       .catch(function (error) {
           console.error(error);
       });
   
    } , [])

    return ( 
        <section className="video" >
        { 
            data.map((data)=>
            {
                if(data.type == "video")
                {
                    return(
                <section>
                    <section className="container" >

                      <div className="top" >
                        <img className="thumbnail" src={data.thumbnail[0].url} alt="" />
                        <p>{data.lengthText}</p>
                      </div>

                      <section className="content" >
                        <img src={data.channelThumbnail[0].url} alt="" />
                        <div>
                          <h3>{data.title}</h3>
                          <h4>{data.channelTitle}</h4>
                          <span>{data.viewCount} Views . </span>
                          <span>{data.publishedText}</span>
                        </div>
                      </section>

                    </section>
                </section>
                   )
                }
            })
        }

    </section>
     );
}
 
export default Videos;