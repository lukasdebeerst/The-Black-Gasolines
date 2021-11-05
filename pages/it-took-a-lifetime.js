import Navigation from "../containers/Navigation/Navigation";
import Album from "../containers/Album/Album";
import StoryProcess from "../containers/StoryProcess/StoryProcess";


const ItTookALifetime = () => {

    return (
        <>
        <Navigation />
        <main>
            <Album />
            <StoryProcess />
        </main>
        </>
    )

}

export default ItTookALifetime;