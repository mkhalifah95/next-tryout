import React, { Component, ReactNode } from 'react';
import styles from './Header.module.scss';

type Props = {};

class Header extends Component<Props> {
    render(): ReactNode {
        return (
            <header className={styles.Header}>
                <h1>Header component works</h1>
            </header>
        )
    }
}


export default Header;