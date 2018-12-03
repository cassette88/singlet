import React from  'react';




const divStyle ={
 // backgroundImage: `url(${ball})`,
  //backgroundImage: 'url("https://images.unsplash.com/photo-1535480436112-07697fcbcbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31f51839cb4319385e043204acd13491&auto=format&fit=crop&w=400&q=60")',
 // backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  
};

let title = "";
let quote = "";
let amp = "";

// let howbahdatnow = '';
// let howbahdis = "";
// let howbahdisnow = howbahdis.split('&');
// const AO = '15448895809267087340';
// const RG = '12841317596821167479';
//let   id = '7130462090718037575'

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

//howbahdatnow = howbahdat.split('&');



}

// fetchRss (id) {

//   axios.get(`/rss/${id}`)
//   .then(res => {
//      const tennis = res.data.items;
//     // (console.log(res.data));
//       this.setState({tennis: tennis});
//       this.setState({newTennis: false})
//       howbahdisnow = howbahdis.split('&');
//   })
//   .catch(err => console.log(err));

// }


render(){
 return (   
   
   
     
      <div className="col-lg-4 col-md-6 col-sm-6" align="center" style={divStyle}>
     <div className="card-body">
    {/* <img className="card-img-top" src={require('./ball.png')} alt="tennis ball" /> */}

     
     <a href={this.props.link}><p className="cordele">{amp}....</p></a>
     {/* <img className="card-img-bottom" src={ball} alt="tennis ball" /> */}
     </div>
        </div>  



    );
  };
}

export default Story;