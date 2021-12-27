import React, { Component, ReactNode } from 'react';
import Header from 'react-bootstrap/CardHeader';

const CardHeader = (props) => {
    const { epubDate, title, best, components, headerClass } = props;

    // These defaults could be moved to their own components for abstraction
    const DefaultCardDate = () => {
        if (epubDate) {
            return (
                <div className='overline text-uppercase'>
                    {epubDate}
                </div>
            )
        }
    }

    const CardDate = components?.CardDate || DefaultCardDate

    const DefaultCardMeta = () => {
        return (
            <div className='d-flex align-items-center mb-2'>
                <CardDate />
            </div>
        )
    }

    const CardMeta = components?.CardMeta || DefaultCardMeta;

    const DefaultCardTitle = () => {
        if (title) {
            return (
                <h2 className="article-title">
                    {(best && <a className='text-reset text-decoration-none fs-5' href={best}>{title}</a>) || { title }}
                </h2>
            )
        }
    }

    const CardTitle = components?.CardTitle || DefaultCardTitle;

    return (
        <Header className={headerClass}>
            <CardMeta />
            <CardTitle />
        </Header>
    )
}


export default CardHeader;