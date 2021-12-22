import React, { Component, ReactNode } from 'react';
import { Card } from 'react-bootstrap';
// @ts-ignore
import { CardCompProps } from './CardComp.interface';
// @ts-ignore
import styles from './CardComp.module.scss';

//ts ignores should be removed on the generated component

class CardComp extends Component<any> {
    render(): ReactNode {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.type}</Card.Title>
                    <Card.Text>
                        {this.props.title}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default CardComp;