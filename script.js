let outputNumber = [];
let basesConverter = [2, 8, 10, 16];
let digits;
let inputBase;
let outputBases = [];
let convertedNumber = [];
let results = document.getElementById("results");
let x = 0;

function receiveNumber() {
    //Esta função recebe o número 
    let inputNumberElement = document.getElementById("inputNumber");
    let inputNumber = inputNumberElement.value.toString();
    digits = inputNumber.split('');

    if (innerWidth > 1480) {
        if (digits.length >= 9 && digits.length < 11) {
            inputNumberElement.style.fontSize = 6 - (digits.length - 9) + 'vw';
        }
    }
    inputBase = document.getElementById("base");
    if (inputBase.value != "" && inputNumber != "") {

        if (inputBase.value != 10) {
            inputNumber = toDecimal(digits, inputBase.value);
        }
        convertToBase(inputNumber);
        printResults();
    }
}

function convertToBase(num) {
    //Esta função converte o número recebido para a respetiva base
    convertedNumber = [];
    outputBases = [];
    for (var base of basesConverter) {
        if (base != inputBase.value) {
            switch (base) {
                case 2:
                    outputBases.push('(2)');
                    break;
                case 8:
                    outputBases.push('(8)');
                    break;
                case 10:
                    outputBases.push('(10)');
                    break;
                case 16:
                    outputBases.push('(16)');
                    break;
                default:
                    outputBases.push(`${base}`);
                    break;
            }
            convertedNumber.push(fromDecimal(num, base));
        }
    }
}

function printResults() {

    results.innerHTML = '';

    let i = 0;
    var t = 1;
    for (converted of convertedNumber) {
        let baseIndication = document.createElement('div');
        baseIndication.setAttribute('id', 'content-areas');

        let inputArea = document.getElementById('input-area');
        inputArea.classList.add('showed-results');
        inputArea.style.height = '40vh';

        inputArea.style.alignContent = 'flex-end';


        converted = converted.reverse().join('');
        switch (outputBases[i]) {
            case '(2)':

                baseIndication.innerHTML = `<p class="base-indicator">Base <strong>Binária</strong> </p>
                                            <div class="divider" id="div-bin"></div>
                                            <input class="converted-number" id="bin" value="${converted}"> 
                                            </button>`;
        
                results.appendChild(baseIndication);
               
                break;
            case '(8)':
                baseIndication.innerHTML = `<p class="base-indicator">Base <strong>Octal</strong> </p>
                                            <div class="divider" id="div-oct"></div>
                                            <input class="converted-number" id="oct" value="${converted}">
                                            </button>`;
                results.appendChild(baseIndication);
                break;
            case '(10)':
                baseIndication.innerHTML =`<p class="base-indicator">Base <strong>Decimal</strong> </p>
                                            <div class="divider" id="div-dec"></div>
                                            <input class="converted-number" id="dec" value="${converted}">
                                            </button>`;
                results.appendChild(baseIndication);
                break;
            case '(16)':
                baseIndication.innerHTML = `<p class="base-indicator">Base <strong>Hexadecimal</strong> </p>
                                            <div class="divider" id="div-hex"></div>
                                            <input class="converted-number" id="hex" value="${converted}">
                                            </button>`;
                results.appendChild(baseIndication);
                break;
            default:
                baseIndication.innerHTML = `<p class="base-indicator"><strong>(${outputBases[i]})</strong> base</p>
                                            <div class="divider" id="div-new${t}"></div> 
                                            <input class="converted-number" id="new${t}" value="${converted}">
                                            </button>`;
                ++t;
                results.appendChild(baseIndication);
                break;

        }


        if (converted.length >= 7 && innerWidth < 2700) {

            console.log(baseIndication.style.width);

            outputWidth = (320 + (converted.length - 7) * 30);

            baseIndication.style.width = outputWidth + "pt";

        }
        let wideQuotient = ((converted.length / window.innerWidth).toFixed(5)) * 100;

        if (wideQuotient > 1.4 && innerWidth < 2700) {

            var overflowIndicator;

            switch (outputBases[i]) {
                case '(2)':
                    overflowIndicator = document.getElementById('div-bin');
                    break;
                case '(8)':
                    overflowIndicator = document.getElementById('div-oct');
                    break;
                case '(10)':
                    overflowIndicator = document.getElementById('div-dec');
                    break;
                case '(16)':
                    overflowIndicator = document.getElementById('div-hex');
                    break;
                default:
                    overflowIndicator = document.getElementById(`div-new${--t}`);

                    break;
            }

            overflowIndicator.style.display = 'flex';
        }
        ++i;
    }
}

function toDecimal(digits, base) {

    digits.reverse();
    let i = 0;
    let numDecimal = 0;
    if (base > 10) {
        
        digits.forEach(replaceChar)
    }
    for (digit of digits) {
        numDecimal = numDecimal + digit * Math.pow(base, i);
        i++;
    }
    return numDecimal;
}
function fromDecimal(num, base) {

    
    outputNumber = [];

    if (num < base) {
        outputNumber.push(num);
        outputNumber.forEach(replaceNum);
    }
    while (num >= base) {
        outputNumber.push(num % base);
        num = Math.floor(num / base);
        if (num < base) {
            outputNumber.push(num);
        }
    }
    if (base > 10) {
        outputNumber.forEach(replaceNum);
    }
    return outputNumber;
}
function replaceChar(digit) {

    let modChar = digit.toUpperCase();
    switch (modChar) {
        case "A":
            digits.splice(digits.indexOf(digit), 1, 10);
            break;
        case 'B':
            digits.splice(digits.indexOf(digit), 1, 11);
            break;
        case "C":
            digits.splice(digits.indexOf(digit), 1, 12);
            break;
        case 'D':
            digits.splice(digits.indexOf(digit), 1, 13);
            break;
        case "E":
            digits.splice(digits.indexOf(digit), 1, 14);
            break;
        case 'F':
            digits.splice(digits.indexOf(digit), 1, 15);
            break;
    }
}

function replaceNum(digit) {

    let modNum = Number(digit);
    switch (modNum) {
        case 10:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'A');
            break;
        case 11:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'B');
            break;
        case 12:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'C');
            break;
        case 13:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'D');
            break;
        case 14:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'E');
            break;
        case 15:
            outputNumber.splice(outputNumber.indexOf(digit), 1, 'F');
            break;
    }
}







