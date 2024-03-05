import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const currentPath = usePathname();

  return (
    <ul className="menu menu-horizontal mx-auto my-5 lg:my-0 text-center flex flex-col lg:flex-row gap-3">
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/"
              ? "text-white bg-orange-900 rounded-md"
              : "border-transparent"
          }`}
        >
          Página inicial
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/"
              ? "text-white bg-orange-900 rounded-md"
              : "border-transparent"
          }`}
        >
          Khaiya Editores
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/"
              ? "text-white bg-orange-900 rounded-md"
              : "border-transparent"
          }`}
        >
          Khaiya Serviços
        </Link>
      </li>
      <li>
        <details className="w-full">
          <summary className="p-0 mt-1">Sobre</summary>
          <ul className="p-2 bg-base-100 w-52 rounded-t-none z-50">
            <li>
              <Link
                href="#"
                className={`px-2 py-1 ${
                  currentPath === "/"
                    ? "text-white bg-orange-900 rounded-md"
                    : "border-transparent"
                }`}
              >
                Missão, Visão e Valores
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`px-2 py-1 ${
                  currentPath === "/"
                    ? "text-white bg-orange-900 rounded-md"
                    : "border-transparent"
                }`}
              >
                Equipa
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/"
              ? "text-white bg-orange-900 rounded-md"
              : "border-transparent"
          }`}
        >
          Contacto
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/"
              ? "text-white bg-orange-900 rounded-md"
              : "border-transparent"
          }`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};
