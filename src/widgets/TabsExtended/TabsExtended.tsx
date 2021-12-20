import Tabs from 'widgets/Tabs/Tabs';

class TabsExtended<TabsExtendedProps> extends Tabs {
    constructor(props: TabsExtendedProps) {
        super(props)
    }
    tabPaneIDVars(item, index): string[] {
        var defaultVars = super.tabPaneIDVars(item, index);
        let { activeClass: defaultActiveClass } = defaultVars //we would ideally find a way to make overriding/appending fn variables easier such as helper functions
        let activeClass = index === 0 ? defaultActiveClass + ' APPENDED' : ''
        let variables = {
            ...defaultVars,
            activeClass
        }
        return variables
    }
}


export default TabsExtended;