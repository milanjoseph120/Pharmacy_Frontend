import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
//  <>
//     <div style={{width:"100%", height:"300px" ,backgroundColor:""}} className='d-flex justify-content-center align-items-center flex-column mt-5 '>
//     <div className='footer d-flex justify-content-evenly align-items-center w-100 mt-5'>
//        <div className='website mt-5' style={{width:"300px"}}>
//            <h4>
//            <i class="fa-solid fa-prescription-bottle-medical"></i>{' '}
//              Take it easy<br/>
//              <span className='ms-4 fw-bold' style={{color:"green"}}>PharmEasy</span>   
//            </h4>
//            <p>PharmEasy offers medicines and health products across various categories through its retail partners which are spread across the country and you can book diagnostic test online. You can simply place an order on our website/app and we will deliver your online medicine order in as low as 4 hours, with a guaranteed delivery to you in 24-48* hrs!
//            You can either pay online or opt for COD for your orders.
//            </p>

//        </div>
//        <div className='links d-flex flex-column '>
//          <h3>Links</h3>
//          <Link to={'/'}  style={{textDecoration:"none" , color:"black"}}>Home Page</Link>
//          <Link to={'/Login'} style={{textDecoration:"none" , color:"black"}}>Login Page</Link>
//          <Link to={'/Register'}  style={{textDecoration:"none" , color:"black"}}>Register page</Link>
//          <Link to={'/labtest'}  style={{textDecoration:"none" , color:"black"}}>Lab Test</Link>
//          <Link to={'/medicine'}  style={{textDecoration:"none" , color:"black"}}>Medicine Store</Link>


//          {/* <Link   style={{textDecoration:"none" , color:"black"}}></Link>
//          <Link   style={{textDecoration:"none" , color:"black"}}></Link> */}
//        </div>
//        <div className='guides d-flex flex-column '>
//        <h3>Our Services</h3>
//          <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}>Order Medicine</Link>
//          <Link to={'https://react-bootstrap.netlify.app/'}  style={{textDecoration:"none" , color:"black"}}>HealthCare Products</Link>
//          <Link to={'https://bootswatch.com/'}  style={{textDecoration:"none" , color:"black"}}>Lab Test</Link>
//        </div>
//        <div className='contact'>
//          <h4 className='mb-3 '>Contact US</h4>
//          <div className='d-flex mb-4'>
//            <input type="text" className='form-control' placeholder='enter ur email id' />
//            <button className='btn btn-info text-white ms-3'>Subcribe</button>
//          </div>
//          <div className='icons d-flex justify-content-evenly'>
//               <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-instagram"></i></Link>

//               <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-twitter"></i></Link>

//               <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-facebook"></i></Link>

//               <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-linkedin"></i></Link>
//          </div>
//        </div>
//     </div>
//     <div className='payment'>
//          <h4>Our Payment Partners</h4>
//          <div className='d-flex mb-4 justify-content-evenly'>
//             <Link  style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-paypal fa-bounce fa-xl"></i></Link>
//             <Link  style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-google-pay fa-bounce fa-xl"></i></Link>
//             <Link  style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-apple-pay fa-bounce fa-xl"></i></Link>
//          </div>
//        </div>
//     <p><center>Copyright @ 2023 Pharmacy Website.Built with React</center></p>
// </div></>


<>
  <div className='container-fluid' style={{ backgroundColor: "" }}>
    <div className='row d-flex justify-content-center align-items-center flex-column mt-5'>
      <div className='footer d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
        <div className='website mt-5' style={{ maxWidth: "300px" }}>
          <h4>
            <i className="fas fa-prescription-bottle-medical"></i>{' '}
            Take it easy<br />
            <span className='ms-4 fw-bold' style={{ color: "green" }}>PharmEasy</span>
          </h4>
          <p>PharmEasy offers medicines and health products across various categories through its retail partners. You can book diagnostic tests online. Simply place an order on our website/app, and we will deliver your online medicine order in as low as 4 hours, with guaranteed delivery to you in 24-48* hrs! You can either pay online or opt for COD for your orders.</p>
        </div>
        <div className='links d-flex flex-column '>
          <h3>Links</h3>
          <a href={'/'} className='text-decoration-none text-dark'>Home Page</a>
          <a href={'/Login'} className='text-decoration-none text-dark'>Login Page</a>
          <a href={'/Register'} className='text-decoration-none text-dark'>Register page</a>
          <a href={'/labtest'} className='text-decoration-none text-dark'>Lab Test</a>
          <a href={'/medicine'} className='text-decoration-none text-dark'>Medicine Store</a>
        </div>
        <div className='guides d-flex flex-column '>
          <h3>Our Services</h3>
          <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'>Order Medicine</a>
          <a href={'https://react-bootstrap.netlify.app/'} className='text-decoration-none text-dark'>HealthCare Products</a>
          <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'>Lab Test</a>
        </div>
        <div className='contact'>
          <h4 className='mb-3'>Contact US</h4>
          <div className='d-flex mb-4'>
            <input type="text" className='form-control' placeholder='enter ur email id' />
            <button className='btn btn-info text-white ms-3'>Subscribe</button>
          </div>
          <div className='icons d-flex justify-content-evenly'>
            <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'><i className="fab fa-instagram"></i></a>
            <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'><i className="fab fa-twitter"></i></a>
            <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'><i className="fab fa-facebook"></i></a>
            <a href={'https://bootswatch.com/'} className='text-decoration-none text-dark'><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className='payment mt-1'>
        <h4 className='d-flex justify-content-center'>Our Payment Partners</h4>
        <div className='d-flex mb-4 justify-content-evenly mt-2'>
          <a href='#' className='text-decoration-none text-dark'><i className="fab fa-paypal fa-bounce fa-xl"></i></a>
          <a href='#' className='text-decoration-none text-dark'><i className="fab fa-google-pay fa-bounce fa-xl"></i></a>
          <a href='#' className='text-decoration-none text-dark'><i className="fab fa-apple-pay fa-bounce fa-xl"></i></a>
        </div>
      </div>
      <p className='text-center'>Copyright @ 2023 Pharmacy Website. Built with React</p>
    </div>
  </div>
</>

  )
}

export default Footer