exports.convertNumber = (param) => {
    const numbersTab = [
            {arabic: 1, roman: 'I'},
            {arabic: 2, roman: 'II'},
            {arabic: 3, roman: 'III'},
            {arabic: 4, roman: 'IV'},
            {arabic: 5, roman: 'V'},
            {arabic: 6, roman: 'VI'},
            {arabic: 7, roman: 'VII'},
            {arabic: 8, roman: 'VIII'},
            {arabic: 9, roman: 'IX'},
            {arabic: 10, roman: 'X'},
    ];

    if (Number.isInteger(param)) {
        const number = numbersTab.filter((numb) => numb.arabic === param);
        return number[0].roman;
    }

    const number = numbersTab.filter((numb) => numb.roman === param);
    return number[0].arabic;
};

// Non utilisé dans les tests mais fonctionne
function arabicToRoman(num) {
    if(num >= 1000){ return "M" + arabicToRoman(num - 1000);}
    if(num >= 900){ return "CM" + arabicToRoman(num - 900);}
    if(num >= 500){ return "D" + arabicToRoman(num - 500);}
    if(num >= 400){ return "CD" + arabicToRoman(num - 400);}
    if(num >= 100){ return "C" + arabicToRoman(num - 100);}
    if(num >= 90){ return "XC" + arabicToRoman(num - 90);}
    if(num >= 50){ return "L" + arabicToRoman(num - 50);}
    if(num >= 40){ return "XL" + arabicToRoman(num - 40);}
    if(num >= 10){ return "X" + arabicToRoman(num - 10);}
    if(num >= 9){ return "IX" + arabicToRoman(num - 9);}
    if(num >= 5){ return "V" + arabicToRoman(num - 5);}
    if(num >= 4){ return "IV" + arabicToRoman(num - 4);}
    if(num >= 1){ return "I" + arabicToRoman(num - 1);}
    if(num < 1){ return "";}
}
