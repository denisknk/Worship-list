import React from 'react';
import { RouteSetup } from './config/routes.config';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <RouteSetup />
    </div>
  );
}

export default App;
