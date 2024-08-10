//import Quill from 'quill'
import React from 'react'
import styles from './page.module.css'
import QuillTwo from '@/components/quillTwo/QuillTwo'
const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Quill Editor with Syntax Highlighting</h1>
      <QuillTwo className={styles.editor} />
    </div>
  );
}

export default Home