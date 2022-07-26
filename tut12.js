console.log('We are listening from tut12 file');
/**
 * Async JS Programming
 * 
 * Callback, promises, async/await
 * 
 */

const datas =[
    {name:'Abhishek', Profession:'software-engineer'},
    {name:'Anuj', Profession: 'software-tester'}
];

function getDatas(){
    console.log('Function started...');

    setTimeout(() => {
        let output = [];
        let indices = [];
        datas.forEach((data, index) => {
            output.push(data.name);
            indices.push(index);

        })
        console.log(output);
        console.log(indices);

    }, 1000);
}

function createData(newdata){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Error Occured!!")
            }
        }, 2000);  
    })
    //Callback Approach:
    // setTimeout(() => {
    //     datas.push(newdata);
    //     console.log(newdata);
    //     callback();

    // }, 2000);
}

createData({name: 'Sai', Profession: 'Civil servant'}).then(getDatas).catch(err => console.log(err));

// getDatas();


