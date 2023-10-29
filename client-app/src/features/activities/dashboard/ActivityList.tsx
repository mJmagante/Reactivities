import { Header, Item, Segment } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react";


function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;
  console.log(groupedActivities)
  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal" size="large">
            {group}
          </Header>
          {activities.map(activity => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}

    </>
  )
}

export default observer(ActivityList)