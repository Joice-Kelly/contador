import { useRoutes } from 'react-router-dom'

import styles from './components/Header/styles.module.css'
import Header from './components/Header'
import routes from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return(
    <>
    <Header />
    <div className={styles.container} > {elements}
    </div>
    </>
  )
}

export default App;
