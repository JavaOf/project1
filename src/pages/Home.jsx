import React from 'react'
import '../styles/home.css'
import icon4 from '../images/nike-4 1.png'
import icon5 from '../images/esprit-1 1.png'
import icon6 from '../images/apple-watch 1.png'
import icon7 from '../images/Group (1).png'
import icon8 from '../images/fitness-biceps.png'
import icon9 from '../images/Image.png'
import icon10 from '../images/Icon.png'
import i from '../images/I.png'
import i2 from '../images/i2.png'
export default function Home() {
  return (
    <div>
      <div className="parent_home1">
            <div className="parent_home2">
              <h1 className='font_home1'>For Your Health and Fitness Goals in No Time</h1>
              <p className='font_home2'>It doesn’t matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.</p>
              <button className='button_home1'>Book a Class</button>

              <div className='parent_home0'>
              <h1 className='font_home0'>Supported by:</h1>
              <div className="parent_home01">
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
                <img src={icon7} alt="" />
              </div>
            </div>
         
            <div className="global">
              <div className="item1">
                  <img src={icon8} alt="" className='item_img'/>
                  <h3 className='h3_home'>Personal Training</h3>
                  <p className='home_p'>It’s a long estabilished fact that a reader will be distracted by the readable content</p>
                  <h3 className='home_p'>Learn More</h3>
              </div>
              <div className="item2">
              <img src={icon8} alt="" className='item_img'/>
              <h3 className='h3_home'>Workout Programs</h3>
              <p className='home_p'>It’s a long estabilished fact that a reader will be distracted by the readable content</p>
              <h3 className='home_p'>Learn More</h3>
              </div>
              <div className="item3">
              <img src={icon8} alt="" className='item_img'/>
              <h3 className='h3_home'>Program & Diet</h3>
              <p className='home_p'>It’s a long estabilished fact that a reader will be distracted by the readable content</p>
              <h3 className='home_p'>Learn More</h3>
              </div>
            </div>

            </div>
            
      </div>
       

          <h1 className='fonts_q'>We offer something for everybody</h1>
     
       <div className="parent_q">
            
            <div className="boxing_1">
              <img src={icon8} alt="" className='i8' />
              <h3>Crush any strength program with our suite of strength equipment</h3>          
              <p><img src={icon10} alt="" />Fully fitted powerlifting and strongman section</p>
              <p><img src={icon10} alt="" />Olympic lifting platforms, weights, and bars</p>
              <p><img src={icon10} alt="" />Dumbells ranging 5lbs-250lbs</p>
              <div className='hr'></div>
              <button className='btn_q'>Join Now</button>
            </div>

            <div className="boxing_2">
                 <img src={icon9} alt="" className='icon9' />
            </div>
           
       </div>


       <div className="parent_q1">
       <div className="boxing_2">
                 <img src={i} alt="" className='icon9' />
            </div>
            <div className="boxing_3">
              <img src={i2} alt="" className='i8' />
              <h3>Be guided every step of the way with one of our world class coaches</h3>          
              <p><img src={icon10} alt="" />Weightloss</p>
              <p><img src={icon10} alt="" />Competitive CrossFit</p>
              <p><img src={icon10} alt="" />Powerlifting</p>
              <div className='hr'></div>
              <button className='btn_q'>Join Now</button>
            </div>
       </div>

      <div className="pur">
      <button className='btn_parent'>membership</button>
      <h1 className='fonts_qq'>Crushing your health and fitness goals starts here...</h1>
      </div>
    <div className="pur2">
      <div className="item_pur1">

        <div className="s_parent">
        <h1 className='s1'>$0</h1>
        <p className='s2'>/Month</p>
        </div>
        <p className='free'>Free Plan</p>
        <p className='p_s'><img src={icon10} alt="" />1 classes per month</p>
        <p className='p_s'><img src={icon10} alt="" />Access to online classes</p>
        <p className='p_s'><img src={icon10} alt="" />10 health & fitness guides</p>
        <button className='btn_s'>Puchase Plan</button>
      </div>
      <div className="item_pur2">
      <div className="s_parent">
        <h1 className='s1'>$149.00</h1>
        <p className='s2'>/Month</p>
        </div>
        <p className='free'>Basic Plan</p>
        <p className='p_s'><img src={icon10} alt="" />1 classes per month</p>
        <p className='p_s'><img src={icon10} alt="" />Access to online classes</p>
        <p className='p_s'><img src={icon10} alt="" />10 health & fitness guides</p>
        <button className='btn_s'>Puchase Plan</button>
      </div>
      <div className="item_pur3">
      <div className="s_parent">
        <h1 className='s1'>$289.00</h1>
        <p className='s2'>/Month</p>
        </div>
        <p className='free'>Professional Plan</p>
        <p className='p_s'><img src={icon10} alt="" />1 classes per month</p>
        <p className='p_s'><img src={icon10} alt="" />Access to online classes</p>
        <p className='p_s'><img src={icon10} alt="" />10 health & fitness guides</p>
        <button className='btn_s'>Puchase Plan</button>
      </div>
    </div>

    

     <div className="retro">
      <div className="pi">
      <h1 className='ho1'>Discover Your Potential</h1>
     <p className='ho2'>Workout was started by James and Mount in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle.</p>
      </div>
   <div className="pi2">
    <button className='bttn'>Get Started</button>
   </div>
     </div>
       
    </div>
  )
}