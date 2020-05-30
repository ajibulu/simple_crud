import React, { Component } from 'react';
import './App.css';

class App extends Component {


constructor(props) {
  super(props);
  this.state={
    title:'Simple CRUD Application using React',
    act:0,
    index:'',
    datas:[]
  }
}
componentDidMount() {
  this.refs.name.focus();
}
fSubmit=(e)=>{
  e.preventDefault();
  console.log('try');
  let datas=this.state.datas;
  let name=this.refs.name.value;
  let address=this.refs.address.value;
  let sex=this.refs.sex.value;
  let age=this.refs.age.value;
  let sname=this.refs.sname.value;
  let email=this.refs.email.value;
  let sog=this.refs.sog.value;
  let qualification=this.refs.qualification.value;
  
  if(this.state.act ===0) {       //new
    let data = {
      name,sname,sex,age,email,address,sog,qualification
  
    }
    datas.push(data);
  } else {
    let index =this.state.index;
    datas[index].name=name;
    datas[index].sname=sname;
    datas[index].age=sname;
    datas[index].sex=sex;
    datas[index].address=address;
    datas[index].email=email;
    datas[index].qualification=qualification;
    datas[index].sog=sog;
  }
  
  this.setState({
    datas: datas,
    act: 0

  });
  this.refs.myform.reset();
  this.refs.name.focus();
}

fremove =(i) => {
  let datas=this.state.datas;
  datas.splice(i,1);
  this.setState({
    datas: datas
})
   this.refs.myform.reset();
    this.refs.name.focus();
}

fedit =(i) => {
  let data =this.state.datas[i];
  this.refs.name.value=data.name;
  this.refs.address.value=data.address;
  this.refs.sname.value=data.sname;
  this.refs.age.value=data.age;
  this.refs.sex.value=data.sex;
  this.refs.email.value=data.email;
  this.refs.sog.value=data.sog;
  this.refs.qualification.value=data.qualification;

  this.setState({
    act:1,
    index: i
  })
  this.refs.name.focus();
}
 render() {
   let datas=this.state.datas;
  return (
    <div className="App">
      
      <hr></hr>
      <h1>{this.state.title}</h1>
      <h2><pre>--P E R S O N A L   D A T A ---</pre></h2>
      <form ref="myform" className="myform" data-form>
        <label for="name">First Name:</label>
        <input type="text" ref="name" placeholder="your First Name" className="formfield" required data-form-fname/>
        <label for="sname">Surname:</label>
        <input type="text" ref="sname" placeholder="your Second Name" className="formfield" required data-form-sname/>
        <label for="age">Age:</label>
        <input type="integer" ref="age" placeholder="your Age" className="formfield" required data-form-age/>
        <label for="name">Gender:</label>
        <select ref="sex" className="formfield" data-form-sex>
          <option>Female</option>
          <option>Male</option>
        </select>
        <label for="email">Email:</label>
        <input type="email" ref="email" placeholder="your Email" className="formfield" required data-form-email/>
        <label for="qualification">Qualfication:</label>
        <input type="text" ref="qualification" placeholder="your Qualification" className="formfield" required data-form-qualification/>
        <label for="sog">State of Origin:</label>
        <input type="text" ref="sog" placeholder="your State of Origin" className="formfield" required data-form-sog/>
        <label for="address">Address:</label>
        <input type="text" ref="address" placeholder="your address" className="formfield" required data-form-address/>
        <button onClick={this.fSubmit} className="myButton"> Save and Reset</button>
      </form>
      
      <div>
      <table>
        <tr>
          <td>s/n</td>
          <td>First Name</td>
          <td>Surname</td>
          <td>Age</td>
          <td>Gender</td>
          <td>Email</td>
          <td>State of Origin</td>
          <td>Qualification</td>
          <td>Address</td>
          
        </tr>
        
         {datas.map((data, i) => 
         

            <tr key={i} className="mylist"> 
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td> {data.sname} </td>
              <td> {data.age} </td>
              <td> {data.sex} </td>
              <td> {data.email} </td>
              <td> {data.sog} </td>
              <td> {data.qualification} </td>
              <td> {data.address} </td><p>
              <button onClick={()=>this.fremove(i)} className="myListButton">Remove </button>
              <button onClick={()=>this.fedit(i)} className="myListButton">Edit</button>
              </p>
             </tr>
          
         )}
         </table> 
      </div>
     
    </div>
  );
}
}
export default App;
