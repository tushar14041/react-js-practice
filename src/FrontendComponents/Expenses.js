import React, { Component } from 'react'

class Expenses extends Component {


    constructor(props){
        super(props)
  
    this.state = { 
        list:[
            {
                cid:101,
                category : '',
                subCategory : '',
                title:'', 
                link:'', 
                platform:'', 
                level:'', 
                language:'', 
                tutorName:'', 
                website:'', 
                desciption:''
            }
        ]
       
       }
     
    }
 
    
    async componentDidMount() {
        const response= await fetch('/all');
        const body= await response.json();
        this.setState({list : body});
        console.log(body);
        }
    render() {
      
        const {list}=this.state;

      let  show  =
        list.map( (l) =>
            <div key={l.cid}>
                        {l.title} 
            </div>
        ) 
        
        return (
            <div>
               Hello world <br/>
               {/* { console.log(`hello world ${list[0].cid}`) } */}
               {/* {this.show} */}
               {list[0].cid} <br/>
               {list[0].title}<br/>
               {list[0].category}<br/>
               {list[0].desciption}<br/>
               {list[0].language}<br/>
               {list[0].language}<br/>
               {list[0].level}<br/>
               {list[0].link}<br/>
               {list[0].subCategory}<br/>
               {list[0].tutorName}<br/>
               {list[0].website}<br/>


            </div> 
        )
    }
}

export default Expenses
