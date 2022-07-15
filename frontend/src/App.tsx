import Header from "./components/header/Header"
import SalesCard from "./components/sales-card/SalesCard"

function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-card-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
