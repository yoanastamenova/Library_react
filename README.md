 ## STEPS TO FOLLOW WHEN USING REACT ROUTE DOM
1. ` npm i react-router-dom `
2. import in main.jsx
```
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```
3. In App.jsx delete everything as components
4. + new folder in SRC - views + new folder - body + new file Body.jsx
5. In this file Body.jsx we need to import the following:
```
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';

export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />}/>
       </Routes>
    </>
  )
}

```
6. In App.jsx import the body.jsx
```

function App() {
  
  return (
    <>
      <Body />
    </>
  );
}

export default App;

```