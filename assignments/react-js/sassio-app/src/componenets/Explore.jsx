export default function Explore() {
    return (
        <>     <div className="row p-2">

            <div className="app-screnshot m-5 p-8">

                <div className="col text-center">

                    <button className="speciale-1 appsc">EXPLORE NEW PLACES</button><br />

                    <h1 className="display-3">App ScreenShot</h1>

                    <br />
                </div>
                <div className="col-1 apps">

                    <img src="./images/market.png" alt="" className="screen market" />

                    <img src="./images/protofolio.png" alt="" className="screen pro" />

                    <img src="./images/trading.png" alt="" className="screen trading" />

                </div>
                <div className="bullet-container">

                    <div className="bullet"></div>

                    <div className="bullet"></div>

                    <div className="bullet"></div>

                    <div className="bullet"></div>

                    <div className="bullet"></div>

                </div>
            </div>
        </div></>
    )
}