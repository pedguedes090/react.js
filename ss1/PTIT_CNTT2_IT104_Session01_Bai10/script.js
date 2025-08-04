const groupAnagramsReduce = (strs) => {
    return Object.values(
        strs.reduce((acc, str) => {
            const key = [...str].sort().join('');
            acc[key] = acc[key] || [];
            acc[key].push(str);
            
            return acc;
        }, {})
    );
};

console.log(groupAnagramsReduce(["eat", "tea", "tan", "ate", "nat", "bat"]));
