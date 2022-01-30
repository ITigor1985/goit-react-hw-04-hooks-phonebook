import { Component } from "react";
import propTypes from "prop-types";

class Filter extends Component {
  handleChange = ({ target: { value } }) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <div>
          <input name="filter" type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default Filter;
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
