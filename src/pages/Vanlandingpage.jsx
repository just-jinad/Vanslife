import React from 'react'


const Vanlandingpage = () => {
  return (
    <>
      <div className="myComponent p-5">
        <br /><br />
        <p className='text-center fs-1 fw-bold text-white '>You got the travel plans, we got the travel vans.</p>
        <p className='text-center'>Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
        <p></p>
        <button className='btn btn-transparent  col-12 fw-bold p-3 text-white' style={{backgroundColor:'#fe8d38', margin:"10% 0% "}}>Find your van</button>
    </div>
    <footer className=" bg-dark text-white p-4 ">
        <div
          className="row container mx-auto text-white"
          style={{ fontFamily: "Times New Roman" }}
        >
          <ul className="col-md-3 list-unstyled">
            <li className="text-warning fw-bold">
              <img
                style={{ height: "50px" }}
                src="https://i.pinimg.com/564x/95/e9/be/95e9bef7e2e35ee6992dd2a4f8f9b14b.jpg"
                alt=""
              />
            </li>
            <li className="fw-bold text-warning">Just-Jinad</li>
            <br />
            <li className="text-warning fw-bold">About Us</li>
            <li>
              <p>
                We want to help bring talented students And Startups together{" "}
              </p>
            </li>
          </ul>

          <ul className="col-md-3 list-unstyled">
            <li className="text-warning fw-bold">
              <h5>Contact Us</h5>
            </li>
            <li className="mb-2">
            <a href="https://www.linkedin.com/in/jinadtope/">
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-warning btn-floating mx-1 "
              >
                <i className="fab fa-linkedin"></i>
              </button></a>
            </li>

            <li className="mb-2">
              {" "}
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-warning btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>
            </li>
            <li className="mb-2">
              {" "}
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-warning btn-floating mx-1"
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </li>
          </ul>
          <ul className="col-md-3 list-unstyled">
            <li className="text-warning fw-bold">
              <h5>Helpful Links</h5>
            </li>
            <li>Services</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms and condition</li>
          </ul>
          <ul className="col-md-3 list-unstyled">
            <li>
              <h5>Subscribe to More Info</h5>
            </li>
            <li>
              <input
                className="rounded "
                type="text"
                placeholder="Enter Your Email"
              />
            </li>
            <li>
              <button className="btn btn-warning fw-bold text-white mt-2">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
        <hr />
        <p className="text-center">Copyright @ just_Jinad</p>
      </footer>
    </>
  )
}

export default Vanlandingpage