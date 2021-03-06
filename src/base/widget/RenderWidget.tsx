import React, { Component, ReactElement, ReactNode } from 'react';
import WidgetData from './WidgetData.interface';

type P = {
    data?: WidgetData
};

class RenderWidget extends Component<P> {
    //Additional TS types should be looked into such as adding an interface for the data.json and the widgets them selves for better documentation
    data: WidgetData = {};
    // hasWrapper: boolean = false;

    constructor(props: P) {
        super(props);
        if (this.props.data) {
            this.data = this.props.data;
            // Extra demonstration of pb.render
            // this.hasWrapper = this.data.config?.wrapper === 'true' || this.data.config?.wrapper === true
            // if (this.hasWrapper) {

            // }        
        }
    }

    render(): ReactNode {
        // The way the data is presented to the child component must be looked into
        return React.cloneElement(this.props.children as ReactElement<any>, { ...this.data })
    }
}


export default RenderWidget;