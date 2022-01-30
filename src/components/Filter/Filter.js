
import propTypes from "prop-types";

function Filter({onChange}){
    const handleChange = ({ target: { value } }) => {
    onChange(value);
  };
  return (
          <div>
            <label htmlFor="filter">Find contacts by name</label>
            <div>
              <input name="filter" type="text" onChange={handleChange} />
            </div>
          </div>
        );
}


export default Filter;
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
