import React from 'react';
import Card from 'react-bootstrap/Card';

const CardFooter = (props) => {
    // investigate data
    const { contribs, components, footerClass } = props;

    // These defaults could be moved to their own components for abstraction
    const DefaultAuthors = () => {
        if (contribs) {
            return (
                <div className="card-contribs authors" dangerouslySetInnerHTML={{ '__html': contribs }}>
                </div >
            )
        }
    }

    const Authors = components?.Authors || DefaultAuthors;

    return (
        <Card.Footer className={footerClass}>
            <Authors />
        </Card.Footer>
    )
}


export default CardFooter;