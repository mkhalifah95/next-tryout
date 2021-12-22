import React, { Component, ReactNode } from 'react';
import { MultiSearchComposedProps } from './MultiSearchComposed.interface';
import styles from './MultiSearchComposed.module.scss';
import MultiSearchList from './components/MultiSearchList/MultiSearchList'
import MultiSearchShowMore from './components/MultiSearchShowMore/MultiSearchShowMore'

const MultiSearchComposed = (props) => {
    // No hooks and TS for now
    // Inner classes could be moved to their own components
    let variables = {
        widgetClasses: '',
        listclasses: 'list-unstyled',
        moreLinkclasses: 'cta text-uppercase text-reset font-weight-bold animation-icon-shift',
        moreLinkWrapperClass: 'animation-icon-shift'
    }

    const { data } = props;

    console.log(data)

    // this approach is just experimental and not a final result
    const renderMultiSearchList = () => {
        return props.components?.MultiSearchList || <MultiSearchList data={data} className={variables.listclasses} />
    }

    const renderMultiSearchShowMore = () => {
        return props.components?.MultiSearchShowMore || <MultiSearchShowMore data={data} classes={{
            moreLinkclasses: variables.listclasses,
            moreLinkWrapperClass: variables.moreLinkWrapperClass
        }} />
    }

    return (
        <div className={`multi-search ${variables.widgetClasses}`}>
            {renderMultiSearchList()}
            {renderMultiSearchShowMore()}
        </div>
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


export default MultiSearchComposed;