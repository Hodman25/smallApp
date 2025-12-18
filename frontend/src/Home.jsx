import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    
  const [postData, setPostData] = useState([])

  const handleReadPost = () => {
    axios.get("http://localhost:9000/read/post").then((res) => {
      setPostData(res.data)
    })
  }


  
    useEffect(() => {
      handleReadPost()
    }, [])


      // search
  const handleSearch = (id) => {
    let key = id.target.value
    if(key){
      axios.get(`http://localhost:9000/search/post/${key}`).then((res) => {
        setPostData(res.data)
      })
    }
    else{
      handleReadPost()
    }
  }

  //dleted functionality
  const handleDelete = (id) =>{
    axios.delete(`http://localhost:9000/delete/post/${id}`).then(()=>{
        alert("data deleted")
        handleReadPost()
    })
  }

  return (
    <div className='bg-gray-200'>
      <div className="flex justify-between items-center py-4 px-10 bg-[#007E6E]">
        <h1 className='text-white text-3xl font-bold'>Small-App</h1>
        <Link to='/post' >
        <button className='bg-lime-900 px-6 py-2 rounded-lg text-white '>create Post</button>
        </Link>
      </div>

      <div className="m-20">

      </div>

        {/* api read */}

        <div className="l">
                <input onChange={handleSearch} className="w-80 h-10 border-2 px-3 rounded-xl border-black md:ml-20 ml-6 text-3xl" type="search" placeholder="search data ..." />


        {
      postData.map((item) => {
        return <div className="w-80 h-[450px] border-2 border-black rounded-xl p-4 md:ml-40 ml-6 my-20">
          <img className="w-72 h-60 rounded-xl" src={`http://localhost:9000/allImages/${item.pImage}`} alt={item.pImage} />
          <h1 className="text-4xl font-semibold py-3">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
          <div className="text-2xl flex justify-between px-2 mt-3">
            <Link to={`/update/${item._id}`}><i className="fa-solid text-green-600 fa-edit"></i></Link>
            <i onClick={()=> handleDelete(item._id)} className="fa-solid text-red-600 fa-trash"></i>
          </div>
        </div>
      })
    }

        </div>



    </div>
  )
}

export default Home
