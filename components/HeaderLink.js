import Link from "next/link";
import classes from "./HeaderLink.module.css";

// export function HeaderLink () {
//   return(
//       <headerLink className={styles.headerLink}>
//         <Link href="/">
//           Index
//         </Link>
//         <Link href="/about">
//           About
//         </Link>
//       </headerLink> 
//   );
// }

// aタグ入れる場合は　legacyBehavior必要
export function HeaderLink () {
  return(
      <headerLink className={classes.headerLink}>
        <Link href="/" legacyBehavior>
         <a className={classes.anchor}>Index</a>
        </Link>
        <Link href="/about" legacyBehavior>
         <a className={classes.anchor}>About</a>
        </Link>
      </headerLink>
  );
}