import styles from './MultiSearchComposed.module.scss';
import DefaultMultiSearchList from './components/MultiSearchList/MultiSearchList'
import DefaultMultiSearchShowMore from './components/MultiSearchShowMore/MultiSearchShowMore'

const MultiSearchComposed = (props) => {
    // No hooks and TS for now
    const { data } = props;

    // Inner classes could be moved to their own components
    let variables = {
        // Notice here how we take and set the dynamic class (max-width-400) from the json and pass it to the styles module
        // otherwise the class wont be recognized by the stylesheet
        widgetClasses: styles[data.thisWidget?.properties?.wrapperClass] || '',
        listclasses: 'list-unstyled',
        moreLinkclasses: 'cta text-uppercase text-reset font-weight-bold animation-icon-shift',
        moreLinkWrapperClass: 'animation-icon-shift'
    }


    // set sub components
    let MultiSearchList = props.components?.MultiSearchList || DefaultMultiSearchList;
    let MultiSearchShowMore = props.components?.MultiSearchList || DefaultMultiSearchShowMore;

    console.log(data)

    // this approach is just experimental and not a final result
    return (
        <div className={`multi-search ${variables.widgetClasses}`}>
            {<MultiSearchList data={data} components={{ 'MultiSearchItem': props.components?.MultiSearchItem }}
                className={variables.listclasses} />}
            {<MultiSearchShowMore data={data} classes={{
                moreLinkclasses: variables.listclasses,
                moreLinkWrapperClass: variables.moreLinkWrapperClass
            }} />}
        </div>
    )
}


export default MultiSearchComposed;