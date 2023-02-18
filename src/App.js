import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div>
        Hello , welcome to jobflix
        <RouterProvider router={ routes }>
        </RouterProvider>
    </div>
  );
}

export default App;
