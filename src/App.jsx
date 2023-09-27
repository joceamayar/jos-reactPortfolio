import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header>

      </Header>

      <PageContent>
        <Outlet></Outlet>
      </PageContent>

      <Footer>

      </Footer>

    </div>
  )
}

function PageContent({ children }) {
  // const children = props.children
  return <div>{children}</div>
}

export default App


