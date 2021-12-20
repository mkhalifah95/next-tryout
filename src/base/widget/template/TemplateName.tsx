import React, { Component, ReactNode } from 'react';
import { TemplateNameProps } from './TemplateName.interface';
import styles from './TemplateName.module.scss';

class TemplateName extends Component<TemplateNameProps> {
    constructor(props: TemplateNameProps) {
        super(props)
    }
    render(): ReactNode {
        return (
            <div className={styles.TemplateName}>
                <h1>TemplateName component works</h1>
            </div>
        )
    }
}


export default TemplateName;