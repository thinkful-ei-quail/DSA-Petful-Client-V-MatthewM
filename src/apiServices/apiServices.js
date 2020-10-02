const config = require('../config/config');

export default class apiServices
{
    
    getPets()
    {
        return new Promise(resolve => {
            fetch(`${config.server_endpoint}pets`,{
            method:"GET",
            headers:{"content-type": "application/json"}
            }).then(data => data.json()).then(jsonData => {
                resolve(jsonData);
            });
        });
    }
    getPeople()
    {
        return new Promise(resolve => {
            fetch(`${config.server_endpoint}people`,{
            method:"GET",
            headers:{"content-type": "application/json"}
            }).then(data => data.json()).then(jsonData => {
                resolve(jsonData);
            });
        });
    }
    Delete(type)
    {
        return new Promise(resolve => {
            fetch(`${config.server_endpoint}pets`,{
            method:"DELETE",
            headers:{
                "content-type": "application/json",
                
            },
            body:JSON.stringify({type:type})
            
            }).then(async(data)=>{
                
                resolve(await data.json());
            })
        });
    }
    addPerson(person)
    {
        console.log(person);
        return new Promise(resolve => {
            fetch(`${config.server_endpoint}people`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                
            },
            body:JSON.stringify({person:person})
            
            }).then(async(data)=>{
                
                resolve(await data.json());
            })
        });
    }
}