
import {React,Component} from 'react'

export default class About extends Component{

    constructor(){
        super();
        this.state = {
            options:''
        }
    }

    render(){
        return (
            <section>
                <div class='container'>
                    <h2>About</h2>
                </div>
            </section>
        )
    }

}