 
import {React, Component } from "react"
 

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            hello:'hi im react state property from home component',
        }
    }

    render(){
        return (
           <section>
               <div class='container'>
                    <h2>Home</h2>
               </div>
           </section>
        )
    }

}
