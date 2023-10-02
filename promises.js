const posts = [
    { id: 1, content: 'Post 1' },
    { id: 2, content: 'Post 2' },
    { id: 3, content: 'Post 3' }
];

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ id: 4, content: 'Post 4' });

            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0){
                const a=posts.pop();
                resolve(a);
            } else {
                reject('Post not found');
            }
        }, 3000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}


Promise.all([
    updateLastUserActivityTime(),
    createPost()
])
.then(([lastActivityTime]) => {
    console.log('User\'s last activity time updated:', lastActivityTime);
    console.log('Post created successfully!',posts);
    return Promise.all([
        lastActivityTime,
        deletePost()
    ]);
})  
.then(([lastActivityTime]) => {
    console.log('Post deleted successfully!');
    console.log('User\'s last activity time updated again:', lastActivityTime);
    console.log('Remaining Posts:', posts);
})
.catch(error => {
    console.error('Error:', error);
});



