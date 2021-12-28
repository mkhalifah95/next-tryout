import React, { Component, ReactNode } from 'react';
import CardComp from '../CardComp/CardComp';
import styles from './CardCompVariant.module.scss';

const CardCompVariant = (props) => {
    const CardTitle = ({ title }) => {
        return (
            <h3 className="article-title fs-5">
                Title: {title}
            </h3>
        )
    }

    // No card meta
    const CardMeta = () => null;

    // We might have props mess for now, but it can be solved using either TS interfaces or PropTypes
    return (
        <CardComp className={styles['card-variant']}
            headerClass='pt-4'
            {...props}
            hideImage={true}
            components={{
                CardTitle,
                CardMeta
            }}
        />
    )
}


export default CardCompVariant;