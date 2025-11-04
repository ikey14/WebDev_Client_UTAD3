import Link from "next/link"
//import "@/app/globals.css";

export const metadata = {
  title: "Contact",
  description: "Contact jsjsjsjsjjsjssss",
};

export default function ContactLayout({ children }) {
  return (<>

        <nav>
          <h1>Contact Section</h1>
          <ul>
            <li>
              <Link href = "/contct/book">Book</Link>
            </li>
            <li>
              <Link href = "/contct/book/info">Info</Link>
            </li>
          </ul>
        </nav>

        {children}
  </>);
}