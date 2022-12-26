import PropTypes from "prop-types";
import { Container, ImageGalleryItem, Img } from "./ImageGallery.styled"
export const ImageGallery = ({ options, onClick }) => {
    return <Container>
        {options.map(item => <ImageGalleryItem onClick={() => onClick(item.webformatURL)} key={item.id}><Img src={item.largeImageURL} alt={item.name} /></ImageGalleryItem>)}
    </Container>
}
ImageGallery.prototype = {
    options: PropTypes.array,
    onClick: PropTypes.func,
}