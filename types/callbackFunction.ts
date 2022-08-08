function gift2(age: number, sum : (arg: number) => void){
    const memberAge = age +3
    sum(memberAge)
}

gift2(40, (num)=> console.log(num))