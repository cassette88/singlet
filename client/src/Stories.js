import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';
const uuidv4 = require('uuid/v4');

export default class Stories extends Component {
    constructor(props){
        super(props);
        this.fetchRss = this.fetchRss.bind(this);
        this.state = {
            headlines: []
        }
    }

    fetchRss (id) {

        axios.get(`/news/${id}`)
        .then(res => {
           const headlines = res.data;
          // (console.log(res.data));
            this.setState({headlines});
        })
        .catch(err => console.log(err));
    
    }

    componentDidMount() {
    
        axios.get('/news/ncaa')
        .then(res => {
           const headlines = res.data;
          // (console.log(res.data));
            this.setState({headlines});
        })
        .catch(err => console.log(err));
        // (console.log(res.data.items));
    
    }

    render() {
        
        let headlines = null;
        headlines = (
                
                <div className="d-flex flex-row flex-wrap justify-content-around">
                 { this.state.headlines.map((headline) => {
                     const id_ = uuidv4();
                  return  <Story headline={this.state.headlines}
                  
                             key={id_}
                             title= {headline.title}
                            // content={headline.contentSnippet}
                             link={headline.link}
                              /> 
                         })}
                    </div>                  
                        );    
        
                    return (
                        
                        <div>
                        {/* <div className="d-flex flex-row justify-content-center"> */}
                       <div>
                        <div>
                        <ol className="nav justify-content-center">
                       <button type="button"className="btn btn-primary nav-item navspace" onClick={this.fetchRss.bind(this, "ncaa")}>Ncaa</button>
                       <button type="button" className="btn btn-primary nav-item navspace"  onClick={this.fetchRss.bind(this, "general")}>General</button>
                       <button type="button" className="btn btn-primary nav-item navspace" onClick={this.fetchRss.bind(this, "college")}>College</button>

                       </ol>
                        </div>
                        </div>
                        <div className="row d-flex flex-row tester">
                      {headlines}
                        </div>
                        </div>
                            )
        
                    }
}
