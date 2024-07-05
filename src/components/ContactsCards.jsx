import photo from '../assets/profile.png'
import garbagecan from '../assets/garbagecan.png'
import heart from '../assets/heart.png'
import '../scss/Overview.scss'


function ContactsCards ({contact, removeContactHandler}){
return (

<>
<section className='card'>
  <div className='cardProfile'>
     <div className='cardName'>
        <img className='photo'  src={photo} alt="" />
       <h2 className='nameCard'> </h2>
       <p className='mailCard'>  </p>
       <hr />
       <div className='buttons'>
       <a className='like_btn'><img className='heart' src={heart} alt="" /></a>
       <a className='delete_btn'>
              <img className='garb_can' src={garbagecan} alt="" />
       </a>
       </div>
     </div>
  </div>
 
</section>
</>




)



}


export default ContactsCards