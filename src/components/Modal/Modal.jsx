import PropTypes from "prop-types";
import { Overlay, ModalWindow, Img } from "./Modal.styled"
export const Modal = ({ image, onClickOverlay }) => {
    return <Overlay onClick={(e) => onClickOverlay(e)}>
        <ModalWindow>
            <Img src={image} alt={image} />
        </ModalWindow>
    </Overlay >
}
Modal.propTypes = {
    image: PropTypes.string.isRequired,
    onClickOverlay: PropTypes.func.isRequired,
};