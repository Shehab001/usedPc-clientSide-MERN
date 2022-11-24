import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes/Routes";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto h-full">
      <RouterProvider router={router}> </RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
