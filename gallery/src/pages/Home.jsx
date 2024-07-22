import React from 'react'
import { useState } from 'react';
import { storage } from '../config/Firebase';
import {ref} from "firebase/storage"
import { v4 } from "uuid"
import { uploadBytes } from 'firebase/storage';
import { useEffect } from 'react';
import { listAll } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import "../styles/Home.scss"
import { signOut } from 'firebase/auth';
import { auth } from '../config/Firebase';
import { MdLogout } from "react-icons/md";

function Home({setIsAuth}) {
const [imageUpload, setImageUpload] = useState({});
const [imageList, setImageList]=useState([]);
const imageListRef =ref(storage, "images/")

const uploadImage=(event)=>{
    event.preventDefault();
if(imageUpload == null) return;
const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
uploadBytes(imageRef, imageUpload).then((snapshot)=>{
    getDownloadURL(snapshot.ref).then((url)=>{
setImageList((item)=>[...item, url])
})});

};

const logOut = async () =>{
    await signOut(auth);
    localStorage.clear();
    setIsAuth(false);
}


useEffect(()=>{
    listAll(imageListRef).then((response)=>{
    response.items.forEach((item)=>{
getDownloadURL(item).then((url)=>{
    setImageList((img)=>[...img, url]);
})
    })
    })
},[])

  return (
    <div className="home">
        <nav>
        <input type="file" className="img" onChange={(event)=>setImageUpload(event.target.files[0])} />
      <div>
      <button onClick={uploadImage} >UPLOAD IMAGE</button>
      <button className="Logout" onClick={logOut}> <MdLogout/> </button>
      </div>
      </nav>
      <div className="images">
      {imageList.map((img)=>{
           return <img className="img" src={img}/>
      })
      }
      </div>
    </div>
  )
}
export default Home;
