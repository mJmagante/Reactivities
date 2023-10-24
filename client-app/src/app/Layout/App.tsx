import { useEffect, useState } from "react"
import {  Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';
import agent from "../api/agent";
import Loading from "./Loading";


function App() {
  const [activities, setActivities] = useState<Activity []>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  useEffect(() => {
    agent.Activities.list().then(response => {
      // const activitiesDateSplit: Activity[] = [];
      // response.forEach(e => {
      //     e.date = e.date.split('T')[0];
      //     activitiesDateSplit.push(e);
      // })
      setActivities(response);
      setLoading(false)
    })
  }, [])

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(activity => activity.id == id))
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
    
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
    setSubmitting(true);
    if(activity.id){
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false)
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
      setActivities([...activities, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
      setSubmitting(false)
      })
    }
  }

  function handleDeleteActivty(id: string){
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
  }

  if(loading) return <Loading content="Loading App" />
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{margin: '7em'}}>
        <ActivityDashboard 
            activities={activities} 
            selectedActivity={selectedActivity}
            onSelectActivity={handleSelectActivity}
            onCancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createEdit={handleCreateOrEditActivity}
            onDeleteActivty={handleDeleteActivty}
            isSubmitting={isSubmitting}/>
      </Container>

    </>
  )
}

export default App
