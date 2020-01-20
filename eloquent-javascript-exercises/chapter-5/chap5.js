// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
function flattenning(array) {
    return array.reduce((a, b) => a.concat(...b));
}

// Your own loop
// Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.
function loop(n, test, update, action) {
    if (test(n)) {
        action(n);
        n = update(n);
        return loop(n, test, update, action);
    }
    return;
}
// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}
function dominantDirection(text) {
    let scripts = [];
    for (let character of text) {
        if (characterScript(character.charCodeAt(0))) {
            scripts.push(characterScript(character.charCodeAt(0)));
        }

    }
    scripts = countBy(scripts, script => script.direction);
    if (scripts.length == 1) {
        return scripts[0].name;
    }
    let scriptsCount = scripts.map(script => script.count);
    return scripts[scriptsCount.indexOf(Math.max(...scriptsCount))].name;
}
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {

        let name = groupName(item);

        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });

        } else {
            counts[known].count++;
        }
    }
    return counts;
}
