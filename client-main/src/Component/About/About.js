import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './About.css';
const About = () => {
    return (
      <>
       <Header></Header> 
        <div className='container row mx-auto' >

            <div className='card col-md-6 '>
<img
className="card__image"
src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/391617016_1801687993562800_4145781691987711610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SbtzkvaynZgAX9am97d&_nc_ht=scontent.fuln6-1.fna&oh=00_AfC_jWe4k8dUOinHQrSk1pRWlA4UCuqak6sMtG67VqdVvg&oe=6570F78E" alt="" />
<p class="card__name"> Шүрэнцэцэг</p>
<div className='grid-container'>
<div className='grid-child-posts'>
156 Post
</div>
<div className='grid-child-followers'>
100Like
</div>
</div>

<ul class="social-icons">
      <li><Link href="#"><i class="fab fa-facebook"></i></Link></li>
      <li><Link href="#"><i class="fab fa-github"></i></Link></li>
      <li><Link href="#"><i class="fab fa-linkedin"></i></Link></li>
      <li><Link href="#"><i class="fab fa-codepen"></i></Link></li>
    </ul>
  <h4>  Contact:  shvrentsetseg@autohunt.com </h4>
    <button class="btn1 draw-border">Дагах</button>
    <button class="btn1 draw-border">Мэссэж бичих</button>

            </div>



            <div className='card col-md-6'>
<img
className="card__image"
src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/275055696_3030770113852092_4360057942654861836_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sm9idInLiMQAX_cNqPh&_nc_ht=scontent.fuln6-1.fna&oh=00_AfBsh-Jca32HsHMwxxjFiPvO94rq7zZbtKZske2VYrIhHg&oe=65716CD7" alt="" />
<p class="card__name"> Болор-Эрдэнэ</p>
<div className='grid-container'>
<div className='grid-child-posts'>
156 Post
</div>
<div className='grid-child-followers'>
100Like
</div>
</div>

<ul class="social-icons">
      <li><Link href="#"><i class="fab fa-instagram"></i></Link></li>
      <li><Link href="#"><i class="fab fa-twitter"></i></Link></li>
      <li><Link href="#"><i class="fab fa-linkedin"></i></Link></li>
      <li><Link href="#"><i class="fab fa-codepen"></i></Link></li>
    </ul>
<h4>    Contact:  Bolorerdene@autohunt.com</h4>
<button class="btn1 draw-border">Дагах</button>
    <button class="btn1 draw-border">Мэссэж бичих</button>

            </div>
           
        </div>
        </>
    );
};

export default About;