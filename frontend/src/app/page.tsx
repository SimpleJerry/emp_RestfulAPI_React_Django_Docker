"use client"
import Main from "@/components/Main";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

export default function Home() {
  return (
      <Provider store={store}>
          <Main/>
      </Provider>

  );
}
