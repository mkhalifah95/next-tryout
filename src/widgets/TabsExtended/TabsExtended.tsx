import Tabs from 'widgets/TabsWidget/TabsWidget';

//@todo: Research if Composition could be used instead of Inheritance per React docs, so that we can use hooks 
// instead and follow the latest trends and best practices
class TabsExtended<TabsExtendedProps> extends Tabs {
    constructor(props: TabsExtendedProps) {
        super(props);
        this.variables.classes.tabsClasses = 'APPENDED';
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