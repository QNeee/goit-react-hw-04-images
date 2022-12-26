import PropTypes from "prop-types";
import { Overlay, ModalWindow, Img } from "./Modal.styled"
export const Modal = ({ options, onClickOverlay }) => {
    return <Overlay onClick={(e) => onClickOverlay(e)}>
        <ModalWindow>
            <Img src={options} alt={options} />
        </ModalWindow>
    </Overlay >
}
Modal.propTypes = {
    options: PropTypes.string.isRequired,
    onClickOverlay: PropTypes.func,
};