import "./Image.css";

function Image() {
    return <div className="content-container">
        <div className="row">
            <div className="left-panel box">
            <img className='image' src="https://www.pagalguy.com/wp-content/uploads/2018/12/IMG_93121-optimized.jpg" alt="Vivekananda_college. logo"/>
            </div>
            
            <div className="right-panel box">
                <div className="container" >
                <h1 id="campus">  Campus</h1>
                <p id ="content">
                Spread across roughly 4 acres of land at the heart of Chembur, the college comprises of two buildings. The Main Building, it houses the Principal’s Office & the Administrative Office, an Auditorium, an AV Room, the Central<br />
                Instrumentation Facility, Computer Labs, the Arts, Science & Commerce Departments, the Staffroom, Classrooms, etc.
                  </p>
                  <button className ="button">
                    Read more
                  </button>
                    </div>           
                     </div>
       </div>
    </div>
}
export default Image;