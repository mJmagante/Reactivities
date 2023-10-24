import { Grid } from "semantic-ui-react"
import { Activity } from "../../../models/activity"
import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"

interface IProps {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    onSelectActivity: (id: string) => void;
    onCancelSelectActivity: () => void;
    editMode: boolean;
    openForm:(id: string) => void;
    closeForm: () => void;
    createEdit: (activity: Activity) => void;
    onDeleteActivty: (id: string) => void;
}

function ActivityDashboard( { activities, selectedActivity, onSelectActivity, onCancelSelectActivity, editMode, openForm, closeForm, createEdit, onDeleteActivty } : IProps) {


  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList activities={activities} onSelectActivity={onSelectActivity} onDeleteActivty={onDeleteActivty} />
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails activity={selectedActivity} 
                             onCancelSelectActivity={onCancelSelectActivity}
                             openForm={openForm} />
            }
            {editMode &&  <ActivityForm closeForm={closeForm} activity={selectedActivity} createEdit={createEdit}/> }
        </Grid.Column> 
    </Grid>
  )
}

export default ActivityDashboard