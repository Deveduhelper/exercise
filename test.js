function initExercise() {
    // push();
    // pop();
    findPossitive();
    // FindMean();
    // FindMedian()
    // FindMode();
    // acronym();
    // countOccurrences();
    // averageScore();


}



function push() {
    let arr = [1, 2, 3];
    console.log("Original Array:", arr);

    arr.push(4);
    console.log("After push(4):", arr);

    arr.push(5, 6);
    console.log("After push(5, 6):", arr);

}



function pop() {
    let Name = ["aftab", "kislay", "shubham", "arif"];
    console.log("Before pop:", Name);

    let removedName = Name.pop();
    console.log("Removed Name:", removedName);
    console.log("After pop:", Name);

}



function findPossitive() {

    // <<<<<<<<<<<<<<<<<< using forEach >>>>>>>>>>>>>>>>>

    // const arr = [5, -1, 1, 2, 8, -3];
    // let sum = 0;
    // const positiveNumbers = [];

    // arr.forEach(function (num) {
    //     if (num > 0) {
    //         sum += num;
    //         positiveNumbers.push(num);
    //     }
    // });

    // console.log("Array of positive numbers:", positiveNumbers.join("+"));
    // console.log("Sum of positive numbers:", sum);

    // <<<<<<<<<<<<<<<<<<<<<< using reduce and push >>>>>>>>>>>>>>>>>

    const arr = [5, -1, 1, 2, 8, -3];
    const positiveNumbers = arr.reduce((total, value) => {
        if (value > 0) {
            return total + value
        }
        return total;
        
    }, 0);
    
    console.log("Sum of positive numbers:", positiveNumbers);

}




function FindMean() {

    // <<<<<<<<<<<<<<<<<<<<<<<using forEach >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // const studentmarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    // const mean = function (marks) {
    //     let sum = 0;
    //     marks.forEach(function (mark) {
    //         sum = sum + mark;
    //     });
    //     return sum / marks.length;
    // };
    // console.log("Mean value:", mean(studentmarks));

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<< using reduce >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const studentMarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    const mean = marks => {
        const sum = marks.reduce((index, val) => index + val, 0);
        return sum / marks.length;
    };

    console.log("Mean value:", mean(studentMarks));

}




function FindMedian() {

    const studentmarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    let median;
    const length = studentmarks.length;
    studentmarks.sort(function (a, b) {
        return a - b;
    });
    if (length % 2 === 0) {
        median = (studentmarks[length / 2 - 1] + studentmarks[length / 2]) / 2;
    } else {
        median = studentmarks[Math.floor(length / 2)];
    }
    console.log("Sorted array:", studentmarks);
    console.log("Median:", median);
}





function FindMode() {

    // <<<<<<<<<<<<<<<<<<<<<<<<<<using forEach>>>>>>>>>>>>>>>>>>>>

    // const studentmarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    // const countMap = [];
    // let maxCount = 0;
    // let mode;
    // studentmarks.forEach(function (mark) {
    //     if (countMap[mark]) {
    //         countMap[mark]++;
    //     } else {
    //         countMap[mark] = 1;
    //     }
    //     if (countMap[mark] > maxCount) {
    //         maxCount = countMap[mark];
    //         mode = mark;
    //     }
    // });
    // console.log("Mode:", mode);

    //  <<<<<<<<<<<<<<<<<<<<<<<<<< using reduce >>>>>>>>>>>>>>>>>>>>>>>>>

    const studentMarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    let maxCount = 0;
    let modeValue;
    const mode = marks => {
        const countMap = marks.reduce((index, val) => {
            index[val] = (index[val] || 0) + 1;
            return index;
        }, {});

        for (const mark in countMap) {
            if (countMap[mark] > maxCount) {
                maxCount = countMap[mark];
                modeValue = mark;
            }
        }

        return modeValue;
    };

    console.log("Mode:", mode(studentMarks));

}





function acronym() {
    const str = "Go Academy Get Set Go";
    let acronym = "";
    const words = str.split(" ");
    words.forEach(function (word) {
        acronym = acronym + word[0];
    });
    console.log("Data:", str);
    console.log("Acronym:", acronym)

}





function countOccurrences() {
    const arr = [
        ["bob", "rat", "dog"],
        ["bab", "mat", "dog"],
        ["beb", "cat", "gog"],
        ["bob", "cat", "pog"],
        ["obb", "tat", "gog"],
    ];

    // <<<<<<<<<<<< using forEach >>>>>>>>>>>>>>>>>>

    // const flatArr = arr.flat();
    // const wordCounts = [];
    // flatArr.forEach(word => {
    //     if (wordCounts[word]) {
    //         wordCounts[word]++;
    //     } else {
    //         wordCounts[word] = 1;
    //     }
    // });
    // console.log("occurance:", wordCounts)
    // <<<<<<<<<<<<<<<<<<using reduce >>>>>>>>>>>>>>>>>>>>>>>>>

    const flatArr = arr.flat();
    const wordCounts = flatArr.reduce((index, word) => {
        index[word] = (index[word] || 0) + 1;
        return index;
    }, {});

    console.log("Occurrence:", wordCounts);

}




function averageScore() {
    const students = [
        { name: "Bob", scores: [100, 100, 100] },
        { name: "Boo", scores: [90, 85, 77] },
        { name: "Bae", scores: [99, 92, 77] },
        { name: "Tae", scores: [77, 65, 44] },
        { name: "Tou", scores: [35, 36, 37] },
    ];
    
    const aboveStudents = students.reduce((data, student) => {
        const average = student.scores.reduce((index, score) => index + score, 0) / student.scores.length;
        if (average > 85) {
            data.push({ name: student.name, average });
        }
        return data;
    }, []);
    
    console.log("Average student score:", aboveStudents);
    
}




