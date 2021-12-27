import React from 'react';
import Image from 'react-bootstrap/CardImg';

const CardImage = (props) => {
    const { coverImage, best } = props;

    // These defaults could be moved to their own components for abstraction
    const DefaultCoverImage = () => {
        return <Image src={coverImage.src} alt="" />
    }

    if (coverImage?.src) {
        if (best) {
            return <a className='card-img-top overflow-hidden' href={best} tabIndex={-1}>{DefaultCoverImage()}</a>
        } else {
            return <div className='card-img-top'>{DefaultCoverImage()}</div>
        }
    } else {
        return null
    }
}


export default CardImage;