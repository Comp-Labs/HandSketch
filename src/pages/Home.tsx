import * as React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonChip, IonActionSheet, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonButton, IonItem, IonInput, useIonModal,
} from '@ionic/react';
import { camera, trash, close, add } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import './Home.css';

const ExcalidrawModal = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = React.useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Sketch</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(inputRef.current?.value, 'done')} strong={true}>
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      </IonContent>
    </IonPage>
  );
};

export default function Home() {
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

  const createNewSketch = () => {
    // Generate a new sketch object with a unique ID and other properties
    const newSketch = {
      id: Date.now(),
      name: 'HandSketch: New Sketch',
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

    return <ExcalidrawModal />;

  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>HandSketch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HandSketch</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>{formattedDateTime}</p>
        {/* Grid of cards */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {sketches.map((sketch) => (
            <div key={sketch.id} className="max-w-2xl my-4 mx-auto">
              <IonCard>
                <img alt="Sketch Preview" src={sketch.image} />
                <IonCardHeader>
                  <IonChip color="primary">{sketch.date}</IonChip>
                  <IonCardTitle>{sketch.name}</IonCardTitle>
                  <IonCardSubtitle>Sketch</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Modified On: {formattedDateTime}</IonCardContent>
              </IonCard>
            </div>
          ))}
        </div>

        {/* FAB */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton translucent={true} routerLink="/sketch" onClick={createNewSketch}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
