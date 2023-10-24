import { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"


interface Props {
    activities: Activity[];
    onSelectActivity: (id: string) => void;
    onDeleteActivty: (id: string) => void;
    isSubmitting: boolean;
}

function ActivityList({activities, onSelectActivity, onDeleteActivty, isSubmitting} : Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        onDeleteActivty(id);
    }
    return (
      <>
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date.split('T')[0]}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => onSelectActivity(activity.id)} floated="right" content='VIew' color="blue" />
                                <Button name={activity.id} loading={isSubmitting && target === activity.id } onClick={(e) => handleActivityDelete(e, activity.id)} floated="right" content='Delete' color="red" />
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