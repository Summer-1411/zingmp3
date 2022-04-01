import { Routes, Route, Link } from "react-router-dom";
import Personal from "./Personal/Personal"
import Discover from "./Discover/Discover"
import Zingchat from "./Zingchat/Zingchat"
import Radio from "./Radio/Radio";
import Overview from "./Personal/pages/Overview";
import TheSong from "./Personal/pages/TheSong";
import PlayList from "./Personal/pages/Playlist";
import Album from "./Personal/pages/Album";
import Podcast from "./Personal/pages/Podcast";
import MusicNew from "./MusicNew/MusicNew";
import Category from "./Category/Category";
import Top100 from "./Top100/Top100";
import Mv from "./Mv/Mv";
function Main(){
    return (
        <div className="main">
            {/* <Personal /> */}
            <Routes>
                <Route path="/" element = {<Personal />}>
                    <Route path="" element = {<Overview />} />
                    <Route path="music" element = {<TheSong />} />
                    <Route path="playlist" element = {<PlayList />} />
                    <Route path="podcast" element = {<Podcast />} />
                    <Route path="album" element = {<Album />} />
                </Route>
                <Route path="/discover" element = {<Discover />} />
                <Route path="/zingchat" element = {<Zingchat />} />
                <Route path="/radio" element = {<Radio />} />
                <Route path="/musicnew" element = {<MusicNew />} />
                <Route path="/category" element = {<Category />} />
                <Route path="/top100" element = {<Top100 />} />
                <Route path="/mv" element = {<Mv />} />

            </Routes>
        </div>
    )
}
export default Main;