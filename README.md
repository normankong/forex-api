# Real Time Forex API
[![Publish](https://github.com/normankong/forex-api/actions/workflows/main.yml/badge.svg)](https://github.com/normankong/forex-api/actions/workflows/main.yml)  

This is a API service to provide the Forex currency quote, host on Cloudflare Worker platform.  
Data source from [Financial Modeling Prep](https://financialmodelingprep.com/). Register your free API Key [here](https://financialmodelingprep.com/register).

### To use directly
https://forex.normankong.workers.dev/                  (All Currency)  
https://forex.normankong.workers.dev/HKD               (Match all Currency with this ccy, return in HKD/XXX)  
https://forex.normankong.workers.dev/HKD?forward=false (Match all Currency with this ccy, return in XXX/HKD)  
https://forex.normankong.workers.dev/JPYHKD            (Match only the specific pair)  


### To Build 
```
npm i --include=dev
npm run format
npm run pack
```

### Deployment
```
npm run dev
npm run publish
```

### Setup Key Value Binding in Cloudflare
API Key is stored in the Cloudflare KV (Key-value) via the namespace binding
```
wrangler kv:namespace create "NAMESPACE"
wrangler kv:namespace create "NAMESPACE" --preview
wrangler kv:key put --binding=NAMESPACE "API_KEY" "XXXXXXXXXXX"
```
Important Note : For development environment, the API_KEY value need to stored manually via Cloudflare website.

### Sample Response
```json
[
    {
        "ticker": "EUR/USD",
        "bid": "1.19179",
        "ask": "1.19179",
        "open": "1.19955",
        "low": "1.18916",
        "high": "1.20065",
        "changes": -0.6469092576382802,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "JPY/USD",
        "bid": "0.009072",
        "ask": "0.009072",
        "open": "0.009037",
        "low": "0.009077",
        "high": "0.009023",
        "changes": 0.39128863184528534,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "GBP/USD",
        "bid": "1.39290",
        "ask": "1.39290",
        "open": "1.39901",
        "low": "1.38959",
        "high": "1.40088",
        "changes": -0.43673740716650056,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "CHF/USD",
        "bid": "1.090465",
        "ask": "1.090465",
        "open": "1.100522",
        "low": "1.101831",
        "high": "1.088400",
        "changes": -0.9222371404045455,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "CAD/USD",
        "bid": "0.809953",
        "ask": "0.809953",
        "open": "0.814584",
        "low": "0.815488",
        "high": "0.807872",
        "changes": -0.5718381909711496,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "AUD/USD",
        "bid": "0.75565",
        "ask": "0.75565",
        "open": "0.76080",
        "low": "0.75400",
        "high": "0.76460",
        "changes": -0.6769190325972644,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "NZD/USD",
        "bid": "0.70078",
        "ask": "0.70078",
        "open": "0.70508",
        "low": "0.69919",
        "high": "0.71028",
        "changes": -0.6098598740568562,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "NOK/USD",
        "bid": "0.117141",
        "ask": "0.117141",
        "open": "0.117935",
        "low": "0.118383",
        "high": "0.116643",
        "changes": -0.6774168059278655,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "SEK/USD",
        "bid": "0.117079",
        "ask": "0.117079",
        "open": "0.118249",
        "low": "0.118428",
        "high": "0.116771",
        "changes": -0.9990847536994234,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "INR/USD",
        "bid": "0.013473",
        "ask": "0.013473",
        "open": "0.013575",
        "low": "0.013599",
        "high": "0.013447",
        "changes": -0.7547579616105088,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "XPT/USD",
        "bid": "1062.600",
        "ask": "1062.600",
        "open": "1124.200",
        "low": "1049.397",
        "high": "1136.150",
        "changes": -5.479452054794533,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "XAU/USD",
        "bid": "1781.600",
        "ask": "1781.600",
        "open": "1812.495",
        "low": "1767.292",
        "high": "1825.338",
        "changes": -1.7045564263625543,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "ZAR/USD",
        "bid": "0.070897",
        "ask": "0.070897",
        "open": "0.071463",
        "low": "0.071732",
        "high": "0.070614",
        "changes": -0.7982391573110046,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "XAG/USD",
        "bid": "26.02000",
        "ask": "26.02000",
        "open": "26.94800",
        "low": "25.77571",
        "high": "27.24800",
        "changes": -3.4436692890010416,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "SAR/USD",
        "bid": "0.266650",
        "ask": "0.266650",
        "open": "0.266650",
        "low": "0.266650",
        "high": "0.266650",
        "changes": 0,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "TRY/USD",
        "bid": "0.114758",
        "ask": "0.114758",
        "open": "0.116124",
        "low": "0.116317",
        "high": "0.114543",
        "changes": -1.1900338151685173,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "THB/USD",
        "bid": "0.031811",
        "ask": "0.031811",
        "open": "0.031967",
        "low": "0.032006",
        "high": "0.031755",
        "changes": -0.4922958890096538,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "HUF/USD",
        "bid": "0.003351",
        "ask": "0.003351",
        "open": "0.003404",
        "low": "0.003413",
        "high": "0.003348",
        "changes": -1.5792787733360514,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "XPD/USD",
        "bid": "2536.000",
        "ask": "2536.000",
        "open": "2806.700",
        "low": "2504.917",
        "high": "2817.200",
        "changes": -9.644778565575225,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "BCO/USD",
        "bid": "73.193",
        "ask": "73.193",
        "open": "73.997",
        "low": "72.117",
        "high": "74.608",
        "changes": -1.086530535021693,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "PLN/USD",
        "bid": "0.261566",
        "ask": "0.261566",
        "open": "0.264866",
        "low": "0.265431",
        "high": "0.260981",
        "changes": -1.2615547609588091,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "MXN/USD",
        "bid": "0.048890",
        "ask": "0.048890",
        "open": "0.048992",
        "low": "0.049197",
        "high": "0.048487",
        "changes": -0.20968674368245063,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "CZK/USD",
        "bid": "0.046640",
        "ask": "0.046640",
        "open": "0.047071",
        "low": "0.047093",
        "high": "0.046553",
        "changes": -0.9249431030546673,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "XCU/USD",
        "bid": "4.16910",
        "ask": "4.16910",
        "open": "4.26466",
        "low": "4.14810",
        "high": "4.33233",
        "changes": -2.240741348665541,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "DKK/USD",
        "bid": "0.160251",
        "ask": "0.160251",
        "open": "0.161297",
        "low": "0.161446",
        "high": "0.159908",
        "changes": -0.6522833141927972,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "SGD/USD",
        "bid": "0.745490",
        "ask": "0.745490",
        "open": "0.748234",
        "low": "0.749378",
        "high": "0.744059",
        "changes": -0.3681312103435918,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "HKD/USD",
        "bid": "0.128786",
        "ask": "0.128786",
        "open": "0.128817",
        "low": "0.128827",
        "high": "0.128775",
        "changes": -0.02408874965219788,
        "date": "2021-06-17 14:33:57"
    },
    {
        "ticker": "CNH/USD",
        "bid": "0.154917",
        "ask": "0.154917",
        "open": "0.155244",
        "low": "0.155723",
        "high": "0.154669",
        "changes": -0.21097668699846106,
        "date": "2021-06-17 14:33:57"
    }
]
```

For installation of Cloudflare worker and Wrangler, it can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

For information related to KV in Cloudflare, visit [here](https://developers.cloudflare.com/workers/runtime-apis/kv).