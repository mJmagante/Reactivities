import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
    activity: Activity;
    onCancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

function ActivityDetails({activity, onCancelSelectActivity, openForm}: Props) {


    return (
      <>
        <Card fluid>
          <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
          <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
              <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
              {activity.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(activity.id)} basic color="blue" content='Edit' />
                <Button onClick={onCancelSelectActivity} basic color="grey" content='Cancel' />
            </Button.Group>
          </Card.Content>
        </Card>
      </>
    );
  }
  
  export default ActivityDetails