import React, {Component} from 'react'
import img from "./image.png";

let style = {
    backgroundColor : 'orange'

}

class Book extends Component {
    render (){
        console.log(this.props);
        const {title, author, price, category} = this.props
        return (
            <div style={style}>
                <h1>이번주 베스트셀러</h1>
                <img src={img}></img><br></br>
                <p>{title}</p>
                <span>{author}</span><br></br>
                <span>{price}</span><br></br>
                <span>{category}</span><br></br>
            </div>
        ) 
    }
}

export default Book;