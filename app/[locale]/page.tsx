import { Home } from "./home/pages";

export default function Main({ params: { locale }}: {params: {locale: string}}) {

    return (
        <>
            <Home />
        </>
    )
}