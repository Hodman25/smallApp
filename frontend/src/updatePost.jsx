import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdatePost() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("")

  const params = useParams()
  

  const handleReadSingleData = () => {
    axios.get(`http://localhost:9000/read/SinglePost/${params.id}`).then((res) => {
      setTitle(res.data[0].title)
      setDesc(res.data[0].description)
      setImage(res.data[0].pImage)
    })
  }

  
  
  const formData = new FormData() 

  formData.append("title", title)
  formData.append("description", desc)
  formData.append("img", image)

  const Navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:9000/uodate/post/${params.id}`, formData).then(() => {
        alert("success update")
        Navigate("/")
    })
  }

  

  useEffect(() => {
    handleReadSingleData()
  }, [])

  return <div className="flex justify-center items-center h-screen bg-gray-200">

    <form className="bg-[#018790] md:w-[30%] h-[480px] md:ml-20 ml-2 rounded-md border my-10 p-10">
      <input className="w-80 h-14 rounded-lg px-3" value={title} onChange={(t) => setTitle(t.target.value)} type="text" placeholder="enter title" /> <br /> <br />
      <input className="w-80 h-14 rounded-lg px-3" value={desc} onChange={(t) => setDesc(t.target.value)} type="text" placeholder="enter description" /> <br /> <br />
      <input className="w-80 h-14 file:rounded-lg px-3" onChange={(t) => setImage(t.target.files[0])} type="file" /> <br /> <br />
      <img className="w-20 h-32 -mt-4 mb-2" src={`http://localhost:9000/allImages/${image}`} alt="" />
      <button onClick={handleUpdate} className="bg-white px-12 py-3 rounded-lg">Update</button>
    </form>

  </div>
}

export default UpdatePost