const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

// MAP

animals.map((animal, index, animals) => {
    return animal.name
});

// or

animals.map(a => a.name);

// FILTER

animals.filter((animal) => {
    return animal.size === "small"
});

// or

animals.filter(a => a.size);

// REDUCE

animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight
}, 0);

// or

animals.reduce((a,b) => a += b.weight , 0);
