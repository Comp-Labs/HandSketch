import * as React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonAlert, IonFooter, IonCheckbox, IonToggle, IonActionSheet, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonButton, IonItem, IonInput, useIonModal, IonSegmentButton, IonSegment } from '@ionic/react';
import { Excalidraw, WelcomeScreen, MainMenu, exportToCanvas, exportToSvg, exportToBlob } from "@excalidraw/excalidraw";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  AppState,
  ExcalidrawImperativeAPI,
  ExcalidrawProps
} from "@excalidraw/excalidraw/types/types";
import { add, search, cog, settingsOutline, settings } from 'ionicons/icons';
import HandSketch from '../components/HandSketch';
import './Home.css';

export default function Home() {
  const [handlerMessage, setHandlerMessage] = React.useState('');
  const [roleMessage, setRoleMessage] = React.useState('');
  const [sketchName, setSketchName] = React.useState('');
  const [sketches, setSketches] = React.useState<{ id: number; name: string; date: string; image: string }[]>([]);
  const [formattedDateTime, setFormattedDateTime] = React.useState('');

  React.useEffect(() => {
    const getCurrentDateTime = () => {
      const currentDateTime = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      setFormattedDateTime(currentDateTime);
    };

    getCurrentDateTime();
  }, []);

  React.useEffect(() => {
    // Retrieve sketches from local storage or a database
    const savedSketches = JSON.parse(localStorage.getItem('sketches') || '[]');
    setSketches(savedSketches);
  }, []);

  const handleCreateSketch = (inputs: { SketchName: string }) => {
    console.log('Created New Sketch: ' + inputs.SketchName);
    setSketchName(inputs.SketchName);
    createNewSketch();
  };

  const createNewSketch = () => {
    // Generate a new sketch object with a unique ID and other properties
    const newSketch = {
      id: Date.now(),
      name: sketchName,
      date: formattedDateTime,
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    };

    // Add the new sketch to the existing sketches
    const updatedSketches = [...sketches, newSketch];

    // Save the updated sketches to local storage or a database
    localStorage.setItem('sketches', JSON.stringify(updatedSketches));

    // Update the state with the new sketches
    setSketches(updatedSketches);

    // Return Excalidraw Component in a Modal

    return <HandSketch />;

  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>HandSketch</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" ios={cog} md={settings}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HandSketch</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Grid of cards */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {sketches.map((sketch) => (
            <div key={sketch.id} className="max-w-2xl my-4 mx-auto">
              <IonCard>
                <img alt="Sketch Preview" src={sketch.image} />
                <IonCardHeader>
                  {/* <IonChip color="primary">{sketch.date}</IonChip> */}
                  <IonCardTitle>{sketch.name}</IonCardTitle>
                  <IonCardSubtitle>Sketch</IonCardSubtitle>
                  <IonCardSubtitle>Modified On: {sketch.date}</IonCardSubtitle>
                  <IonButton fill="solid">Open</IonButton>
                </IonCardHeader>
              </IonCard>
            </div>
          ))}
        </div>

        {/* FAB */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton translucent={true} id="name-alert">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Alert */}
        <IonAlert
          header="Create New Sketch"
          trigger="name-alert"
          translucent={true}
          inputs={[
            {
              name: 'SketchName',
              placeholder: 'Name of your Sketch (Max. 20 Characters)',
              attributes: {
                maxlength: 20,
              },
            },
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                setHandlerMessage('Cancel Creating New Sketch');
              },
            },
            {
              text: 'Create',
              role: 'confirm',
              handler: handleCreateSketch,
            },
          ]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};
