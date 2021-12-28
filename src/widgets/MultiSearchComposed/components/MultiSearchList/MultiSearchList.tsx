import CardComp from 'components/CardComp/CardComp';

const MultiSearchList = (props) => {
    const listClasses = props.className;
    const items = props.data.data.items;
    console.log(props.data.data.items);

    //this can be made into a component also
    const defaultMultiSearchItem = ({ item }) => {
        // render a card or something
        return (
            <li>
                <CardComp {...item} />
            </li>
        )
    }

    const MultiSearchItem = props.components?.MultiSearchItem || defaultMultiSearchItem;


    return (
        <ul className={listClasses}>
            {items.length > 0 && items.map((item) => {
                return <MultiSearchItem item={item} />
            })}
        </ul>
    )
}


export default MultiSearchList;