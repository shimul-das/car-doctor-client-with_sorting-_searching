import React, { useEffect, useRef, useState } from 'react'
import Servicescard from './Servicescard'
const Services = () => {
  const [services, setservices] = useState([])
  const [asc, setasc] = useState(true)
  const serchref=useRef(null)
  const [search,setserch]=useState("")
  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
      .then(res => res.json())
      .then(data => setservices(data))
  }, [asc,search])
  const handleserch=()=>{
    console.log(serchref.current.value)
    setserch(serchref.current.value)
  }
  return (
    <div className='text-center'>
      <h3 className='text-2xl text-[#FF3811]'>Service</h3>
      <h2 className='text-4xl'>Our Service Area</h2>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
      <div className="form-control text-center">
        <div className="input-group">
          <input ref={serchref} type="text" placeholder="Search…" className="input input-bordered" />
          <button onClick={handleserch} className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      <button onClick={() => setasc(!asc)} className='btn btn-primary'>{asc ? "High To Low" : "Low To High"}</button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
          services.map(service => <Servicescard key={service._id} service={service}></Servicescard>)
        }
      </div>
    </div>
  )
}

export default Services