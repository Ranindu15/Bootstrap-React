mport React,{Component} from 'react';
//import axios from 'axios';


export default class Create extends Component{

    render(){
        return (

                <div>
                        <h1>Add New Hero</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Add Hero Name </label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="form-group ">
                                <label className="font-weight-bold text-black-50">Add Hero Planet </label>
                                <input type="text" className="form-control"/>
                            </div>
