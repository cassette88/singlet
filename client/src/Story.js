import React from  'react';
import ball from './img/tb.jpg';




const divStyle ={
  backgroundImage: `url(${ball})`,
  //backgroundImage: 'url("https://images.unsplash.com/photo-1535480436112-07697fcbcbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31f51839cb4319385e043204acd13491&auto=format&fit=crop&w=400&q=60")',
 // backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  };

let title = "";
let quote = "";
let amp = "";


class Story extends React.Component  {
   constructor(props) {
        super(props);

        this.state = {
          newTennis: true,
          tennis:[]
        }

const storyTitle = this.props.title;
title = storyTitle.replace(/&#39;/g, "'");
quote = title.replace(/&quot;/g, " \" ");
amp = quote.replace(/&amp;/g, "and");

}




render(){
 return (   
   
  
  <div className="col-lg-4 col-md-6 col-sm-6" align="center">
     <div className="card-body">
    <img className="img-fluid bottom" src={require('./img/yianni-cam.jpg')} alt="wrestler" />

     
     <a href={this.props.link}><p className="cordele">{amp}....</p></a>
     {/* <img className="card-img-bottom" src={ball} alt="tennis ball" /> */}
     </div>
        </div>  



    );
  };
}

export default Story;