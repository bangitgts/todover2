import { Component } from "react";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameJob: "",
      isStatus: 1,
      date: "",
      time: "",
      isClose: true,
    };
    this.buttonClose = this.buttonClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitdata = this.onSubmitdata.bind(this);
  }
  makeid(length) {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

  buttonClose() {
    this.props.isGetdel(false);
  }
  onChange(event) {
    var { date, time } = this.state;
    date = new Date().toLocaleDateString();
    time = new Date().toLocaleTimeString();
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
     id: this.makeid(13),
      [name]: value,
      date: date,
      time: time,
    });
  }
  onSubmitdata(event) {
    this.props.onGet(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm Công Việc
              <span
                onClick={() => this.buttonClose()}
                className="fa fa-times ml-30"
              />
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitdata}>
              <div className="form-group">
                <label>Tên :</label>
                <input
                  name="nameJob"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                name="isStatus"
                onChange={this.onChange}
                className="form-control"
                required="required"
              >
                <option value={1}>Kích Hoạt</option>
                <option value={0}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Thêm
                </button>
                &nbsp;
                <button type="reset" className="btn btn-danger">
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddForm;
