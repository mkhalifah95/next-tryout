import React, { Component, ReactNode } from 'react';
// @ts-ignore
import { DaisyModalProps } from './DaisyModal.interface';
// @ts-ignore
import styles from './DaisyModal.module.scss';

//ts ignores should be removed on the generated component

class DaisyModal extends Component<DaisyModalProps> {
    render(): ReactNode {
        return (
            <div className={styles.DaisyModal}>
                <a href="/components/modal#my-modal" className="btn btn-primary">open modal</a>
                <div id="my-modal" className="modal">
                    <div className="modal-box">
                        <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
                        <div className="modal-action">
                            <a href="/components/modal#" className="btn btn-primary">Accept</a>
                            <a href="/components/modal#" className="btn">Close</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DaisyModal;