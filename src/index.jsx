import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Requirement from "./requirement.jsx";
import Input from "./input.jsx";

class RegistartionForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "", email: "", checkLogin: false, checkPassword: false, checkEmail: false };
  }
  checkInputLogin = (value) => {
    let regExp = /\w{2,}/;

    if (regExp.test(value)) {
      this.setState({ checkLogin: true });
    } else if (!regExp.test(value)) {
      this.setState({ checkLogin: false });
    }
  }
  checkPassword = (value) => {
    let regExp = /([A-Z]+[0-9]+[a-z]+)|([a-z]+[0-9]+[A-Z]+)|([0-9]+[a-z]+[A-Z]+)|([a-z]+[A-Z]+[0-9]+)|([A-Z]+[a-z]+[0-9]+)/;
    let regExpLength = /\w{6,}/
    if (regExp.test(value) && regExpLength.test(value)) {
      this.setState({ checkPassword: true });
    } else if (!regExp.test(value) || !regExpLength.test(value)) {
      this.setState({ checkPassword: false });
    }
  }
  checkEmail = (value) => {
    //honestly, stole from here: http://qaru.site/questions/260/validate-email-address-in-javascript?page=2#answers :((
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (regExp.test(value)) {
      this.setState({ checkEmail: true });
    } else {
      this.setState({ checkEmail: false });
    }
  }
  inputLogin = (e) => {
    let login = e.target.value;
    this.checkInputLogin(login);
    this.setState({ login: login })
  }
  inputPassword = (e) => {
    let password = e.target.value;
    this.checkPassword(password);
    this.setState({ password: password })
  }
  inputEmail = (e) => {
    let email = e.target.value;
    this.checkEmail(email);
    this.setState({ email: email });
  }
  submit = (e) => {
    e.preventDefault();
    if(this.state.checkLogin && this.state.checkPassword && this.state.checkEmail){
      console.log(`registration complete`);
      alert("registration complite");
    }else{
      alert("check you data,registration failed")
    }
    
  }
  render() {

    return (<form onSubmit={this.submit}>
      <p>
        <Input type="txt" id="login" value={this.state.login} onChange={this.inputLogin} className="input-login" placeholder="Input your login"/>
        {this.state.checkLogin ? "" : <Requirement className="requirement" txt = "[A–Z, a–z, 0–9],two or more symbol"/>}
      </p>
      <p>
        <Input type="password" id="password" onChange={this.inputPassword} className="input-password"placeholder="Input your password"/>
        {this.state.checkPassword ? "" : <Requirement className="requirement" txt = "mast be longer six symbol, and has at least one upper case letter, and one number"/>}
      </p>
      <p>
        <Input type="email" id="email" onChange={this.inputEmail} className="input-email" placeholder="Input your email"/>
        {this.state.checkEmail ? "" : <Requirement className="requirement" txt = "input your email."/>}
      </p>
      <Input type="submit" value="Create my account" id="confirm" />
    </form>)
  }
}
ReactDOM.render(<RegistartionForms />, document.getElementById("root"));