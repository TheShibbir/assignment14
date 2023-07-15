
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header"
const App = () => {
  return (
    <div>


<Header className="header" title="My Website"    />
<Content/>
<Footer qoute="There is always one more bug to fix. – Ellen Ullman"   />




          </div>
  );
};

export default App;