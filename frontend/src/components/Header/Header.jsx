import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import LowerHeader from '../lowerHeader/lowerHeader';
import './header.css'



export default function Header() {
  return (
      <>
          <section>
              <div className="header">
                  <div className="logo-delivery">
              
                  {/* logo */}
                  
                  <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWYX7BBnpGeSuq5_Ccc32ttrBBcVY2valaw&s" alt="amazon logo" /></a>
                      {/* delivery location */}
                       
                      <span> 
                          {/* icon   */}   
                             <SlLocationPin />
                       </span>
                   
                           
                      <div className="delivery">
                          
                          <p>Deliver to</p>   
                            <span>Ethiopia</span>
                      </div>
                     
                    </div>
            

             
                  <div className="input-form">
                      {/* search input */}
                      <select name="language" id="">
                          <option value="english">All</option>
                      </select>
                      <input type="text" placeholder="Search Amazon" />
                      <button><IoIosSearch /></button>
                  </div>

                  {/* right side */}
                  <div className="right-side">
                      <div className="language">
                          <img src="https://m.media-amazon.com/images/I/71XKBcJ7R8L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                          <select name="" id="">
                              <option value="english">English</option>
                          </select>
                          
                      </div>
                      <a href="#">
                          <div>
                              <p>Hello, Sign in</p>
                                <span>Account & Lists</span>
                              </div>
                      </a>
                      {/* orderr */}
                      <a href="#">
                          <p>returns</p>
                            <span>& Orders</span>
                      </a>
                      {/* cart */}
                      <a to="cart">
                         
                          <span> <FaCartPlus /></span>
                      </a>

                  </div>

        
                
                </div>

              
                  
          </section>
          <LowerHeader />
      
      </>
  )
}

