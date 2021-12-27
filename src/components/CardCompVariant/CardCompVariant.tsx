import React, { Component, ReactNode } from 'react';
import CardComp from '../CardComp/CardComp';
import styles from './CardCompVariant.module.scss';

const CardCompVariant = (props) => {
    return (
        <CardComp baseClass={styles['card-variant']} {...props} hideImage={true} />
    )
}


export default CardCompVariant;