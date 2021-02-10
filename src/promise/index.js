// from now on we work with enmaScript 6
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Hey! we did it");
        } else {
            reject ("Whooops! something went wrong");
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappenTwo = () => {
    return new Promise((resolve, rejrect) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error("Whooops! something went wrong")
            reject(error);
        }
    })
}

somethingWillHappenTwo()
    .then(response => console.log(response)) //could be more than one "then"
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err)
    });