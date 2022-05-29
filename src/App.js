import React, {useState} from 'react';
import './App.css';
import fetch from 'node-fetch';

const resp = async () => await fetch("https://www.perekrestok.ru/api/customer/1.4.1.0/catalog/product/grouped-feed", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9",
        "auth": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJmMWMxYjViNy1kMTQzLTQ3ZTctYmNkYi1jOTE2MTQxNmFlMGEiLCJpYXQiOjE2NTM4MjA3NTYsImV4cCI6MTY1Mzg0OTU1NiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoxfQ.AHNJZejioNSf1ti1MMfQx4Xh9Bbe4pd_vOoMZyhUcJnUKWtBJbPdLaQ1jZLsJlSLoGdokhV3R4f4F9_PXZlyJPNxAUNllEEFZIP4jsWFk1xl5BMFRQcqo7wvXw4OGeBDQgsNmDEXERvkrvsOuf5LK7Ex99WXmQl73ZOZE_G2R1cMo1kI",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_gcl_au=1.1.1462374725.1646241192; tmr_lvid=bd61ace2685463ce0fc348c1ed5b7afb; tmr_lvidTS=1646241193527; _ym_d=1646241194; _ym_uid=1646241194200600609; _fbp=fb.1.1646241194573.222076438; flocktory-uuid=c762819a-d2a1-4e5e-aa95-a7be39512fe3-6; agreements=j:{\"isCookieAccepted\":true,\"isAdultContentEnabled\":false,\"isAppAppInstallPromptClosed\":false}; TS0115a7cc=01a93f754754e328ab779439893f114721279c94e46ae4a62b0a8da3309e90e9afe392e3fe8d72c66edfb4c86c8469ea64d3b3631839981acc2796b17d51a6982671c994ba; _ym_isad=1; _ym_visorc=b; _gid=GA1.2.155689980.1653820760; _gpVisits={\"isFirstVisitDomain\":true,\"todayD\":\"Sun%20May%2029%202022\",\"idContainer\":\"100024EE\"}; tmr_detect=0%7C1653820762592; _gp100024EE={\"hits\":1,\"vc\":1,\"ac\":1}; tmr_reqNum=136; session=j:{\"accessToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJmMWMxYjViNy1kMTQzLTQ3ZTctYmNkYi1jOTE2MTQxNmFlMGEiLCJpYXQiOjE2NTM4MjA3NTYsImV4cCI6MTY1Mzg0OTU1NiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoxfQ.AHNJZejioNSf1ti1MMfQx4Xh9Bbe4pd_vOoMZyhUcJnUKWtBJbPdLaQ1jZLsJlSLoGdokhV3R4f4F9_PXZlyJPNxAUNllEEFZIP4jsWFk1xl5BMFRQcqo7wvXw4OGeBDQgsNmDEXERvkrvsOuf5LK7Ex99WXmQl73ZOZE_G2R1cMo1kI\",\"refreshToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiIwOWJjYzNkOC1jODZhLTQxOWUtYThkMy03OTY1NDNjNTU2MjkiLCJpYXQiOjE2NTM4MjA3NTYsImV4cCI6MTY2OTM3Mjc1NiwiZCI6ImI4MjBkMmNiLWE4ODgtNDJmYS1hNjlmLTAyYjllZWI1NjNjZCIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI4N2YyODAyZC04NDEyLTRlYTUtOGU2My1iZDlmZWJjZjA0Y2YiLCJ0IjoyfQ.AGKs4K40Sh2HtfcWBsKKhMw6lfYr1HBiMGM9b-0N6zgAsODR5ibkkhz9b-apjf4ZOPDIwf-KvF-GYgVoGrS13hDTAG0lC-7UOLqUcCKR-cox7Vo6UDsYbtMFt65wa_vDMtwGlBQx6Xf9yMv06Z3oKYZThMgV0xipPaOdWcSzIMInP-Hj\",\"accessTokenExpiredAt\":1653849556639,\"refreshTokenExpiredAt\":1669372756639,\"device\":{\"uuid\":\"b820d2cb-a888-42fa-a69f-02b9eeb563cd\"}}; _ga=GA1.1.1503696083.1646241193; _ga_5K49P5RFR8=GS1.1.1653820760.15.1.1653820831.56"
    },
    "referrerPolicy": "no-referrer",
    "body": "{\"filter\":{\"category\":471}}",
    "method": "POST"
});

const result = async () => await resp().then((response) => response.json())

function App() {
    const [items, setItems] = useState(null)
    const handleClick = () => result().then((data) => {
        // console.log(data)
        setItems(data)
    })
    const show = () => {
        console.log(
            items.content.items.map(item =>
                    item
                // item.products.map(product =>
                //     product.title
                // )

            )
        )
    }

    const cout = () => {
        return items.content.items.map(item => <div>
                {item.group.title}
                {item.products.map(product =>
                    product.title
                )}
            </div>
        )

    }

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
                ? items.content.items.map(item => <div>
                    <h1>{item.group.title}</h1>
                    {item.products.map(product =>
                        <div>{product.title}</div>
                    )}</div>)
                : "null"}
        </div>
    );
}

export default App;
