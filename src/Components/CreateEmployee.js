import React, { Component } from 'react';
import Navigation from './Navigation';

class CreateEmployee extends Component {

   
    render() {

        this.Depts = {
            values: [
             {name:'Select the Department',id:1},
              { name: 'SDU', id: 2 },
              { name: 'T&F', id: 3 },
              { name: 'T&E', id: 4 },
              { name: 'Dove', id:5 }
            ],
            designation: [
                {name:'Select the Designation',id:1},
                 { name: 'Manager', id: 2 },
                 { name: 'CEO', id: 3 },
                 { name: 'Employee', id: 4 },
                 { name: 'Consultant', id:5 }
               ],
               gender:[
                   {name:'Select the Gender',id:1},
                   {name:'Female',id:2},
                   {name:'Male',id:3},

               ],
               location:[
                {name:'Select the Location',id:1},
                {name:'Puducherry',id:2},
                {name:'Chennai',id:3},

            ],
          };
        let Dept = this.Depts.values.map(v => (
            <option value={v.id}>{v.name}</option>
          ));
        let Designation=this.Depts.designation.map(d=>(<option value={d.id}>{d.name}</option>));
        let Gender=this.Depts.gender.map(d=>(<option value={d.id}>{d.name}</option>));
        let Location=this.Depts.location.map(d=>(<option value={d.id}>{d.name}</option>));




      return (
        <div>
            <Navigation />
            {/* Beginning of the form  */}
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
            <form class="form-horizontal card-body" >
            <h5 class="card-header bg-dark text-white text-center py-4">
                         <strong>Employee Form</strong>
                   </h5>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon pull-left"></i></span>
                            <div class="col-md-6">
                                <input id="fname" name="name" type="text" placeholder="First Name" class="form-control"/>
                            </div>
                        </div>
               

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon pull-left"></i></span>
                            <div class="col-md-6">
                                <input id="email" name="email" type="text" placeholder="Email Address" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon pull-left"></i></span>
                            <div class="col-md-6">
                                <input id="phone" name="phone" type="text" placeholder="Mobile" class="form-control"/>
                            </div>
                        </div>
                  
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-female bigicon pull-left"></i></span>
                            <div class="col-md-6">
                                <select class="form-control">{Gender}</select>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-map-marker bigicon pull-left"></i></span>
                            <div class="col-md-6">
                                <select class="form-control">{Location}</select>
                            </div>
                        </div>

                        <div class=" form-group row  ">
                        <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-address-card bigicon pull-left"></i></span>
                            <select class="form-control">{Designation}</select>                       
                        </div>
                        <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-suitcase bigicon pull-left"></i></span>                           
                                <select class="form-control">{Dept}</select>
                            </div>
                        </div>



                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon pull-left"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                 
                </form>
            </div>
        </div>
    </div>
</div>
{/* End of the form  */}
        </div>
      );
    }
  }
  
  export default CreateEmployee;