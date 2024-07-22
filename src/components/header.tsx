import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";

export default function Header() {
    const navigate = useTranslations("Navigation");
    return (
        <header className="p-4">
            <nav className=" flex items-center justify-between">
                <Link href="/">{navigate("home")}</Link>
                <LocalSwitcher />
            </nav>
        </header>
    );
}
