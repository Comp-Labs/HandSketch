import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HandSketch+</IonTitle>
          </IonToolbar>
        </IonHeader>
        <iframe src="https://excalidraw.com" title="HandSketch+" width="100%" height="100%"></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Home;
