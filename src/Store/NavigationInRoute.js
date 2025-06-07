import { BrowserRouter, Route, Routes ,Link, Outlet } from "react-router-dom";

function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/neet/class11neet" element={<Class11Component/>}/>
      <Route path="/neet/class12neet" element={<Class12Component/>}/>
      <Route path="/" element={<MainComponent/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Layout(){
  return <div style={{height:"100vh"}}>
    {/* //you can define these 3 link as component and render here  */}
      <Header/>
    <div style={{height:"90vh", backgroundColor:"blue"}}>
      <Outlet/>
    </div>
  </div>
}

function Header(){
  return <>
    <div style={{height:"5vh"}}>
      <Link to="/neet/class11neet">class 11</Link>
      <Link to="/neet/class12neet">class 12</Link>
      <Link to="/">Home</Link>
    </div>
  </>
}

function Class11Component(){
  return(
    <>
    <div>
      HI from class 11 page
    </div>
    </>
  )
}

function Class12Component() {
   return (
     <div>Class12Component</div>
   )
 }

function MainComponent(){
  return (
    <div>
      Hi from Main page
    </div>
  )
}

export default App;

