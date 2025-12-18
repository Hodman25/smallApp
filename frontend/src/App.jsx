import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function App() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("")

  const [postData, setPostData] = useState([])

  const handleReadPost = () => {
    axios.get("http://localhost:9000/read/post").then((res) => {
      setPostData(res.data)
    })
  }

  
  const formData = new FormData() 

  formData.append("title", title)
  formData.append("description", desc)
  formData.append("img", image)

  const navigate = useNavigate()

  const handlePost = (e) => {
    e.preventDefault()
    axios.post("http://localhost:9000/create/post", formData).then(() => {
      alert("success register")
      navigate('/')
      handleReadPost()
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

  return <div className="flex justify-center items-center h-screen bg-gray-100">

    <form className="bg-[#018790] border-2  md:w-[30%] w-80  h-70 md:mx-20 rounded-xl my-10 p-10">
      <input className="border border-black rounded-xl pl-4  w-60 h-10 outline-lime-500" value={title} onChange={(t) => setTitle(t.target.value)} type="text" placeholder="enter title" /> <br /> <br />
      <input className="border border-black rounded-xl pl-4  w-60 h-10 outline-lime-500" value={desc} onChange={(t) => setDesc(t.target.value)} type="text" placeholder="enter description" /> <br /> <br />
      <input className="file:border border-black file:rounded-xl pl-4  w-60 h-10 outline-lime-500" onChange={(t) => setImage(t.target.files[0])} type="file" /> <br /> <br />
      <button onClick={handlePost} className="bg-white px-12 py-3 rounded-lg">Send</button>
    </form>

    {/* <input onChange={handleSearch} className="w-80 h-10 border-2 border-black ml-20 text-3xl" type="search" placeholder="search data ..." /> */}

    {/* {
      postData.map((item) => {
        return <div className="w-80 h-96 border-2 border-black p-4 mx-40 my-20">
          <img className="w-72 h-60 rounded-xl" src={`http://localhost:9000/allImages/${item.pImage}`} alt={item.pImage} />
          <h1 className="text-4xl font-semibold py-3">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
          <div className="text-2xl flex justify-between px-2 mt-2">
            <Link to={`/update/${item._id}`}><i className="fa-solid text-green-600 fa-edit"></i></Link>
            <i className="fa-solid text-red-600 fa-trash"></i>
          </div>
        </div>
      })
    } */}

  </div>
}

export default App