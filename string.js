const count_duplicate_characters = function(str) {

    var result = {}

    var arr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
    console.log(arr,'arr')

    if (arr !== null) {
        arr.forEach(element => {
            result[element[0]] = element.length
        });
    }

    return result

}





const str = 'adsjfdsfsfjsdjfhacabcsbajdaz'
console.log(count_duplicate_characters(str))