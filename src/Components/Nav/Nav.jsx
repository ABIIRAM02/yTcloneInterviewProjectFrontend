import './nav.css'
import img from '../../assects/youtube.png'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Nav = () => {

    let input = useRef()

    let dispatch = useDispatch()
    let dummy = useSelector(state => state.store)
    console.log(dummy);
    let data = useSelector(state => state.videos)
    // console.log( ((input.current.value).toUpperCase()).split(' ')[0] ) ;

    let handleSearch = (e)=>
    {
        e.preventDefault()

        if(input.current.value == "")
        {
            dispatch({type : "video_data" , payload: dummy })
        }else{

        dispatch({type : "video_data" , payload: data.filter((data)=>{return (((data.title).toUpperCase()).split(' ').includes(((input.current.value).toUpperCase()).split(' ')[0]) )}) })
        
        }

    }

    let handleLogOut = (e)=>
    {
        e.preventDefault()
        dispatch({type:"user_data" , payload : null})
    }

    return ( 
        <section className="nav" >

            <div className='left' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className='icon' >
            <img className='img' src={img} alt="" />
            <h2>Youtube</h2>
            </div>
            </div>

            <div>
                <form onSubmit={handleSearch} className='middle' action="">
                <input ref={input} type="search" className='search' />
                <button type='submit' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
                </form>
            </div>

            <div className='right' >
                <button onClick={handleLogOut} >
                    Logout
                </button>
            </div>

        </section>
     );
}
 
export default Nav;