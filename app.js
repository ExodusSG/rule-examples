var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout),
prefix = 'Node-Rules> ';
 
rl.on('line', function(line) {
switch(line.trim()) {
case '1':
console.log('you typed ', line.trim(), 'to run simple rule example:');
var RuleCode1 = require('./rules/1.SimpleRule.js');
break;
case '2':
console.log('you typed ', line.trim(), 'to run multiple rule example:');
var RuleCode2 = require('./rules/2.MultipleRules.js');
break;
case '3':
console.log('you typed ', line.trim(), 'to run cascading rule example:');
var RuleCode3 = require('./rules/3.CascadingRules.js');
break;
case '4':
console.log('you typed ', line.trim(), 'to run prioritised rule example:');
var RuleCode4 = require('./rules/4.PrioritizedRules.js');
break;
case '5':
console.log('you typed ', line.trim(), 'to run recurssion rule example:');
var RuleCode5 = require('./rules/5.RecurssionWithRules.js');
break;
case '6':
console.log('you typed ', line.trim(), 'to run more rules and fact example:');
var RuleCode6 = require('./rules/6.MoreRulesAndFacts.js');
break;
case 'close':
console.log('Have a great day!');
process.exit(0);	
break;
default:
console.log(prefix + 'Please type a number from 1 to 6 to see node rule examples.');
break;
}
rl.setPrompt(prefix, prefix.length);
rl.prompt();
}).on('close', function() {
console.log('Have a great day!');
console.log('');
process.exit(0);
});
console.log(prefix + 'Please type a number from 1 to 6 to see node rule examples.');
rl.setPrompt(prefix, prefix.length);
rl.prompt(); 