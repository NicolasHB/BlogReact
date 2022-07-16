import React from 'react'

export default function Cards() {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src="Capture d’écran 2022-06-09 à 15.58.25.png" alt="CarCrash" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
          reiciendis voluptatem vero exercitationem dolorum similique ratione
          ipsam, nostrum rerum!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
