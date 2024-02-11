import React from 'react'
import { useRouter } from "next/router";
import Aboutus from '.';

const AboutUsPage  = () => {
    const router = useRouter()

    const id = router.query.AboutUsPage
    console.log(id);
  return (
    <Aboutus id={id} />
  )
}

export default AboutUsPage 
