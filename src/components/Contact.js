import "./Contact.css"
function Contact(){

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    return(
        <div className="content-container">
            <h1>Contact Us</h1>
            <div class="container">  

            
  <form id="contact" action="" method="post" onSubmit={handleSubmit}>
   
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>

            
<div>


</div>
        
        </div>

    
        
    );
}
  export default Contact;