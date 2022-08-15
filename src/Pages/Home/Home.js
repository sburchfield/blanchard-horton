import Header from '../../Components/Header/Header'
import Issues from '../../Components/Issues/Issues'
import Slogan from '../../Components/Slogan/Slogan'
// import Statements from '../../Components/Statements/Statements'

//comment to kick of pipeline

const Home = () => {
     return (
          <div>
               <Header />
               <Issues />
               <Slogan />
               {/* <Statements /> */}
          </div>
     )
}

export default Home;