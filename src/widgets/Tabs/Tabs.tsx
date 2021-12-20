import React, { Component, Fragment, ReactNode } from 'react';
import { TabsProps } from './Tabs.interface';


class Tabs extends Component<TabsProps> {
    //Additional TS types should be looked into such as adding an interface for the data.json and the widgets them selves for better documentation
    variables: any = {
        classes: {
            tabsClasses: '',
            navLinkClasses: ''
        }
    }
    navItems: any[] = [];
    data: any = {};

    constructor(props: TabsProps) {
        super(props);
        this.data = this.props.data;
        if (this.data?.nav?.length > 0) {
            this.navItems = this.props.data?.nav;
        }
        console.log(this.props)
    }

    tabsNav(): ReactNode {
        return this.navItems.map((item, index) => {
            return <li key={index} className='nav-item'>{this.tabLink(item)}</li>
        })
    }


    tabLink(item): ReactNode {
        return (
            <a href={item.itemUrl} className='nav-link external'>
                {this.tabItem(item)}
            </a>
        )
    }

    tabItem(item): ReactNode {
        if (item.icon) {
            return <i className={`mr-3 ${item.icon}`} aria-hidden="true"></i>
        }
        if (item.text) {
            return <span>{item.text}</span>
        }
    }

    tabContent(item): ReactNode {
        if (item.content) {
            return item.content
        }
    }

    tabPanes(): ReactNode {
        return (
            <div className="tab-content">
                {this.navItems.length && this.navItems.map((item, index) => {
                    let { paneId, tabId, activeClass } = this.tabPaneIDVars(item, index);
                    if (!item.itemUrl) {
                        return (
                            <div key={index} className={`tab-pane ${activeClass}`} id={paneId} aria-labelledby={tabId} role="tabpanel">
                                {this.tabContent(item)}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

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
            <Fragment>
                <ul className={`nav nav-tabs ${this.variables.classes.tabsClasses}`} >
                    {this.navItems.length > 0 && this.tabsNav()}
                </ul>
                {this.tabPanes()}
            </Fragment>

        )
    }
}


export default Tabs;