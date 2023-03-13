import styles from './Maintitle.module.css'

export function MainTitle(props){
  return(
    <div className={styles.title}>
      <h1>{props.maintitle} page</h1> 
    </div>         
  )
}
