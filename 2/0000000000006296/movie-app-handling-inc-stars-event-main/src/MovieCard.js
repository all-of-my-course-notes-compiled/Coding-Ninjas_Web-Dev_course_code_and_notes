import React from "react";

class MovieCard extends React.Component{

    render(){
        
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  this.props.movies;
        
          
        return(
            //Movie Card
            <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => onDecStars(movies)}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                // No binding required as addStars() is an arrow function
                                onClick={() => onIncStars(movies)}
                            />
                            <span className="starCount">{stars}</span>
                        </div>

                        {/**conditional rendering on Favourite button */}
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  
                                onClick={() => onClickFav(movies)}> 
                                    
                                    {fav ? "Un-favourite":"Favourite"}

                        </button>
                            
                        {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  
                                onClick={() => onClickAddtocart(movies)}>
                                    
                                        {isInCart ? "Remove from Cart":"Add to Cart"}

                        </button>
                        
                    </div>
                </div>

            </div>
          
        )
    }
}

export default MovieCard;