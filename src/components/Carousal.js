
// Identical code from both branches, without the conflict markers
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption d-flex justify-content-center" style={{ zIndex: "10" }}>
              <form className="d-flex search-form" style={{ maxWidth: "700px", width: "100%" }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg -success" type="submit">Search</button>
              </form>
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
      </div>
    </div>
  )
}

