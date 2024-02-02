import './App.css';
import logo from "./image/logo.png";
import banner from "./image/banner.jpg";
import about from "./image/about.jpg";
import step from "./image/step.png";
import step1 from "./image/step1.png";
import step2 from "./image/step2.png";
import step3 from "./image/step3.png";
import service1 from "./image/service1.jpg";
import service2 from "./image/service2.jpg";
import service3 from "./image/service3.jpg";
import service4 from "./image/service4.jpg";
import service5 from "./image/service5.jpg";
import service6 from "./image/service6.jpg";
import video_img from "./image/video-img2.png";
import project1 from "./image/project1.jpg";
import project2 from "./image/project2.jpg";
import project3 from "./image/project3.jpg";
import project4 from "./image/project4.jpg";
import project5 from "./image/project5.jpg";
import project6 from "./image/project6.jpg";
import testi1 from "./image/testi1.png";
import testi2 from "./image/testi2.png";
import blog1 from "./image/blog1.jpg";
import blog2 from "./image/blog2.jpg";
import blog3 from "./image/blog3.jpg";
import sponser1 from "./image/sponser1.png";
import sponser2 from "./image/sponser2.png";
import sponser3 from "./image/sponser3.png";
import sponser4 from "./image/sponser4.png";
import footer_logo from "./image/footer_logo.png";
import post1 from "./image/post1.png";
import post2 from "./image/post2.png";
import { FiPlusCircle,FiPhone } from "react-icons/fi";
import { FaMagnifyingGlass,FaArrowRightLong } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { IoChatbubblesOutline,IoLocationOutline } from "react-icons/io5";
import { MdFormatQuote,MdOutlineKeyboardArrowDown,MdOutlineCalendarMonth } from "react-icons/md";
import { FaUsers,FaHeadset,FaPlay,FaStar,FaRegUser,FaFacebookF,FaInstagram,FaTwitter,FaRegEnvelope,FaCircle } from "react-icons/fa";
import { TbBuildingWindTurbine } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      {/* header */}
      <header>
        <div className='header'>
          <div className="logo_header">
              <div>
                <div className="main_logo">
                  <div className="logo">
                    <a href="./app.js"><img src={logo}></img></a>
                  </div>
                  <div className="menu">
                    <ul className='main_menu'>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Pages</a>
                        <ul className='sub_menu'>
                          <li><a href='#' className='line'>Our Gallery</a></li>
                          <li><a href='#'>Our Team</a></li>
                          <li><a href='#'>Pricing</a></li>
                          <li><a href='#'>Faq</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="menu_icon">
                      <FaMagnifyingGlass></FaMagnifyingGlass>
                  </div>
                  <div className='logo_button'>
                    <span>+91-7052-101-789</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </header>
      {/* end header */}
      {/* banner */}
      <div className='banner'>
          <div className='banner_img'>
            <img src={banner}></img>
            <div className='banner_layer'>
              <div className='banner_info'>
                <h3>pure & organic natural products</h3>
                <h1>We Are The Best Natural</h1>
                <h2>Food</h2>
                <span>Explore More &nbsp;&nbsp;<FaArrowRightLong></FaArrowRightLong></span>
              </div>
              <div className='all_service'>
                <div className='single_service'>
                  <span><LuLeaf></LuLeaf></span>
                  <h3>Organic Product</h3>
                </div>
                <div className='single_service'>
                  <span><FaUsers></FaUsers></span>
                  <h3>Certified Team Expert</h3>
                </div>
                <div className='single_service'>
                  <span><TbBuildingWindTurbine></TbBuildingWindTurbine></span>
                  <h3>Green Energy</h3>
                </div>
                <div className='single_service'>
                  <span><FaHeadset></FaHeadset></span>
                  <h3>24/7 Premium Support</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* end banner */}
      {/* about */}
      <div className='about'>
        <div className='container'>
          <div className='spacer'>
            <div className='all_about'>
              <div className='about1'>
                  <h3>ABOUT US</h3>
                  <h1>We Have Been Milk Harvesting</h1>
                  <p>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational Aliquam at magna et mi interdum rhoncus quis sit amet lorem.</p>
                  <p>We are proud to offer top ranige in employment services such and asser payroll and benefits administrato managemen and asistance with global business range ployment employer readings from religious texts or literature are also commonly inc compliance.</p>
              </div>
              <div className='about2'>
                  <img src={about}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* STEPS */}
      <div className='steps'>
        <div className='container'>
          <div className='spacer'>
            <div className='all_steps'>
              <div className='steps1'>
                <img src={step}></img>
              </div>
              <div className='steps2'>
                  <h3>OUR STEPS</h3>
                  <h1>How We Work On Quality</h1>
                  <div className='single_step'>
                    <div className='step_img'>
                      <img src={step1}></img>
                    </div>
                    <div className='step_info'>
                      <h4>Wind Solar Energy</h4>
                      <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                    </div>
                  </div>
                  <div className='single_step'>
                    <div className='step_img'>
                      <img src={step2}></img>
                    </div>
                    <div className='step_info'>
                      <h4>Forest Planting</h4>
                      <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                    </div>
                  </div>
                  <div className='single_step'>
                    <div className='step_img'>
                      <img src={step3}></img>
                    </div>
                    <div className='step_info'>
                      <h4>Recycling Agriculture</h4>
                      <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end STEPS */}
      {/* GROW */}
      <div className='grow'>
        <div className='spacer'>
          <div className='container'>
            <div className='all_grow'>
              <h3>WHAT WE GROW</h3>
              <h1>Dcfarm Awesome &</h1>
              <h1>Fresh Products</h1>
              <div className='grow_all'>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service1}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Fresh Berries</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service2}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Dairy Products</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service3}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Ecological Farming</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service4}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Organic Products</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service5}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Fresh Vegetables</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
                <div className='single_grow'>
                  <div className='grow_img'>
                    <img src={service6}></img>
                  </div>
                  <div className='grow_info'>
                    <h3>Agriculture Products</h3>
                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end grow */}
      {/* NEWSLETTER */}
      <div className='spacer'>
        <div className='NEWSLETTER'>
          <div className='container'>
            <div className='all_news'>
              <div className='news_info'>
                <h3>NEWSLETTER</h3>
                <h1>Join Us & Get Special Offers From Us</h1>
              </div>
              <div className='news_filed'>
                <div className='email'>
                 <input placeholder='Email Address...' size="40"></input><span>Subscribe Now</span>
                </div>
              </div>
            </div>
          </div>
          <div className='video'>
            <div className='container'>
              <div className='video_img'>
                <img src={video_img}></img>
                <div className='video_layer'>
                  <span><FaPlay></FaPlay></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end NEWSLETTER */}
      {/* Projects */}
      <div className='project'>
        <div className='spacer'>
          <div className='container'>
            <div className='projects'>
              <h3>EXPLORE PROJECTS</h3>
              <h1>Our Recent Projects</h1>
              <ul className='project_menu'>
                <li className='active'>View All</li>
                <li>Cattles</li>
                <li>Equipment</li>
                <li>Farming</li>
                <li>Organic</li>
              </ul>
              <div className='all_project'>
                <div className='single_project'>
                  <img src={project1}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
                <div className='single_project'>
                  <img src={project2}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
                <div className='single_project'>
                  <img src={project3}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
                <div className='single_project'>
                  <img src={project4}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
                <div className='single_project'>
                  <img src={project5}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
                <div className='single_project'>
                  <img src={project6}></img>
                  <div className='project_layer'>
                    <div className='layer_button'>
                      <span><FiPlusCircle></FiPlusCircle></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end project */}
      {/* TESTIMONIAL */}
        <div className='testimonial'>
          <div className='container'>
            <div className='spacer'>
              <div className='all_testi'>
                <h3>OUR TESTIMONIAL</h3>
                <h1>What Our Clients Says</h1>
                <div className='testimonial_all'>
                  <div className='single_testi'>
                    <div className='testi'>
                      <div className='testi_img'>
                        <img src={testi1}></img>
                      </div>
                      <div className='testi_info'>
                        <h4>Jina Nilson</h4>
                        <h6>Client</h6>
                      </div>
                      <div className='testi_icon'>
                        <span><MdFormatQuote></MdFormatQuote></span>
                      </div>
                    </div>
                    <ul className='testi_review'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                    </ul>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                  </div>
                  <div className='single_testi'>
                    <div className='testi'>
                      <div className='testi_img'>
                        <img src={testi2}></img>
                      </div>
                      <div className='testi_info'>
                        <h4>Braitly Dcosta</h4>
                        <h6>Client</h6>
                      </div>
                      <div className='testi_icon'>
                        <span><MdFormatQuote></MdFormatQuote></span>
                      </div>
                    </div>
                    <ul className='testi_review'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                    </ul>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*end TESTIMONIAL */}
      {/* faq */}
      <div className='faq'>
        <div className='spacer'>
          <div className='container'>
            <div className='all_faq'>
              <div className='faq1'>
                <div className='single_faq'>
                  <p> 01 Cras turpis felis, elementum sed mi at arcu ?</p>
                  <span><MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></span>
                </div>
                <div className='single_faq'>
                  <p> 02 Vestibulum nibh risus, in neque eleifendulputate sem ?</p>
                  <span><MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></span>
                </div>
                <div className='single_faq'>
                  <p> 03 Donec maximus, sapien id auctor ornare ?</p>
                  <span><MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></span>
                </div>
              </div>
              <div className='faq2'>
                <h3>OUR FAQ</h3>
                <h1>Get every single answer here.</h1>
                <p>Aliquam at magna et mi interdum rhoncus quis sit amet lorem. Mauris aliquet, nunc blandit viverra aliquam, odio quam ultrices felis, eget aliquam ipsum libero ut enim. Sed sodales, tortor eget lacinia lacinia.</p>
                <p>usce vel pulvinar enim. Donec mollis augue sit amet venenatis eleifend. Duis nisl arcu, posuere nec ullamcorper nec, viverra nec nisi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end faq */}
      {/* blog */}
      <div className='blog'>
        <div className='spacer'>
          <div className='container'>
            <div className='all_blog'>
              <h3>OUR BLOG</h3>
              <h1>Latest Blog & News</h1>
              <div className='blog_all'>
                <div className='single_blog'>
                  <div className='blog_img'>
                    <img src={blog1}></img>
                  </div>
                  <div className='blog_social'>
                    <div className='single_social'>
                      <span><FaRegUser></FaRegUser></span>
                      <font>By admin</font>
                    </div>
                    <div className='single_social'>
                      <span><IoChatbubblesOutline></IoChatbubblesOutline></span>
                      <font>No Comments</font>
                    </div>
                  </div>
                  <div className='social_info'>
                    <h4>Cras accumsan nulla nec lacus ultricies placerat.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <span>Read More&nbsp;&nbsp;<GoArrowRight></GoArrowRight></span>
                  </div>
                  <div className='blog_date'>
                    <span><MdOutlineCalendarMonth></MdOutlineCalendarMonth>&nbsp;&nbsp;May 7, 2023</span>
                  </div>
                </div>
                <div className='single_blog'>
                  <div className='blog_img'>
                    <img src={blog2}></img>
                  </div>
                  <div className='blog_social'>
                    <div className='single_social'>
                      <span><FaRegUser></FaRegUser></span>
                      <font>By admin</font>
                    </div>
                    <div className='single_social'>
                      <span><IoChatbubblesOutline></IoChatbubblesOutline></span>
                      <font>No Comments</font>
                    </div>
                  </div>
                  <div className='social_info'>
                    <h4>Cras accumsan nulla nec lacus ultricies placerat.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <span>Read More&nbsp;&nbsp;<GoArrowRight></GoArrowRight></span>
                  </div>
                  <div className='blog_date'>
                    <span><MdOutlineCalendarMonth></MdOutlineCalendarMonth>&nbsp;&nbsp;May 7, 2023</span>
                  </div>
                </div>
                <div className='single_blog'>
                  <div className='blog_img'>
                    <img src={blog3}></img>
                  </div>
                  <div className='blog_social'>
                    <div className='single_social'>
                      <span><FaRegUser></FaRegUser></span>
                      <font>By admin</font>
                    </div>
                    <div className='single_social'>
                      <span><IoChatbubblesOutline></IoChatbubblesOutline></span>
                      <font>No Comments</font>
                    </div>
                  </div>
                  <div className='social_info'>
                    <h4>Cras accumsan nulla nec lacus ultricies placerat.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <span>Read More&nbsp;&nbsp;<GoArrowRight></GoArrowRight></span>
                  </div>
                  <div className='blog_date'>
                    <span><MdOutlineCalendarMonth></MdOutlineCalendarMonth>&nbsp;&nbsp;May 7, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end blog */}
      {/* sponser */}
      <div className='sponser'>
        <div className='spacer'>
          <div className='container1'>
            <div className='all_sponser'>
              <div className='single_sponser'>
                <img src={sponser1}></img>
              </div>
              <div className='single_sponser'>
                <img src={sponser2}></img>
              </div>
              <div className='single_sponser'>
                <img src={sponser3}></img>
              </div>
              <div className='single_sponser'>
                <img src={sponser4}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end sponser */}
      {/* footer */}
      <div className='footer'>
        <div className='spacer'>
          <div className='container'>
            <div className='all_footer'>
              <div className='footer1'>
                <div className='footer_logo'>
                  <img src={footer_logo}></img>
                </div>
                <p>Suspendisse non sem ante. Cras pretium gravida leo a convallis. Nam malesuada interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim.</p>
                <ul>
                  <li><FaFacebookF></FaFacebookF></li>
                  <li><FaInstagram></FaInstagram></li>
                  <li><FaTwitter></FaTwitter></li>
                </ul>
              </div>
              <div className='footer2'>
                <h3>Our Links</h3>
                <div className='heading_line'></div>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Faq</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className='footer3'>
                <h3>Contact Us</h3>
                <div className='heading_line'></div>
                <div className='footer3_icon'>
                  <span><FiPhone></FiPhone></span>
                  <div className='footer3_info'>
                    <p>+1 (444) 000-8888</p>
                    <p>+91 7052 101 786</p>
                  </div>
                </div>
                <div className='footer3_icon'>
                  <span><FaRegEnvelope></FaRegEnvelope></span>
                  <div className='footer3_info'>
                    <p>info@example.com</p>
                    <p>help@example.com</p>
                  </div>
                </div>
                <div className='footer3_icon'>
                  <span><IoLocationOutline></IoLocationOutline></span>
                  <div className='footer3_info'>
                    <p>1247/Plot No. 39, 15th Phase,</p>
                    <p>LHB Colony, Kanpur</p>
                  </div>
                </div>
              </div>
              <div className='footer4'>
                <h3>Latest Post</h3>
                <div className='heading_line'></div>
                <div className='single_footer'>
                  <div className='footer_img'>
                    <div className='img_post'>
                      <img src={post1}></img>
                    </div>
                    <div className='img_info'>
                      <p>Nothing impossble to need hard work</p>
                      <span>7 March,2023</span>
                    </div>
                  </div>
                  <div className='footer_img'>
                    <div className='img_post'>
                      <img src={post2}></img>
                    </div>
                    <div className='img_info'>
                      <p>Nothing impossble to need hard work</p>
                      <span>7 March,2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='end_footer'>
        <div className='container'>
          <div className='footer_last'>
            <p>Copyright © Dcfarm 2023 . All rights reserved.</p>
            <ul>
              <li><span><FaCircle></FaCircle></span>Privacy Policy</li>
              <li><span><FaCircle></FaCircle></span>Terms Of Service</li>
              <li><span><FaCircle></FaCircle></span>Legal</li>
            </ul>
          </div>
        </div>
      </div>
      {/* end footer */}
    </div>
  );
}

export default App;
