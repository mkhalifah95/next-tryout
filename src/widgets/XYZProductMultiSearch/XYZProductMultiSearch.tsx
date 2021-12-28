import MultiSearchComposed from '../MultiSearchComposed/MultiSearchComposed';
import CardCompVariant from 'components/CardCompVariant/CardCompVariant';

const XYZProductMultiSearch = (props) => {
    const { data } = props;

    let variables = {
        moreLinkclasses: 'text-success fw-bold'
    }

    const moreText = data.data.widget.moreText + ' 👀'

    const MultiSearchItem = ({ item }) => {
        return (
            <li>
                <CardCompVariant  {...item} />
            </li>
        )
    }

    return (
        <MultiSearchComposed data={data} components={{ MultiSearchItem }} componentVariables={variables} moreText={moreText} />
    )
}

export default XYZProductMultiSearch;