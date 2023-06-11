import * as React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonCheckbox, IonToggle } from '@ionic/react';
import {
  Excalidraw,
  WelcomeScreen,
  MainMenu,
  exportToCanvas,
  exportToSvg,
  exportToBlob
} from "@excalidraw/excalidraw";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  AppState,
  ExcalidrawImperativeAPI,
  ExcalidrawProps
} from "@excalidraw/excalidraw/types/types";
import './HandSketch.css';

export default function HandSketch() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

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

  const excalidrawRef = React.useRef<ExcalidrawImperativeAPI>(null);
  const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
  const [viewModeEnabled, setViewModeEnabled] = React.useState(false);
  const [zenModeEnabled, setZenModeEnabled] = React.useState(false);
  const [gridModeEnabled, setGridModeEnabled] = React.useState(false);
  const [blobUrl, setBlobUrl] = React.useState<string | null>(null);
  const [canvasUrl, setCanvasUrl] = React.useState<string | null>(null);
  const [exportWithDarkMode, setExportWithDarkMode] = React.useState<boolean>(false);
  const [shouldAddWatermark, setShouldAddWatermark] = React.useState<boolean>(false);
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
            viewModeEnabled={viewModeEnabled}
            zenModeEnabled={zenModeEnabled}
            gridModeEnabled={gridModeEnabled}
            theme={isDarkTheme ? 'dark' : 'light'}
            name="HandSketch"
          // renderFooter={renderFooter}
          // renderTopRightUI={renderTopRightUI}
          >
            <WelcomeScreen />
            <MainMenu>
              <MainMenu.Group title="Canvas Options">
                <MainMenu.DefaultItems.Export />
                <MainMenu.DefaultItems.ClearCanvas />
                <MainMenu.Item onSelect={() => setViewModeEnabled(!viewModeEnabled)}>
                  View Mode
                </MainMenu.Item>
                <MainMenu.Item onSelect={() => setZenModeEnabled(!zenModeEnabled)}>
                  Zen Mode
                </MainMenu.Item>
                <MainMenu.Item onSelect={() => setGridModeEnabled(!gridModeEnabled)}>
                  Grid Mode
                </MainMenu.Item>
                <MainMenu.DefaultItems.ChangeCanvasBackground />
              </MainMenu.Group>
              <MainMenu.Group title="Tech Fiddle Links">
                <MainMenu.DefaultItems.Socials />
                <MainMenu.ItemLink href="https://google.com">
                  Icon {" "} Google
                </MainMenu.ItemLink>
                <MainMenu.ItemLink href="https://excalidraw.com">
                  Icon {" "} Excalidraw
                </MainMenu.ItemLink>
              </MainMenu.Group>
            </MainMenu>
          </Excalidraw>
        </div>
        {/* <div className="flex text-primary-500">
          <label title="Library">
            <input className="ToolIcon_type_checkbox" type="checkbox" name="editor-library" aria-label="Library" aria-keyshortcuts="0" />
            <div className="library-button"><div>
              <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" className="" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><line x1="3" y1="6" x2="3" y2="19"></line><line x1="12" y1="6" x2="12" y2="19"></line><line x1="21" y1="6" x2="21" y2="19"></line></g></svg>
            </div>
              <div className="library-button__label">Library</div>
            </div>
          </label>
          <button className="update-scene" onClick={updateScene}>
            Update Scene
          </button>
          <button
            className="reset-scene"
            onClick={() => {
              excalidrawRef.current!.resetScene();
            }}
          >
            Reset Scene
          </button>
          <label>
            <input
              type="checkbox"
              checked={viewModeEnabled}
              onChange={() => setViewModeEnabled(!viewModeEnabled)}
            />
            View mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={zenModeEnabled}
              onChange={() => setZenModeEnabled(!zenModeEnabled)}
            />
            Zen mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={gridModeEnabled}
              onChange={() => setGridModeEnabled(!gridModeEnabled)}
            />
            Grid mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => {
                let newTheme: "light" | "dark" = "light";
                if (theme === "light") {
                  newTheme = "dark";
                }
                setTheme(newTheme);
              }}
            />
            Switch to Dark Theme
          </label>
        </div> */}
        {/* <div className="export-wrapper button-wrapper">
          <label className="export-wrapper__checkbox">
            <input
              type="checkbox"
              checked={exportWithDarkMode}
              onChange={() => setExportWithDarkMode(!exportWithDarkMode)}
            />
            Export with dark mode
          </label>
          <label className="export-wrapper__checkbox">
            <input
              type="checkbox"
              checked={shouldAddWatermark}
              onChange={() => setShouldAddWatermark(!shouldAddWatermark)}
            />
            Add Watermark
          </label>
          <button
            onClick={async () => {
              const svg = await exportToSvg({
                elements: excalidrawRef.current!.getSceneElements(),
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode
                }
              });
              document.querySelector(".export-svg")!.innerHTML = svg.outerHTML;
            }}
          >
            Export to SVG
          </button>
          <div className="export export-svg"></div>

          <button
            onClick={async () => {
              const blob = await exportToBlob({
                elements: excalidrawRef.current!.getSceneElements(),
                mimeType: "image/png",
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode
                },
                files: null
              });
              setBlobUrl(window.URL.createObjectURL(blob));
            }}
          >
            Export to Blob
          </button>
          <div className="export export-blob">
            <img src={blobUrl!} alt="" />
          </div>

          <button
            onClick={async () => {
              const canvas = await exportToCanvas({
                elements: excalidrawRef.current!.getSceneElements(),
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode
                },
                files: null
              });
              setCanvasUrl(canvas.toDataURL());
            }}
          >
            Export to Canvas
          </button>
          <div className="export export-canvas">
            <img src={canvasUrl!} alt="" />
          </div>
        </div> */}
        <IonFooter translucent={true}>
          <IonToolbar>
            <IonCheckbox checked={zenModeEnabled} onChange={() => setZenModeEnabled(!zenModeEnabled)} labelPlacement="end">Zen Mode</IonCheckbox>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};