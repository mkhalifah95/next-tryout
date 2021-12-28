import React, { Component, ReactNode } from 'react';
import Header from 'react-bootstrap/CardHeader';

const CardHeader = (props) => {
    const { epubDate, title, best, components, headerClass } = props;

    // These defaults could be moved to their own components for abstraction

    /*
        Its important to handle each React component as independant of the parent component, that means each one has its own props
        For example, we dont create a component like this:

        const DefaultCardDate = () => {
            return (
                <div className='overline text-uppercase'>
                    {epubDate}
                </div>
            )
        }

        and expect it to take the variables from the wrapper component
        and then call it like <CardDate/>

        Instead we pass the variables through props:

        const DefaultCardDate = ({ epubDate }) => {
            return (
                <div className='overline text-uppercase'>
                    {epubDate}
                </div>
            )
        } 
        
        And call it like :
        <CardDate epubDate={epubDate}/>

        That way will enable these components to be overriden from outside.

        Always remember that props are function arguments afterall
    */
    const DefaultCardDate = ({ epubDate }) => {
        return (
            <div className='overline text-uppercase'>
                {epubDate}
            </div>
        )
    }

    const CardDate = components?.CardDate || DefaultCardDate

    const DefaultCardMeta = ({ epubDate }) => {
        return (
            <div className='d-flex align-items-center mb-2'>
                {epubDate && <CardDate epubDate={epubDate} />}
            </div>
        )
    }

    const CardMeta = components?.CardMeta || DefaultCardMeta;

    const DefaultCardTitle = ({ best, title }) => {
        return (
            <h2 className="article-title">
                {(best && <a className='text-reset text-decoration-none fs-5' href={best}>{title}</a>) || title}
            </h2>
        )
    }

    const CardTitle = components?.CardTitle || DefaultCardTitle;

    return (
        <Header className={headerClass}>
            <CardMeta epubDate={epubDate} />
            {title && <CardTitle best={best} title={title} />}
        </Header>
    )
}


export default CardHeader;