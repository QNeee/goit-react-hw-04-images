import PropTypes from "prop-types";
import { Container, ImageGalleryItem, Img } from "./ImageGallery.styled"
export const ImageGallery = ({ images, onClick }) => {
    return <Container>
        {images.map(item => <ImageGalleryItem onClick={() => onClick(item.webformatURL)} key={item.id}><Img src={item.largeImageURL} alt={item.name} /></ImageGalleryItem>)}
    </Container>
}
ImageGallery.prototype = {
    images: PropTypes.array,
    onClick: PropTypes.func,
}