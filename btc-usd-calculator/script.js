// Live BTC -> USD calculator using CoinGecko simple/price endpoint
// Endpoint: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
const REFRESH_MS = 30_000; // 30s refresh (keeps calls low; see rate-limit note)

let currentRate = null;

const btcInput = document.getElementById('btc');
const usdOutput = document.getElementById('usd');
const rateEl = document.getElementById('rate');
const lastUpdatedEl = document.getElementById('last-updated');
const errorEl = document.getElementById('error');

function formatUSD(n) {
  return typeof n === 'number'
    ? n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : '-';
}

function recalc() {
  const btc = Number(btcInput.value);
  if (!currentRate || Number.isNaN(btc)) {
    usdOutput.textContent = '-';
    return;
  }
  // precise enough for a simple calculator:
  const usd = btc * currentRate;
  usdOutput.textContent = formatUSD(usd);
}

btcInput.addEventListener('input', recalc);

async function fetchRate() {
  try {
    errorEl.textContent = '';
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.bitcoin || typeof data.bitcoin.usd !== 'number') {
      throw new Error('Unexpected API response');
    }
    // store numeric rate
    currentRate = Number(data.bitcoin.usd);
    rateEl.textContent = formatUSD(currentRate);
    lastUpdatedEl.textContent = `Updated: ${new Date().toLocaleTimeString()}`;
    recalc();
  } catch (err) {
    console.error(err);
    errorEl.textContent = `Could not fetch price: ${err.message}`;
    rateEl.textContent = '-';
  }
}

// initial load + interval
fetchRate();
setInterval(fetchRate, REFRESH_MS);
