import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.webp";

function Footer(){
  return(
   <div>
     <div className="py-32">
       <div className="container">
         <div className="grid grid-cols-1 sm:grid-cols-12">
           <div className="sm:col-span-6 lg:col-span-4">
             <div className="flex flex-col mr-12 xl:mr-100">
               <Link to={'/'} className="mb-10 nuxt-link-active">
                 <img src={logo} alt={''}/>
               </Link>
               <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Наши социальные сети</font></font></p>
               <ul className="flex mt-4">
                 <li className="mr-4 last:mr-0">
                   <Link to={'https://vk.com/kosmos_tr'} className="kosmos w-10 h-10 leading-10 text-center inline-block">
                     <i className="icofont-vk text-white"></i>
                   </Link>
                 </li>
                 <li className="mr-4 last:mr-0">
                   <Link to={'https://t.me/kosmosmatrix'} className="telegram w-10 h-10 leading-10 text-center inline-block">
                     <i className="icofont-telegram text-white"></i>
                   </Link>
                 </li>
                 <li className="mr-4 last:mr-0">
                   <Link to={'https://www.youtube.com/channel/UC_uER-pkXylg1Ji_ueNbpJg'} className="youtube w-10 h-10 leading-10 text-center inline-block">
                     <i className="icofont-youtube text-white"></i>
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
           <div className="sm:col-span-6 lg:col-span-2 mt-10 lg:mt-0">
             <div>
               <div className="xl:mb-14 sm:mb-8 mb-6">
                 <h3 className="xl:text-2xl text-xl text-white uppercase font-bold leading-8"><font
                   style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Контакт</font></font></h3>
               </div>
               <div className="flex flex-col mb-5 pr-5 xl:pr-0"><span className="text-primary mb-3"><font
                 style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Телефон:</font></font></span>
                 <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>+79899868205</font></font></p></div>
               <div className="flex flex-col"><span className="text-primary mb-3"><font
                 style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Email:</font></font></span>
                 <a href={"kosmos@gmail.com"} className="text-white hover:text-primary transition-all"><font
                   style={{verticalAlign: 'inherit'}}><font
                   style={{verticalAlign: 'inherit'}}>kosmos@gmail.com</font></font></a></div>
             </div>
           </div>

         </div>
       </div>
     </div>
   </div>
  )
}
export default Footer
