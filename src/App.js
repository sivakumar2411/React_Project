import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomeBR from './components/HomeBR';
import Reviews  from './components/Reviews';
import ReviewTA from './components/ReviewTA';
import  Home  from './components/Home';
import  SignUp  from './components/SignUp';
import  SignIn  from './components/SignIn';
import Contact  from './components/Contact.jsx';
import Books from './components/Books.jsx';
import { Profile } from './components/Profile.jsx';
function App() {
  return (
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/Home' exact element={<Home />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/HomeBR' element={<HomeBR />}/>
        <Route path='/Reviews' element={<Reviews />}/>
        <Route path='/Books' element={<Books />}/>
        <Route path='/ReviewTA' element={<ReviewTA />}/>
        <Route path='/Contact' element={<Contact />}/>
        {/* <Route path='/Profile' element={<Profile />}/> */}
      </Routes>
  );
}
export default App;