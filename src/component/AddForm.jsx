import { Component } from "react";

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            isClose : true,
        }
        this.buttonClose = this.buttonClose.bind(this);
    }
    buttonClose(){
        this.props.isGetdel(false);
    }
  render() {
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
               Thêm Công Việc
                 <span onClick={() => this.buttonClose()} className="fa fa-times ml-30" />
                </h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" className="form-control" />
                  </div>
                  <label>Trạng Thái :</label>
                  <select className="form-control" required="required">
                    <option value={1}>Kích Hoạt</option>
                    <option value={0}>Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      Thêm
                    </button>
                    &nbsp;
                    <button type="submit" className="btn btn-danger">
                      Hủy Bỏ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    )
  }
}
export default AddForm;