import React, {useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
//import Carousal from '../components/Carousal'
//import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


export default function Home() {
  const[search,setSearch] = useState('');
  const [foodCat,setFoodCat] = useState([]);
  const [foodItem,setFoodItem] = useState([]);

  const loadData = async() => {
    let response = await fetch("http://localhost:4000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response = await response.json()

    setFoodItem(response[0])
    setFoodCat(response[1])
    //console.log(response[0],response[1]);
  }

useEffect(() =>{
  loadData()
},[])
  
  
  
  
  
  
  
  
  
  return (
    <div>
        <div><Navbar/></div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

    <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption d-flex justify-content-center" style={{ zIndex: "10" }}>
              <div className="d-flex search-form" style={{ maxWidth: "700px", width: "100%" }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                {/*<button className="btn btn-outline-success text-white bg -success" type="submit">Search</button>*/}
              </div>
      </div>
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900×700?burger" className="d-block w-100" alt="burger"/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900×700?pastry" className="d-block w-100" alt="pastry"/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900×700?samosa" className="d-block w-100" alt="samosa"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
        <div className='container'>
        {
                foodCat !== []
                // foodCat.length > 0
                ? foodCat.map((data) => {
                  return( <div className = 'row mb-3'>
                    <div key={data._id} className="fs-3 m-3">{data.CategoryName}
                    </div>
                     <hr /> 
                     {foodItem !== []
                    //  foodItem.length > 0
                     ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase(search)))).map(filterItems=>{
                      return(
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodName = {filterItems.name}
                          options={filterItems.options[0]}
                          imgSrc={filterItems.img}
                          ></Card>
                           </div>
                      )
                     }
                     ) :<div>No Such Data Found</div>}
                    </div>

                  )
                })
                :"" 
        } 
          
          </div>
        <div><Footer /></div>
    </div>
  )
}

//export default YourComponent
