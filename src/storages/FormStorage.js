import React, { Component } from 'react';

export default class FormStorage extends Component {
    userData;
  constructor(props){
      super(props);
      this.onChangeName=this.onChangeName.bind(this);
      this.onChangeEmail=this.onChangeEmail.bind(this);
      this.getlocal=this.getlocal.bind(this);
      this.setSession=this.setSession.bind(this);
      this.getSession=this.getSession.bind(this);
      this.setlocal=this.setlocal.bind(this);
      this.setCookie=this.setCookie.bind(this);
      this.getCookie=this.getCookie.bind(this);
      this.setMyCookieValue= this.setMyCookieValue.bind(this);
      this.getMyCookie=this.getMyCookie.bind(this);
      this.state = {
          name:'',
          email:'',
          localStorageName:'',
          localStorageEmail:'',
          sessionStorageName:'',
          sessionStorageEmail:'',
          cookieStorageName:'',
          cookieStorageEmail:''
      }
   }

   setlocal(){
    localStorage.setItem('user',JSON.stringify({name:this.state.name , email:this.state.email}));
   }

   getlocal() {
    const userData=JSON.parse(localStorage.getItem('user'));
    this.setState({localStorageName:userData.name, localStorageEmail: userData.email});
   }
   setSession(){
       sessionStorage.setItem('user',JSON.stringify({name:this.state.name , email:this.state.email}))
   }
   getSession(){
       const userData=JSON.parse(sessionStorage.getItem('user'));
       this.setState({sessionStorageName:userData.name,sessionStorageEmail:userData.email})
   }
   setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*100));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires +";path=/";
   }
   getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
   }

   setMyCookieValue() {
    this.setCookie('user',JSON.stringify({name:this.state.name , email:this.state.email}),1);
   }
   getMyCookie(){
    const userData=JSON.parse(this.getCookie('user'));
    this.setState({cookieStorageName:userData.name,cookieStorageEmail:userData.email})
   }

  onChangeName(e) {
      this.setState({name:e.target.value })
  }
  onChangeEmail(e) {
      this.setState({email:e.target.value})
  }
 

    render() {
        return (
            <div className='form-storage'>
                    <div className="form-type">
                        <label>name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div className="form-type">
                        <label>email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>
                    <button type="submit" className="locale" onClick={this.setlocal}>local</button>
                    <button type="submit" className="session" onClick={this.setSession}>session</button>
                    <button type="submit" className="cookies" onClick={this.setMyCookieValue}>cookies</button>
                <div style={{ border: '1px solid red'}}>
                <button onClick={this.getlocal}>getlocalStorage </button>
                <label>
                {this.state.localStorageName} {this.state.localStorageEmail}
                </label>
                </div>
                    <button onClick={this.getSession}>getSessionStorage</button>
                    <p>
                        {this.state.sessionStorageName},{this.state.sessionStorageEmail}
                    </p>
                <div>
                    <button onClick={this.getMyCookie}>getCookie</button>
                    <p>
                        {this.state.cookieStorageName},{this.state.cookieStorageEmail}
                    </p>

                </div>
            </div>
        );
    }
};

