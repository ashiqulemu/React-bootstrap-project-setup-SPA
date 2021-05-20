
import { React, Component } from "react"


export default class Footer extends Component {

    constructor() {
        super();
        this.state = {
            hello: ' ',
        }
    }

    render() {
        return (
            <p className='bg-dark p-3 text-white'>Footer</p>
        )
    }

}