import { Button, Icon, Item, Label, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"
import { Link } from "react-router-dom"
import { useStore } from "../../../app/stores/store"
import { SyntheticEvent, useState } from "react"

interface Props {
    activity: Activity
}

function ActivityListItem({ activity }: Props) {

    const { activityStore } = useStore();
    const { deleteActivty, loading } = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivty(id);
    }

    return (
        <Segment.Group raised>
            <Segment color='blue'>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title} 
                            </Item.Header>
                        </Item.Content>
                        <Item.Description>Hosted by MJ</Item.Description>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/>{activity.date}
                    <Icon name="marker"/>{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link} 
                    to={`/activities/${activity.id}`} 
                    color='teal'
                    floated="right"
                    content='View'/>
            </Segment>
        </Segment.Group>
    )
}

export default ActivityListItem
