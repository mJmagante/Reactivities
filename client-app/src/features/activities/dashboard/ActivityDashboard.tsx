import { Grid } from "semantic-ui-react"
import ActivityList from "./ActivityList"
import { useStore } from "../../../app/stores/store"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import Loading from "../../../app/Layout/Loading"
import ActivityFilter from "./ActivityFilter"


function ActivityDashboard() {
  const { activityStore } = useStore();
  const {loadActivities, activityRegistry } = activityStore;
  useEffect(() => {
      if(activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry, loadActivities])


  if(activityStore.loadingInitial) return <Loading content="Loading App" />

  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList />
        </Grid.Column>
        <Grid.Column width='6'>
           <ActivityFilter />
        </Grid.Column> 
    </Grid>
  )
}

export default observer(ActivityDashboard)