import cx from "classnames";
import Link from "next/link";

// library untuk membuat class active atau tidak
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
  // ? itu untuk memberi tahu props itu tidak wajib
}
export default function Menu(props: Partial<MenuProps>) {
  // Partial itu jadi tidak harus mendifine propsnya
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {/* {props.title} */}
          {/* // bisa juga menggunakan props seperti diatas */}
          {title}
        </a>
      </Link>
    </li>
  );
}
