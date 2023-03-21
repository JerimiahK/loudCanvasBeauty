import "./pageContainer.css";
import "./FAQS";
import FAQS from "./FAQS";
import ConnectInfo from "./ConnectInfo";

export default function pageContainer() {
    return (
        <div className="connectPageContainer">
            <h1 className="connectHeaderText">Connect</h1>
            <div className="pageContainer">
                <FAQS />
                <ConnectInfo />
            </div>
        </div>
    );
}
