import React from 'react'

const Contact = () => {


  return (
   <div className="container mt-3 text-center">
    <div className="row">
     <div className="col-12">
      <h1>feel free to contact us</h1>
     </div>
     <div className="col-12 mt-3">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.562907408731!2d67.18592927375447!3d24.878773844527533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fe82b48417%3A0xd40b075ee3f123c4!2sMalir%2015%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688392990014!5m2!1sen!2s" width="100%" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
     <div className="col-md-6 offset-md-3 text-start mt-3">
     <form method='Post' action='https://formspree.io/f/mwkdejga'>
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" name='name' required/>
</div>
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
     </div>
    </div>
   </div>
  )
}

export default Contact
