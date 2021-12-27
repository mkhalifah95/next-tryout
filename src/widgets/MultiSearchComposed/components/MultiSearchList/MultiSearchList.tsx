import CardComp from 'components/CardComp/CardComp';

const MultiSearchList = (props) => {
    const listClasses = props.className;
    const items = props.data.data.items;
    console.log(props.data.data.items);

    const MultiSearchItem = props.components?.MultiSearchItem;

    //this can be made into a component also
    const defaultMultiSearchItem = (item) => {
        // render a card or something
        return (
            <li>
                <CardComp {...item} data={props.data.data} />
            </li>
        )
    }

    return (
        <ul className={listClasses}>
            {items.length > 0 && items.map((item) => {
                return (MultiSearchItem && <MultiSearchItem data={item} />) || defaultMultiSearchItem(item)
            })}
        </ul>
    )
}


export default MultiSearchList;