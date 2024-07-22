import { useTranslations } from "next-intl";

export default function Footer() {
    const footerMessage = useTranslations("Footer");

    return (
        <>
            <div className="my-10 text-center">
                <p>{footerMessage("title")}</p>
            </div>
            ;
        </>
    );
}
