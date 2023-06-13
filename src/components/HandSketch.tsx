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
import './HandSketch.module.css';

export default function HandSketch() {

    // Ref/useState
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const excalidrawRef = React.useRef<ExcalidrawImperativeAPI>(null);
    const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
    const [viewModeEnabled, setViewModeEnabled] = React.useState(false);
    const [zenModeEnabled, setZenModeEnabled] = React.useState(false);
    const [gridModeEnabled, setGridModeEnabled] = React.useState(false);
    const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

    // Check Dark Mode
    React.useEffect(() => {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Set the initial theme based on user preference
        setIsDarkTheme(prefersDark.matches);

        // Listen for changes to the prefers-color-scheme media query
        const handleChangeTheme = (event: MediaQueryListEvent) => {
            setIsDarkTheme(event.matches);
        };

        prefersDark.addListener(handleChangeTheme);

        // Clean up the event listener when the component is unmounted
        return () => {
            prefersDark.removeListener(handleChangeTheme);
        };
    }, []);

    // Excalidraw API - Blob Export
    React.useEffect(() => {
        function getImage() {
            async () => {
            if (!excalidrawAPI) {
                return;
            }
            const blob = await exportToBlob({
                elements: excalidrawRef.current!.getSceneElements(),
                mimeType: "image/jpg",
                appState: {
                    exportWithDarkMode: isDarkTheme ? true : false,
                },
                files: null
            });
            setBlobUrl(window.URL.createObjectURL(blob));
        }}
    }, [excalidrawAPI]);

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>Sketch</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="excalidraw-wrapper">
                    <Excalidraw
                        ref={excalidrawRef}
                        viewModeEnabled={viewModeEnabled}
                        zenModeEnabled={zenModeEnabled}
                        gridModeEnabled={gridModeEnabled}
                        theme={isDarkTheme ? 'dark' : 'light'}
                        name="HandSketch"
                    >
                        <MainMenu>
                            <MainMenu.Group title="Canvas Options">
                                <MainMenu.DefaultItems.Export />
                                <MainMenu.DefaultItems.SaveAsImage />
                                <MainMenu.DefaultItems.ClearCanvas />
                                <MainMenu.Item icon={<i className="fa-solid fa-eye" />} onSelect={() => setViewModeEnabled(!viewModeEnabled)}>
                                    View Mode
                                </MainMenu.Item>
                                {/* <MainMenu.Item icon={<i className="fa-solid fa-peace" />} onSelect={() => setZenModeEnabled(!zenModeEnabled)}>Zen Mode</MainMenu.Item> */}
                                <MainMenu.Item icon={<i className="fa-solid fa-table-cells-large" />} onSelect={() => setGridModeEnabled(!gridModeEnabled)}>
                                    Grid Mode
                                </MainMenu.Item>
                                <MainMenu.DefaultItems.ChangeCanvasBackground />
                            </MainMenu.Group>
                            <MainMenu.Group title="Tech Fiddle Links">
                                <MainMenu.ItemLink icon={<i className="fa-brands fa-github" />} href="https://github.com/Comp-Labs">
                                    GitHub
                                </MainMenu.ItemLink>
                                <MainMenu.ItemLink icon={<i className="fa-solid fa-globe" />} href="https://techfiddle.io">
                                    Website
                                </MainMenu.ItemLink>
                                <MainMenu.ItemLink icon={<i className="fa-brands fa-youtube" />} href="https://youtube.com/@techfiddle">
                                    YouTube
                                </MainMenu.ItemLink>
                                <MainMenu.ItemLink icon={<i className="fa-brands fa-discord" />} href="https://discord.gg/GAbzAGKccW">
                                    Discord
                                </MainMenu.ItemLink>
                                <MainMenu.ItemLink icon={<i className="fa-solid fa-box" />} href="https://bento.me/techfiddle">
                                    Bento
                                </MainMenu.ItemLink>
                            </MainMenu.Group>
                        </MainMenu>
                    </Excalidraw>
                </div>
                {/* <IonFooter translucent={true}>
          <IonToolbar>
            <IonCheckbox checked={zenModeEnabled} onChange={() => setZenModeEnabled(!zenModeEnabled)} labelPlacement="end">Zen Mode</IonCheckbox>
          </IonToolbar>
        </IonFooter> */}
            </IonContent>
        </IonPage>
    )
}