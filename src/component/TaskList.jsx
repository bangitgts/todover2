import { Component } from "react";
class TaskList extends Component {
    
  render() {
    const eleList = this.props.isHide === '0' ? "Chưa xong" : "Đã Xong";
    const className = this.props.isHide === '0' ? "label label-default" : "label label-success";
    return (
      <tr>
        <td>{this.props.indexID}</td>
        <td>{this.props.nameJob}</td>
        <td><p>Ngày thêm: {this.props.isDate}</p>
        <p>Giờ thêm: {this.props.isTime}</p>
        </td>
        <td className="text-center">
           <span className={className}>{eleList}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-edit mr-5" />
            &nbsp;
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5" />
          &nbsp;
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskList;
