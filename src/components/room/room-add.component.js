import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

export class CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.onChangeHotelName = this.onChangeHotelName.bind(this);
        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeNumOfPeople = this.onChangeNumOfPeople.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeFeature1 = this.onChangeFeature1.bind(this);
        this.onChangeFeature2 = this.onChangeFeature2.bind(this);
        this.onChangeFeature3 = this.onChangeFeature3.bind(this);
        this.onChangeFeature4 = this.onChangeFeature4.bind(this);
        this.onChangeFeature5 = this.onChangeFeature5.bind(this);
        this.onChangeFeature6 = this.onChangeFeature6.bind(this);
        this.onChangeFeature7 = this.onChangeFeature7.bind(this);
        this.onChangeFeature8 = this.onChangeFeature8.bind(this);
        this.onChangeFeature9 = this.onChangeFeature9.bind(this);
        this.onChangeFeature10 = this.onChangeFeature10.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            hotelName: '',
            roomName: '',
            description: '',
            size: '',
            numofPeople:'',
            view: '',
            feature1:'',
            feature2: '',
            feature3:'',
            feature4: '',
            feature5:'',
            feature6:'',
            feature7: '',
            feature8:'',
            feature9: '',
            feature10:'',
        }
    }

    onChangeHotelName(e) {
        this.setState({
            hotelName: e.target.value
        });
    }

    onChangeRoomName(e) {
        this.setState({
            roomName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onChangeNumOfPeople(e) {
        this.setState({
            numofPeople: e.target.value
        });
    }

    onChangeView(e) {
        this.setState({
            view: e.target.value
        });
    }

    onChangeFeature1(e) {
        this.setState({
            feature1: e.target.value
        });
    }

    onChangeFeature2(e) {
        this.setState({
            feature2: e.target.value
        });
    }

    onChangeFeature3(e) {
        this.setState({
            feature3: e.target.value
        });
    }

    onChangeFeature4(e) {
        this.setState({
            feature4: e.target.value
        });
    }

    onChangeFeature5(e) {
        this.setState({
            feature5: e.target.value
        });
    }

    onChangeFeature6(e) {
        this.setState({
            feature6: e.target.value
        });
    }

    onChangeFeature7(e) {
        this.setState({
            feature7: e.target.value
        });
    }

    onChangeFeature8(e) {
        this.setState({
            feature8: e.target.value
        });
    }

    onChangeFeature9(e) {
        this.setState({
            feature9: e.target.value
        });
    }

    onChangeFeature10(e) {
        this.setState({
            feature10: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const rooms = {
            hotelName: this.state.hotelName,
            roomName: this.state.roomName,
            description: this.state.description,
            size: this.state.size,
            numofPeople: this.state.numofPeople,
            view: this.state.view,
            feature1: this.state.feature1,
            feature2: this.state.feature2,
            feature3: this.state.feature3,
            feature4: this.state.feature4,
            feature5: this.state.feature5,
            feature6: this.state.feature6,
            feature7: this.state.feature7,
            feature8: this.state.feature8,
            feature9: this.state.feature9,
            feature10: this.state.feature10,

        }

        console.log(rooms);

        // if (this.state.fullName.length < 6) {
        //     this.setState({ fullNameError: "Your Name is too short" })
        // } else if (!this.state.email || regex.test(this.state.email) === false) {
        //     this.setState({ emailError: "Please Enter a valid email." })
        // } else if (this.state.contactNo.length != 10) {
        //     this.setState({ contactError: "Please Enter a valid Phone Number." })
        // } else if (this.state.address.length < 10) {
        //     this.setState({ addressError: "Your address is too short." })
        // } else {

            axios.post('http://localhost:5000/room/', rooms)

                .then(res => {

                    console.log(res);

                    if (res.status === 200) {

                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Room has been added!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })
                        this.clearData();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in adding!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                })
            // window.location = '/customer';
            // }
        // }
    }

    clearData = () => {
        this.setState({
            hotelName: '',
            roomName: '',
            description: '',
            size: '',
            numofPeople:'',
            view: '',
            feature1:'',
            feature2: '',
            feature3:'',
            feature4: '',
            feature5:'',
            feature6:'',
            feature7: '',
            feature8:'',
            feature9: '',
            feature10:'',
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">

                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>

                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>
                                            Add Room Details
                                        </p>

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Hotel Name</label>
                                            <select type="text"
                                                required
                                                className="form-control "
                                                value={this.state.hotelName}
                                                onChange={this.onChangeHotelName}
                                            >
                                                 <option>Select From Here</option>
                                                <option>Jetwing Sea</option>
                                                <option>Jetwing Blue</option>
                                                <option>Jetwing Colombo Seven</option>

                                            </select>
                                            <p/>
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p> */}
                                        </div>

                                      
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Room Name</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.roomName}
                                                    onChange={this.onChangeRoomName}
                                                />
                                                
                                                <p/>{/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p> */}
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Description</label>
                                                <textarea type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}
                                                />
                                                  <p/>
                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p> */}
                                            </div>
                                       
                                           
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Size</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.size}
                                                onChange={this.onChangeSize}
                                            />
                                                

                                           
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                        <p/>

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Num Of People</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.numofPeople}
                                                onChange={this.onChangeNumOfPeople}
                                            />
                                                

                                           
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>View</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.view}
                                                onChange={this.onChangeView}
                                            />
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                       
                                       
                                        <p/>
                                        
                                      
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 1
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature1}
                                                onChange={this.onChangeFeature1}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 2
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature2}
                                                onChange={this.onChangeFeature2}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 3
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature3}
                                                onChange={this.onChangeFeature3}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 4
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature4}
                                                onChange={this.onChangeFeature4}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 5
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature5}
                                                onChange={this.onChangeFeature5}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 6
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature6}
                                                onChange={this.onChangeFeature6}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 7
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature7}
                                                onChange={this.onChangeFeature7}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 8
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature8}
                                                onChange={this.onChangeFeature8}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 9
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature9}
                                                onChange={this.onChangeFeature9}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                Feature 10
                                            </label>
                                            <input type="text"
                                       
                                                className="form-control"
                                                value={this.state.feature10}
                                                onChange={this.onChangeFeature10}
                                            />
                                                 
                                                 
                                            {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p> */}
                                        </div>
                                    
                                        
                                        <p/>

                                        
                                      

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Room" />
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}