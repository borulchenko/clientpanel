import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  setAllowRegistration
} from "../../actions/settingsActions";

class Settings extends Component {
  disableBalanceOnAdd = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };

  disableBalanceOnEdit = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };

  allowRegistration = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Allow Registration</label>{" "}
                  <input
                    type="checkbox"
                    name="allowRegistration"
                    checked={!!allowRegistration}
                    onChange={this.allowRegistration}
                  />
                </div>
                <div className="form-group">
                  <label>Disable Balance On Add</label>{" "}
                  <input
                    type="checkbox"
                    name="disableBalanceOnAdd"
                    checked={!!disableBalanceOnAdd}
                    onChange={this.disableBalanceOnAdd}
                  />
                </div>
                <div className="form-group">
                  <label>Disable Balance On Edit</label>{" "}
                  <input
                    type="checkbox"
                    name="disableBalanceOnEdit"
                    checked={!!disableBalanceOnEdit}
                    onChange={this.disableBalanceOnEdit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  state => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setDisableBalanceOnAdd, setDisableBalanceOnEdit, setAllowRegistration }
)(Settings);
