import Link from "next/link";
import classes from "@/src/components/HeaderLink/HeaderLink.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const HeaderLink = () => {
  return (
    <headerLink className={classes.headerLink}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </headerLink>
  );
};
