import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes/Routes";
import Footer from "./shared/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto h-full">
      <RouterProvider router={router}> </RouterProvider>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid black",
            padding: "10px",
            color: "#713200",
          },
        }}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
