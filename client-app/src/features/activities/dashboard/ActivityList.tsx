import { Button, Item, Label, Segment } from "semantic-ui-react"
import { Activity } from "../../../models/activity"

interface Props {
    activities: Activity[];
    onSelectActivity: (id: string) => void;
    onDeleteActivty: (id: string) => void;
}

function ActivityList({activities, onSelectActivity, onDeleteActivty} : Props) {


    return (
      <>
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => onSelectActivity(activity.id)} floated="right" content='VIew' color="blue" />
                                <Button onClick={() => onDeleteActivty(activity.id)} floated="right" content='Delete' color="red" />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
      </>
    )
  }
  
  export default ActivityList