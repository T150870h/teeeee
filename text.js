console.log('BÀI 1')
let a = 1;
let b = 3;
let c = 2;
let denta = b**2 - 4*a*c 
if (a == 0 && b == 0) {
       console.log('Phương trình vô nghiệm');
} else if (a === 0 ) {
       console.log(`Có một nghiệm là: ${-c/b}`);
} else if ( denta < 0 ) {
       console.log(`Phương trình vô nghiệm`);

} else if ( denta > 0 ) {
      console.log(`Phương trình có hai nghiệm: x1 là ${(-b + Math.sqrt(denta))/2*a} và x2 là ${(-b - Math.sqrt(denta)) / 2*a}`)
}

console.log('BÀI 2')
    let number = 6;
    let count = 1;
    for (let index = 0; index < 10; index++) {
         console.log(`6 * ${count} = ${number * count}`)   
        count++;
    }

    console.log('BÀI 3')
let array = [];
let arr = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9];
        for (let j = 0; j < arr.length; j++) {
              if ( arr[j] !== arr[j + 1] ) {
                 array.push(arr[j]);
              }  
        }
console.log(array);
console.log('Bài 4');
    let manage = {
      manage1:{
           name: 'hưng',
           age: 20,
           wage: 2000,
           position: 'giáo viên '
      },
       manage2: {
              name: 'hà',
              age: 20,
              wage: 2000,
              position: 'nhân viên',

       },
       manage3: {
           name: 'hảo',
           age: 20,
           wage: 2000,
           position: 'nhân viên',
       },


    }
     //READ
         console.log(manage);
       // UPDATE ;
       manage.manage2.age = 40;
          manage.manage1.age = 30;
          manage.manage3.age = 20;
       const person  = [];
       for (let j = 0; j < 3; j++) {
           person.push ({
               name: prompt('nhập tên' + j),
               age: prompt('nhập tuổi' + j),
               address: prompt('nhập địa chỉ ' + j)
           }) 
           
       }console.log(person);
       for (let i = 0; i < person.length -1; i++) {
             for (let j = i + 1; j < person.length; j++) {
                 if (person[i].age < person[j].age) {
                      let temp = person[i];
                      person[i] = person[j];
                      person[j] = temp;
                 }
             }
       }
            CREATE
          manage.manage2.age = 40;
          manage.manage1.age = 30;
          manage.manage3.age = 20;
      
      DELETE
          delete manage.address;
                let mang_moi = [];
             let delete1 = parseInt(prompt("nhập thông tin muốn xoá"));
                  for (let andex = 0; andex < manage.manage1; andex++) {
                          
                         
                  }       



        //   console.log('BÀI 5');
 





