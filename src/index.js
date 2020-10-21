function ReadNumber(n, leftDigits, thousands)
{
    var ones = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    var teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    var tens = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
    var thousandsGroups = [ "", " thousand", " million", " billion" ]

    if (n == 0)
    {
        return leftDigits;
    }

    readInt = leftDigits;

    if (readInt.length > 0)
    {
        readInt += " ";
    }
    
    if (n < 10)
    {
        readInt += ones[n];
    }
    else if (n < 20)
    {
        readInt += teens[n - 10];
    }
    else if (n < 100)
    {
        readInt += ReadNumber(n % 10, tens[parseInt(n / 10) - 2], 0);
    }
    else if (n < 1000)
    {
        readInt += ReadNumber(n % 100, (ones[parseInt(n / 100)] + " hundred"), 0);
    }
    else
    {
        readInt += ReadNumber(n % 1000, ReadNumber(parseInt(n / 1000), "", thousands+1), 0);
        if (n % 1000 == 0)
        {
            return readInt;
        }
    }
    return readInt + thousandsGroups[thousands];
}


module.exports = function toReadable (number) {
    if (number == 0) {
        return "zero";
    }

    return ReadNumber(number, "", 0);
}

