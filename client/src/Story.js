import React from  'react';
import ball from './img/tb.jpg';
import yianni from './img/yianni-cam.jpg';




const divStyle ={
  backgroundImage: `url(${yianni})`,
  //backgroundImage: 'url("https://images.unsplash.com/photo-1535480436112-07697fcbcbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31f51839cb4319385e043204acd13491&auto=format&fit=crop&w=400&q=60")',
 // backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  };

let title = "";
let quote = "";
let amp = "";
let title_ = "";
let quote_ = "";
let amp_  = "";
let bold = "";
let bold_ = "";
let space = "";



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

const descript = this.props.description;
title_ = descript.replace(/&#39;/g, "'");
quote_ = title_.replace(/&quot;/g, " \" ");
amp_ = quote_.replace(/&amp;/g, "and");
bold = amp_.replace(/<b>/g, "");
bold_ = bold.replace(/<\/b>/g, "");
space = bold_.replace(/&nbsp;/g, "");

}




render(){
 return (   
   
  
  <div className="col-lg-4 col-md-6 col-sm-6" align="center">
     <div className="card-body bottom">
     <a href={this.props.link}><h3 className="cordele">{amp}....</h3>
    <img className="img-fluid bottom" src={require('./img/tb.jpg')} alt="wrestler" />
     <p className="headline">{space}</p></a>
     {/* <img className="card-img-bottom" src={ball} alt="tennis ball" /> */}
     </div>
        </div>  



    );
  };
}

export default Story;