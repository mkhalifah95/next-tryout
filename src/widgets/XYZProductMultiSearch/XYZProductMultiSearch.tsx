import React, { Component, ReactNode } from 'react';
import MultiSearchComposed from '../MultiSearchComposed/MultiSearchComposed'

const XYZProductMultiSearch = (props) => {
    // No hooks and TS for now
    // Inner classes could be moved to their own components

    const { data } = props;

    const MultiSearchItem = (item) => {
        console.log(item)
        return (
            <li>
                <p>ITEM</p>
            </li>
        )
    }

    return (
        <MultiSearchComposed data={data} components={{ MultiSearchItem }} />
    )
}

// class MultiSearchComposed extends Component<MultiSearchComposedProps> {
//     constructor(props: MultiSearchComposedProps) {
//         super(props)
//     }
//     render(): ReactNode {
//         return (
//             <div className={styles.MultiSearchComposed}>
//                 <h1>MultiSearchComposed component works</h1>
//             </div>
//         )
//     }
// }


export default XYZProductMultiSearch;