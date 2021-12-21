import React, { Component, Fragment, ReactNode } from 'react';
import { TabsProps } from './TabsWidget.interface';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class TabsWidget extends Component<TabsProps> {
    //Additional TS types should be looked into such as adding an interface for the data.json and the widgets them selves for better documentation
    variables: any = {
        classes: {
            tabsClasses: '',
            navLinkClasses: ''
        }
    }
    navItems: any[] = [];
    data: any = {};
    ID: string;

    constructor(props: TabsProps) {
        super(props);
        this.data = this.props.data;
        if (this.data?.nav?.length > 0) {
            this.navItems = this.props.data?.nav;
        }
        this.ID = 'nav-' + this.props.thisWidget.id + '-' + Math.round(Math.random() * 10000)
        console.log(this.props)
    }

    tabsNav(): ReactNode {
        return this.navItems.map((item, index) => {
            return <Tab key={index} eventKey={index} title={this.tabTitle(item)}>{this.tabContent(item)}</Tab>
        })
    }

    tabTitle(item): ReactNode {
        return (
            <Fragment>
                {item.icon && <i className={`mr-3 ${item.icon}`} aria-hidden="true"></i>}
                {item.text && <span>{item.text}</span>}
            </Fragment>
        )
    }

    tabContent(item): ReactNode {
        if (item.content) {
            return item.content
        }
    }

    //This is not used but only for extending demo's
    tabPaneIDVars(item, index): any {
        let ariaControls = 'nav-' + this.props.thisWidget.id + '-' + item.text.trim().toLowerCase().split(' ').join('-'),
            paneId = ariaControls + '-pane',
            tabId = ariaControls + '-tab',
            activeClass = index === 0 ? 'show active' : '';

        let variables = { paneId, tabId, activeClass }

        return variables
    }

    render(): ReactNode {
        return (
            <Tabs id={this.ID} className={this.variables.classes.tabsClasses} >
                {this.navItems.length > 0 && this.tabsNav()}
            </Tabs>
        )
    }
}


export default TabsWidget;