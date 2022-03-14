const people = require("./people");
const work = require("./work");

async function main(){
    // try{
    //     const peopledata = await people.getPersonById('k');                           //getPersonById
    //     console.log(peopledata)
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const howManyPerStatedata = await people.howManyPerState(1);                           //getPersonById
    //     console.log (howManyPerStatedata)
    // }catch(e){
    //     console.log (e);
    // }
    //  try{
    //     const personByAgedata = await people.personByAge ();                           //getPersonById
    //     console.log (personByAgedata)
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const peopleMetricsdata = await people.peopleMetrics();                           //getPersonById
    //     console.log (peopleMetricsdata)
    // }catch(e){
    //     console.log (e);
    // }
    try{
        const whereDoTheyWorkdata = await work.whereDoTheyWork ('531-32-0882');                         //getPersonById
        console.log (whereDoTheyWorkdata)
    }catch(e){
        console.log (e);
    }
    // try{
    //     const fouroneonedata = await work.fourOneOne ('21208-8374');                           //getPersonById
    //     console.log (fouroneonedata)
    // }catch(e){
    //     console.log (e);
    // }
    // try{
    //     const listEmployeesdata = await work.listEmployees ();                           //getPersonById
    //     for(let i=0 ; i< listEmployeesdata.length; i++){
    //             console.log(listEmployeesdata[i])
    //     }
    // }catch(e){
    //     console.log (e);
    // }
}
main ()