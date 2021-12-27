import React, { Component, ReactNode } from 'react';
import MultiSearchComposed from '../MultiSearchComposed/MultiSearchComposed';
import CardCompVariant from 'components/CardCompVariant/CardCompVariant';

const XYZProductMultiSearch = (props) => {
    const { data } = props;

    let variables = {
        moreLinkclasses: 'text-success'
    }

    const MultiSearchItem = ({ data }) => {
        return (
            <li>
                <CardCompVariant  {...data} />
            </li>
        )
    }

    return (
        <MultiSearchComposed data={data} components={{ MultiSearchItem }} componentVariables={variables} />
    )
}

export default XYZProductMultiSearch;