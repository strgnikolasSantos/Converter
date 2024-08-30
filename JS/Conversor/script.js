let dolar = 5.1;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    usdInput.value = formatCurrency(usdInput.value);
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    brlInput.value = formatCurrency(brlInput.value);
    convert("brl-to-usd");
});

usdInput.value = "1000,00";
convert("usd-to-brl");

function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(/\./g, "").replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type === "usd-to-brl") {
        let usdValue = fixValue(usdInput.value);
        let brlValue = usdValue * dolar;
        brlInput.value = formatCurrency(brlValue.toString());
    }

    if (type === "brl-to-usd") {
        let brlValue = fixValue(brlInput.value);
        let usdValue = brlValue / dolar;
        usdInput.value = formatCurrency(usdValue.toString());
    }
}
