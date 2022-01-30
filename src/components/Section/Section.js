import propTypes from "prop-types";
import { Title } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
