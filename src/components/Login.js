/* eslint-disable */

import React from 'react';
import './style.css';
import { Redirect, browserHistory,createHashHistory} from 'react-router';
import List from './List';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'


class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        redirectToReferrer: false
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserLoginForm = this.submituserLoginForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    // form submition
    submituserLoginForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
    

    }

    //This method is used for validations
    validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;


      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }


      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.*[A-Z]).*$/)) {
          formIsValid = false;
          errors["password"] = "*password should contain one uppercase letter.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }

  render() {
    return (
      <div>
        <div id="main-registration-container">
         <div id="login">
            <h3>Login page</h3>
            <form method="post"  name="userLoginForm"  onSubmit= {this.submituserLoginForm} >
            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button"  value="Login"/>
        
            </form>
        </div>
        </div>
      </div>

      );
  }


}


export default Login;