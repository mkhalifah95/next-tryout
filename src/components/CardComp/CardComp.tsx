import { Card } from 'react-bootstrap';
import DefaultCardHeader from './components/CardHeader/CardHeader'
import DefaultCardFooter from './components/CardFooter/CardFooter'
import DefaultCardImage from './components/CardImage/CardImage'
import styles from './CardComp.module.scss'

const CardComp = (props) => {
    const baseClass = `${props.baseClass ? props.baseClass : ''} ${styles.card}`;

    const components = props.components;
    const CardImage = components?.CardImage || DefaultCardImage;
    const CardHeader = components?.CardHeader || DefaultCardHeader;
    const CardBody = components?.CardBody;
    const CardFooter = components?.CardFooter || DefaultCardFooter;
    const hideContent = props.hideContent;
    const hideImage = props.hideImage;

    // It would be great if there's a way to pass the styles and props and common stuff easier (maybe a custom hook or a provider?)
    return (
        <Card className={baseClass}>
            {!hideImage && <CardImage styles={styles} {...props} />}
            {!hideContent &&
                <div className='card-content'>
                    {CardHeader && <CardHeader styles={styles} {...props} />}
                    {CardBody && <CardBody styles={styles} {...props} />}
                    {CardFooter && <CardFooter styles={styles} {...props} />}
                </div>
            }
        </Card>
    )
}


export default CardComp;