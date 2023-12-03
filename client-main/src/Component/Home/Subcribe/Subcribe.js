import React from 'react';
import './Subcribe.css';
const Subcribe = () => {
    return (
        <div>
            <section className="newsletter"> 

            <h3>Шинэ мэдээллийг шууд авах</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.</p>
    <form action="">
        <input className='EMAIL' type="email" placeholder="И-Мэйл авах"/>
        <input className='SUB' type="submit" value="бүртгүүлэх"/>
   </form>
                
            </section>
        </div>
    );
};

export default Subcribe;