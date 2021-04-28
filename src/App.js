import { Component } from "react";
import "./App.css";
import Active from "./component/Active";
import AddForm from "./component/AddForm";
import Search from "./component/Search";
import Sort from "./component/Sort";
import TaskList from "./component/TaskList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isdisplayedForm: false,
      isdelForm:'',
      data: [
      ]
    }
    this.clickHidden = this.clickHidden.bind(this);
    this.setNonestate = this.setNonestate.bind(this);
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('data')){
      var tasks =  JSON.parse(localStorage.getItem('data'))
      this.setState({
        data: tasks
      })
    }
  }

  clickHidden() {
    if(this.state.isdisplayedForm && this.state.isactiveForm !==''){
      this.setState({
        isdisplayedForm: true,
        isdelForm:''
      })
    } else {
      this.setState({
        isdisplayedForm: !this.state.isdisplayedForm,
        isdelForm:''
      })
    }
  }
  setNonestate(value){
    this.setState({
      isdisplayedForm: value
    })
  }
  onReceive = (value) => {
    let dataRev =  this.state.data;
    dataRev.push(value);
    this.setState({
      data: dataRev
    })
    console.log(this.state)
    localStorage.setItem('data', JSON.stringify(dataRev))
  }
  
  render() {
    const elementList = this.state.data.map((item,index) => {
      return <TaskList
        key = {item.id}
        indexID = {++index}
        nameJob = {item.nameJob}
        isHide = {item.isStatus}
        isDate = {item.date}
        isTime = {item.time}
      />
    })

    
    const toggleForm = this.state.isdisplayedForm === true && this.state.isdelForm === '' ? <AddForm onGet = {this.onReceive} isGetdel={this.setNonestate}/> : '' ;
   
    return (
      <div className="container">
        <div className="row">
          {toggleForm} 
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button onClick={this.clickHidden} type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />
              &nbsp; Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Search/>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort/>
            </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Thời gian thêm</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Active/>
                    {elementList}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
