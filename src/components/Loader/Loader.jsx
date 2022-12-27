import { Audio } from 'react-loader-spinner'
import { Container } from './Loader.styled'
export const Loader = () => {
    return <Container><Audio>
        height="80"
        width="80"
        radius="9"
        color='green'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass
    </Audio></Container>
}