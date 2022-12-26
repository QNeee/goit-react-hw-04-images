import PropTypes from "prop-types";
import { Title } from "./Notification.styled";
export const Notification = ({ message }) => {
    return <Title>{message}</Title>
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
};