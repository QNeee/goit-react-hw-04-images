import PropTypes from "prop-types";
import { ButtonLoadMore } from "./Button.styled"
export const Button = ({ onClickLoadMore }) => {
    return <ButtonLoadMore type="button" onClick={(e) => onClickLoadMore(e)}>Load More </ButtonLoadMore>
}
Button.prototype = {
    onClickLoadMore: PropTypes.func.isRequired
}