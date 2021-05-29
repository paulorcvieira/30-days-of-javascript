// Desafio - Dia 28: Rever o básico de String API
const log = (value) => console.log(value);

log("JavaScript".length); // 10
log("JavaScript".indexOf("S")); // 4
log("JavaScript".lastIndexOf("a")); // 3
log("JavaScript".toUpperCase()); // JAVASCRIPT
log("JavaScript".toLowerCase()); // javascript
log("JavaScript".startsWith("t")); // false
log("JavaScript".endsWith("ript")); // true
log("JavaScript".charAt(4)); // S
log("JavaScript".charCodeAt(4)); // 83
log(String.fromCharCode(83)); // S
log("JavaScript".includes("S")); // true
log("JavaScript".includes("s")); // false
log("JavaScript".localeCompare("Java")); // 1
log("Ok".localeCompare("Java")); // 1
log("JavaScript".localeCompare("script")); // -1
log("JavaScript".localeCompare("JavaScript")); // 0
log("a".charCodeAt(0)); // 97
log("á".charCodeAt(0)); // 225
log("a".localeCompare("b")); // -1
log("á".localeCompare("b")); // -1
log("A".charCodeAt(0)); // 65
log("Á".charCodeAt(0)); // 193
log("A".localeCompare("b")); // -1
log("Á".localeCompare("b")); // -1
log("JavaScript".match(/(Script)/));
// ['Script', 'Script', index: 4, input: 'JavaScript', groups: undefined]
log("JavaScript".search(/(Script)/));
log("Java S c r i p t".replace(/(a|i|\s)/gi, "-")); // J-v--S-c-r---p-t
log("JavaScript".slice(0, 4)); // Java
log("JavaScript".slice(0, -6)); // Java
log("JavaScript".slice(-6)); // Script
log("JavaScript".substring(0, 4)); // Java
log("JavaScript".substring(4, 0)); // Java
log("JavaScript".substring(4)); // Script
log("J|a|v|a|S|c|r|i|p|t".split("|"));
// ['J','a','v','a','S','c','r','i','p','t']
log("Java".concat("Script")); // JavaScript
log("2".padStart(2, 0)); // 02
log("Script".padStart(8, "Java")); // JaScript
log("Java".padEnd(10, "Script")); // JavaScript
log("Ja".repeat(2)); // JaJa
log(" JavaScript ".trim()); // JavaScript
log("JavaScript ".trimRight()); // JavaScript
log(" JavaScript".trimLeft()); // JavaScript