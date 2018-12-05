import React from  'react';
import ball from './img/tb.jpg';
import yianni from './img/yianni-cam.jpg';


let rBackImg = [require('./img/nick-wanzek-keilan-torres.jpg'),require('./img/yianni-cam.jpg')]

const divStyle ={
  backgroundImage: `url(${rBackImg})`,
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
var rImage = "";


class Story extends React.Component  {
   constructor(props) {
        super(props);

        
        this.rImages = [require('./img/jaydin-eierman-nick-lee.jpg'),require('./img/micah-jordan-tyler-berger.jpg'), 
                        require('./img/tb.jpg'),require('./img/yianni-cam.jpg'), require('./img/tariq-wilson.jpg'),
                        require('./img/drake-foster.jpg'), require('./img/zach-zavastsky.jpg'),
                      require('./img/cam-sykora-cam-kelly.jpg'), require('./img/jacob-schwarm.jpg'),
                      require('./img/dom-forys-corey-keener.jpg'), require('./img/dean-heil-evan-cheek.jpg'),
                      require('./img/vince-turk-cole-weaver.jpg'), require('./img/beau-donahue.jpg'),
                    require('./img/tyler-berger-joseph-velliquette.jpg'), require('./img/nick-wanzek-keilan-torres.jpg'),
                  require('./img/johnny-sebastian.jpg'), require('./img/zander-wick-eric-barone.jpg'),
                require('./img/andrew-schulte.jpg'),require('./img/shane-onufer-joe-latham.jpg'),
              require('./img/keaton-subjeck.jpg'),require('./img/nate-limmex.jpg'),
              require('./img/kanen-storr-mason-smith.jpg'),require('./img/drew-mattin-christian-moody.jpg'),
              require('./img/dane-pestano-mike-battista.jpg'), require('./img/bo-jordan-keaton-subjeck.jpg'),
              require('./img/connor-schram-bracken-mead.jpg') ]
        this.state = {
          newTennis: true,
          tennis:[]
        }

var randomInt = Math.floor(Math.random() * this.rImages.length)
rImage = this.rImages[randomInt]

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
   
  
  <div style={divStyle}className="col-lg-4 col-md-6 col-sm-6 space" align="center">
     <div className="card-body bottom">
     <h3 className="cordele">{amp}....</h3>
    <img src ={rImage} className="img-fluid bottom"  alt="wrestler" />
     <h2 className="cordele_2">{space}</h2>
     {/* <img className="card-img-bottom" src={ball} alt="tennis ball" /> */}
     <a href={this.props.link}><button type="button"className="btn btn-primary nav-item navspace">Go to Story</button></a>
     </div>
        </div>  
// src={require('./img/tb.jpg')}


    );
  };
}

export default Story;