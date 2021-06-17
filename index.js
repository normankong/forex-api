
const ENDPOINT = "https://financialmodelingprep.com/api/v3/fx?apikey=%API_KEY%";
const VALID_SYMBOL = /^[A-Z]{3,6}$/;

// Main Handler
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname, searchParams } = new URL(request.url)
  const uriList = pathname.split('/');
  const isForward = getDirection(searchParams.get("forward"));

  // Get the ccy code
  let symbol = (uriList[1] != "") ? uriList[1] : "ALL";

  // Test valid symbol
  if (!VALID_SYMBOL.test(symbol)) {
    let error = { "error": `Invalid Symbol ${symbol}` };
    return new Response(JSON.stringify(error, null, ''), {
      headers: { 'content-type': 'text/json; charset=utf-8' },
    })
  }

  // Get API Key from KV Store
  const API_KEY = await NAMESPACE.get("API_KEY");

  // Replace Symobl
  let url = ENDPOINT.replace("%API_KEY%", API_KEY);

  // Fetch Stock Quote
  const response = await fetch(url, REQUEST_HEADER);

  // Gather Response
  const results = await gatherResponse(response);

  // Filter CCY
  const filtered = processResult(results, symbol, isForward);

  // Return to Caller
  return new Response(JSON.stringify(filtered, null, ''), {
    headers: { 'content-type': 'text/json; charset=utf-8' },
  })
}

async function gatherResponse(response) {
  const { headers } = response;
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return await response.json();
  }
  else {
    return { "error": `System Error` };
  }
}

/**
 * Filter non-currency quote and filter only FX
 * @param {List of Response} results 
 * @param {CCY} symbol 
 * @param {Direction} isForward
 * @returns List of CCY that match the symbol and exclude non CCY (i.e HK33)
 */
function processResult(results, symbol, isForward) {
  let symbols = [];
  if (symbol.length == 6) {
    symbols.push(symbol.substring(0, 3));
    symbols.push(symbol.substring(3, 6));
  }
  else {
    symbols.push(symbol);
    symbols.push("ALL");
  }

  let result = results.filter(obj => {
    let lengthChk = obj.ticker.length == 7;
    let symbolChk = (symbol == "ALL") ||
      (obj.ticker.includes(symbols[0]) &&
        (symbols[1] == "ALL" || obj.ticker.includes(symbols[1])));
    return lengthChk && symbolChk;
  });

  if (symbol == "ALL") return result;

  let response = [];
  for (let i = 0; i < result.length; i++) {
    let obj = result[i];
    if (symbol.length == 3) { // Single Quote CCY
      if (obj.ticker.startsWith(symbol[0])) {
        response.push((isForward) ? obj : transpose(obj));
      }
      else {
        response.push((isForward) ? transpose(obj) : obj);
      }
    } else { // Both Currency are provided by requestor
      let isRealFowrard = obj.ticker.startsWith(symbol[0]);
      response.push((isRealFowrard) ? obj : transpose(obj));
    }
  }
  return response;
}

function getDirection(forward) {
  if (forward == null) return true;
  return String(forward).toLowerCase() == "false";
}

function transpose(obj) {
  let symbol1 = obj.ticker.substring(0, 3);
  let symbol2 = obj.ticker.substring(4, 7);
  let result = {
    ticker: `${symbol2}/${symbol1}`,
    bid: reverse(obj.bid),
    ask: reverse(obj.ask),
    open: reverse(obj.open),
    low: reverse(obj.low),
    high: reverse(obj.high),
    changes: obj.changes * -1,
    date: obj.date
  }
  return result;
}

function reverse(number) {
  return Number.parseFloat(1 / number).toFixed(6);
}

const REQUEST_HEADER = {
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
}