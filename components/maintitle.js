import styles from '@/styles/Home.module.css'

export function MainTitle(props){
  return(
    // <div >
    //   <h1>{props.maintitle} PAGE</h1> 
    // </div>
    <div className={styles.title}>
      <h1>{props.maintitle} page</h1> 
    </div>         
  )
}
