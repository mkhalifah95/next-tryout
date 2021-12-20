import React, { Component, ReactNode } from 'react';
// @ts-ignore
import { TemplateNameProps } from './TemplateName.interface';
// @ts-ignore
import styles from './TemplateName.module.scss';

//ts ignores should be removed on the generated component

class TemplateName extends Component<TemplateNameProps> {
    render(): ReactNode {
        return (
            <div className={styles.TemplateName}>
                <h1>TemplateName component works</h1>
            </div>
        )
    }
}


export default TemplateName;