import inquirer from "inquirer";
const answer :{
    numberone: number,
    numbertwo:number,
    operator:string
} = await inquirer.prompt([
    {
        type: "number",
        name:"numberone",
        message:"kindly enter your first no"


    },
    {
        type: "number",
        name:"numbertwo",
        message:"kindly enter your second no"
     


    },
    {
        type: "list",
        name:"operator",
        choices:["*","+","-","/"],
        message:"select operator"


    },

]);
let {numberone, numbertwo, operator}=answer;
if(numberone && numbertwo&&operator)
{
let result:number =0;
if(operator=="+")
{
result=numberone + numbertwo
}else if(operator=="-")
{
    result=numberone - numbertwo 
}
if(operator=="*")
{
    result=numberone * numbertwo
}
if(operator=="/")
{
    result=numberone / numbertwo
}
console.log("your result is :", result)


}
else{
    console.log("kindly enter valid input")
}

