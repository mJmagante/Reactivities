import Calendar from "react-calendar"
import { Header, Menu, MenuItem } from "semantic-ui-react"

function ActivityFilter() {
    return (
        <>
            <Menu  vertical size="large" style={{ width: '100%', marginTop: 30}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <MenuItem content='All Activities' />
                <MenuItem content="I'm going" />
                <MenuItem content="I'm hosting" />
            </Menu>
            <Header content='&nbsp;' />
            <Calendar />
        </>
    )
}

export default ActivityFilter
