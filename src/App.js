import React, {useState} from 'react';
import './App.css';
import fetch from 'node-fetch';
import {Collapse} from "antd";
import 'antd/dist/antd.css';

const {Panel} = Collapse;

const number = 47

const resp = async (index) => await fetch("https://www.perekrestok.ru/api/customer/1.4.1.0/catalog/product/grouped-feed", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9",
        "auth": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJmNGU2ZjAxNC0zZGY3LTQyYzctYTUwNy1mMmI4ZjZjZGZjOTMiLCJpYXQiOjE2NTM5MzczNTIsImV4cCI6MTY1Mzk2NjE1MiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoxfQ.AKkl9OwZlNyhIAAVJMpPudXg2IqRZrBCgv5UDcuUnlcqiywJ_jQEyg7qobPHlciOg0Rokj08Co1LnsAgPP25_nJvAQJ1u3T6ln0kA5qFr7KCR5yGW4LYbQaJm-LiPS5t8eDu4NT-IhwGELG-_NcZNAIXqG2dFVJbIipA42xbsXephEQW",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_gcl_au=1.1.1462374725.1646241192; tmr_lvid=bd61ace2685463ce0fc348c1ed5b7afb; tmr_lvidTS=1646241193527; _ym_d=1646241194; _ym_uid=1646241194200600609; _fbp=fb.1.1646241194573.222076438; flocktory-uuid=c762819a-d2a1-4e5e-aa95-a7be39512fe3-6; agreements=j:{\"isCookieAccepted\":true,\"isAdultContentEnabled\":false,\"isAppAppInstallPromptClosed\":false}; TS0115a7cc=01a93f7547ffea47476d8566a474fd9ba553deb627eface2fef37b602ecdbbcd07deb32325d00e1bd77755ddea7e1b0ce34febea71ce41188168fa8eb41b5e75dd221dbe5e; _ym_isad=1; _ym_visorc=b; _gid=GA1.2.1671984734.1653937356; _dc_gtm_UA-189134493-1=1; _gp100024EE={\"hits\":1,\"vc\":1}; _gpVisits={\"isFirstVisitDomain\":true,\"todayD\":\"Mon%20May%2030%202022\",\"idContainer\":\"100024EE\"}; tmr_detect=0%7C1653937358384; _ga_5K49P5RFR8=GS1.1.1653937355.17.1.1653937371.44; _ga=GA1.1.1503696083.1646241193; tmr_reqNum=182; session=j:{\"accessToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJmNGU2ZjAxNC0zZGY3LTQyYzctYTUwNy1mMmI4ZjZjZGZjOTMiLCJpYXQiOjE2NTM5MzczNTIsImV4cCI6MTY1Mzk2NjE1MiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoxfQ.AKkl9OwZlNyhIAAVJMpPudXg2IqRZrBCgv5UDcuUnlcqiywJ_jQEyg7qobPHlciOg0Rokj08Co1LnsAgPP25_nJvAQJ1u3T6ln0kA5qFr7KCR5yGW4LYbQaJm-LiPS5t8eDu4NT-IhwGELG-_NcZNAIXqG2dFVJbIipA42xbsXephEQW\",\"refreshToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiIwOWJjYzNkOC1jODZhLTQxOWUtYThkMy03OTY1NDNjNTU2MjkiLCJpYXQiOjE2NTM5MzczNTIsImV4cCI6MTY2OTQ4OTM1MiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoyfQ.ARnPtx5tYFyKYlY-3xXx701mFGlPAs4X3pvCYCqCkVIEb_YW1cdmLcGAWYnGPgVDoRW0JmC9dHopgrpvKreOwj73AUH1_54-pK09JTDh_Xmy2ZjE-uzdYS7o8rral4hwqvN7OysYt_iyIw3q3Z9n9-ZceSMVkaFi0O6IyEtNZJcDzqsW\",\"accessTokenExpiredAt\":1653966152659,\"refreshTokenExpiredAt\":1669489352659,\"device\":{\"uuid\":\"b820d2cb-a888-42fa-a69f-02b9eeb563cd\"}}"
    },
    "referrerPolicy": "no-referrer",
    "body": "{\"filter\":{\"category\":"+index+"}}",
    "method": "POST"
});

const result = async (index) => await resp(index).then((response) => response.json())

function App() {
    const [items, setItems] = useState([])
    const handleClick = () => {
        for (let i = 114; i < 125; i++) result(i).then((data) => {
            setItems(prevArray => [...prevArray, data.content])
        })
    }
    const show = () => {
        console.log(items)
    }

    let id = 0;
    return (
        <div className="App">
            <div>
                data: <button onClick={handleClick}>click</button>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                show in console: <button onClick={show}>check</button>
            </div>
            <br/>
            <br/>
            {items
                ? items.map(obj => <div>
                    <h1>Категория</h1>
                    {obj.items.map(item => <Collapse>
                        <Panel key={id} header={item.group.title}>
                            {item.products.map(product => {
                                id++
                                return <p>{product.title + " ---цена: " + product.medianPrice}</p>
                            })}
                        </Panel>
                    </Collapse>)}
                </div>)
                : "null"}
        </div>
    );
}

export default App;
