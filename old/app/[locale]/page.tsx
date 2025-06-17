import AboutMe from "./aboutMe/page";
import Contact from "./contact/page";
import { Home } from "./home/pages";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Main({ params: { locale }}: {params: {locale: string}}) {

    return (
        <>
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}