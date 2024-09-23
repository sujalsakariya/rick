import React from 'react'
import './Foot.css'
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Foot = () => {
  return (
    <>
      <div className="foot d-flex">
        <div className="loc d-flex">
          <span>CHARACTERS: 826</span>
          <span>LOCATIONS: 126</span>
          <span>EPISODES: 51</span>
        </div>
        <div className="server">
          <span>SERVER STATUS <span className='dott'></span></span>
        </div>
        <div className="powered d-flex justify-content-center gap-5 m-4">
          <div className="pw-both d-flex align-items-center">
            <img src="https://static-00.iconduck.com/assets.00/netlify-icon-2048x2048-vn9f0x8q.png" alt="" />
            <div className="by d-flex flex-column">
              <span>DEPLOYS BY</span>
              <strong>netlify</strong>
            </div>
          </div>
          <div className="pw-both d-flex align-items-center">
            <img src="https://cdn-b.saashub.com/images/app/service_logos/179/6gez0wvuxkm/large.png?1623926464" alt="" />
            <div className="by d-flex flex-column">
              <span>Powered by</span>
              <strong>Stellate</strong>
            </div>
          </div>
        </div>
        <div className="logos d-flex gap-4">
          <FaGithub />
          <FaTwitter />
          <FaHeart />
        </div>
        <div className="end">
          <span>❮❯ by <a href='https://github.com/'>Axel Fuhrmann</a> </span>
          <span>2024</span>
        </div>
      </div>
    </>
  )
}

export default Foot