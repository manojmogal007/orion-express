import React from 'react'
import Modal from '../components/BasicModal'
import axios from 'axios'
import { url } from '../components/url'
import {url} from '../components/url'

const Profiles = () => {

  const getprofiles=()=>{
    axios.get(`${url}/profile/get`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
        <Modal/>
    </div>
  )
}

export default Profiles