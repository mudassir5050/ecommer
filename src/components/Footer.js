import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-3 bg-dark">
        <div className="container text-white  " style={{padding: "70px 0px"}}>


          <div className="row">
            <div className="col-3">
              <h4>Mudassir</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam vel praesentium. Ipsa repellat molestiae, ut esse pariatur magni fugiat quasi voluptate perspiciatis.</p>
            </div>
            <div className="col-3">
              <h4>Subscribe to get new update</h4>
              <form>
                <div className="form-group mt-2 mb-2">

                  <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-3">
              <h4>follow us</h4>
            </div>
            <div className="col-3">
              <h4>contact us</h4>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>copyright</p>
              </div>
              <div className="col-6">
                <p>policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
