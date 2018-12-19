import React from  'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
var uniqueRandomArray = require('unique-random-array');
// import ball from './img/tb.jpg';
// import yianni from './img/yianni-cam.jpg';


// let rBackImg = [require('./img/nick-wanzek-keilan-torres.jpg'),require('./img/yianni-cam.jpg')]

//const divStyle ={
  // backgroundImage: `url(${rBackImg})`,
  //backgroundImage: 'url("https://images.unsplash.com/photo-1535480436112-07697fcbcbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31f51839cb4319385e043204acd13491&auto=format&fit=crop&w=400&q=60")',
 // backgroundSize: 'contain',
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // };

let title = "";
let quote = "";
let amp = "";
let title_ = "";
let quote_ = "";
let amp_  = "";
let bold = "";
let bold_ = "";
let space = "";
var rImages = "";


class Story extends React.Component  {
   constructor(props) {
        super(props);

        
        rImages = uniqueRandomArray([require('./img/jaydin-eierman-nick-lee.jpg'),require('./img/micah-jordan-tyler-berger.jpg'), 
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
              require('./img/connor-schram-bracken-mead.jpg'),require('./img/mike-longo-alec-opsal.jpg' ),
              require('./img/jared-haught-cordell-eaton.jpg'),require('./img/dylan-lyndy.jpg'),
              require('./img/cory-reed.jpg'),require('./img/nathan-traxler-aaron-paddock.jpg'),
              require('./img/dean-heil-timmy-box.jpg'),require('./img/jason-tsirtsis-boo-lewallen.jpg'),
              require('./img/jonathon-chavez-zav-carson.jpg'),require('./img/jonathon-chavez-zav-carson.jpg'),
              require('./img/cordell-eaton-garret-strang.jpg'),require('./img/tyler-mcnutt-matt-waddell.jpg'),
              require('./img/bryce-meredith-mike-longo.jpg'),require('./img/willie-miklus-nate-rotert.jpg'),
              require('./img/tim-lambert-sergio-mendez.jpg'),require('./img/scott-marmoll-bubba-scheffel.jpg'),
              require('./img/colton-mccrystal.jpg'),require('./img/ricky-robertson-drew-foster.jpg'),
              require('./img/josh-rodriguez-christian-moody.jpg'),require('./img/nick-piccinnini-drew-templemann.jpg'),
              require('./img/1nick-piccinnini-drew-templemann.jpg'),require('./img/dylan-hyder-ronnie-stevens.jpg'),
              require('./img/1dylan-hyder-ronnie-stevens.jpg'),require('./img/willie-mikllus-christian-dulaney.jpg'),
              require('./img/armando-torres-channing-lewis.jpg'),require('./img/drew-foster.jpg'),
              require('./img/jacobe-smith-parker-vonegidy.jpg'),require('./img/jarrett-degen.jpg'),
              require('./img/brady-jennings-nate-higgins.jpg'),require('./img/brady-jennings-nate-higgins.jpg'),
              require('./img/marcus-coleman-kevin-gschwendtner.jpg'),require('./img/sam-colbray.jpg'),
              require('./img/gannon-gremmel-tommy-helton.jpg'),require('./img/brian-murphy-roger-pena.jpg'),
              require('./img/1zander-wick-eric-barone.jpg'),require('./img/hunter-wasburn.jpg'),
              require('./img/drake-randall-tyler-cowger.jpg'),require('./img/jake-elliot-grant-lamont.jpg'),
              require('./img/cayd-lara-joe-kelly.jpg'),require('./img/zac-wiley.jpg'),
              require('./img/ben-darmstaudt.jpg'),require('./img/mike-long-trevor-wilson.jpg'),
              require('./img/steven-lawrence-hunter-washburn.jpg'),require('./img/hunter-stieber-michael-nevinger.jpg'),
              require('./img/chaz-polson-dakota-juarez.jpg'),require('./img/zach-sherman-cam-sykora.jpg'),
              require('./img/paul-bianchi.jpg'),require('./img/zac-carson-branson-ashworth.jpg'),
              require('./img/ac-headlee.jpg'),require('./img/anthony-valencia-jonathan-carrera.jpg'),
              require('./img/dalton-macri-esco-walker.jpg'),require('./img/tyler-berger-seth-harrington.jpg'),
              require('./img/zach-sherman-cam-skycora.jpg'),require('./img/lorenzo-de-la-riva-logan-parks.jpg'),
              require('./img/trent-olsen-ethan-rotundo.jpg'),require('./img/matt-finesilver-keaton-subjeck2.jpg'),
              require('./img/matt-finesilver-keaton-subjeck.jpg'),require('./img/lorenzo-de-la-riva-logan-parks2.jpg'),
              require('./img/kyle-gilva-jacoby-ward.jpg'),require('./img/Jacob-Macalolooy-Hunter-Marko2.jpg'),
              require('./img/Jacob-Macalolooy-Hunter-Marko.jpg'),require('./img/Coleman-Hammond-Seth Harrington.jpg'),
              require('./img/Anthony-Lombardo-Hank-Swalla.jpg'),require('./img/Christian-Moody-Luke-Welch.jpg'),
              require('./img/Dominic-Forys-DJ-Lloren.jpg'),require('./img/Dominic-Forys-DJ-Lloren2.jpg'),
              require('./img/Hank-Swalla-Anthony-Lombardo2.jpg'),require('./img/Kanen-Storr-Mason Smith2.jpg'),
              require('./img/Kanen-Storr-Mason-Smith1.jpg'),require('./img/Kurt-Mode-Kenny-Astle.jpg'),
              require('./img/Matt-Wilhelm-Michael-Billingsley.jpg'),require('./img/Matthew-Schmitt-Jens-Lantz.jpg'),
              require('./img/Dylan-Lydy-Tyrel-White2.jpg'),require('./img/Dylan-Lydy2.jpg'),
              require('./img/Kyle-Gliva-Matt-Ontiveros.jpg'),require('./img/Luke-Pletcher-Korbin-Myers.jpg'),
              require('./img/Luke-Pletcher-Korbin-Myers2.jpg'),require('./img/Luke-Pletcher-Korbin Myers3.jpg'),
              require('./img/Micah-Jordan-Luke-Weiland.jpg'),require('./img/Micah-Jordan-Luke-Weiland2.jpg'),
              require('./img/Nate-Limmex-Tim-Rooney.jpg'),require('./img/Nicholas-Gil-Sal-Profaci.jpg'),
              require('./img/Russell-Rohfling-AC-Headlee.jpg'),require('./img/Russell-Rohfling-AC-Headlee2.jpg'),
              require('./img/Ryan-Christensen-Beau-Breske.jpg'),require('./img/Troy-Heilmann.jpg'),
              require('./img/Tyrel-White.jpg'),require('./img/Zach-Davis-Kennedy-Monday.jpg'),
              require('./img/Ali Naser vs Anthony Tutolo.png'),require('./img/Austin DeSanto vs Dom Forys.png'),
              require('./img/Bo-Jordan-Keaton-Subjeck-1566.png'),require('./img/Jeric-Kasunic-Matt-Williams.png'),
              require('./img/Jeric-Kasunic-Nathan-Traxler.png'),require('./img/Jeric-Kasunic-Nathan-Traxler2.png'),
              require('./img/Jeric-Kasunic-Nathan-Traxler3.png'),require('./img/Jeric-Kasunic-Nathan-Traxler4.png'),
              require('./img/Jeric-Kasunic.png'),require('./img/Josh-Shields-Coleman-Hammond.png'),
              require('./img/Ke_Shawn-Hayes-Michael-Sprague.png'),require('./img/Kollin-Moore-Matt-Williams.png'),
             require('./img/Nick-Zanetta-Kanen-Storr.png'),require('./img/Nick-Zanetta-Kanen-Storr2.png'),
              require('./img/Nick-Zanetta-Kanen-Storr3.png'),require('./img/Nick-Zanetta-Kanen-Storr4.png'),
              require('./img/Paul-Bianchi-Donald-Keeley.png'),require('./img/Paul-Bianchi-Donald-Keeley1.png'),
              require('./img/Stevie-Cervantes-Wade French.png'),require('./img/Stevie-Cervantes-Wade-French2.png'),
              require('./img/Zach-Zavatsky-Steven-Schneider.png'),require('./img/NIcholas-Gil3.png'),
         
              require('./img/Korbin-Myers-Zach-Sherman.png'),require('./img/Korbin-Myers-Zach-Sherman2.png'),
              require('./img/Luke-Pletcher-Stevan-Micic.png'),require('./img/Matt-Williams-3063.png'),
              require('./img/Matt-Williams-Stephen-Loiseau.png'),require('./img/NIcholas-Gil-Colt-Schilling.png'),
         
            ]);
        this.state = {
          newTennis: true,
          tennis:[]
        }

// var randomInt = Math.floor(Math.random() * this.rImages.length)
// rImage = this.rImages[randomInt]

const storyTitle = this.props.title;
title = storyTitle.replace(/&#39;/g, "'");
quote = title.replace(/&quot;/g, " \" ");
amp = quote.replace(/&amp;/g, "and");

let descript = this.props.description;
if (descript === null){
  descript = ""
}

// const descript = this.props.description;
title_ = descript.replace(/&#39;/g, "'");
quote_ = title_.replace(/&quot;/g, " \" ");
amp_ = quote_.replace(/&amp;/g, "and");
bold = amp_.replace(/<b>/g, "");
bold_ = bold.replace(/<\/b>/g, "");
space = bold_.replace(/&nbsp;/g, "");

}




render(){
 return (   
   
  
  <div className="col-lg-4 col-md-6 col-sm-6 space" align="center">
 
     <div className="card-body bottom">
     <h3 className="cordele">{amp}</h3>
     <Zoom>
     <img src ={rImages()} className="img-fluid bottom"  alt="wrestler" />
     </Zoom>
   
     <Fade bottom>
     <h2 className="cordele_2">{space}</h2>
     </Fade>
     {/* <img className="card-img-bottom" src={ball} alt="tennis ball" /> */}
     
     <a href={this.props.link}><button type="button"className="btn btn-primary nav-item navspace">Go to Story</button></a>
     
     </div>
        </div>  
// src={require('./img/tb.jpg')}


    );
  };
}

export default Story;