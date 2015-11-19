/**
* Create a mapped object by any identifier
* example: 
* var a = [{id:1, name:'a'},{id:2, name:'b'},{id:3, name:'c'}];
* a.mapBy('id') 
* output: [
*     {1:{id:1,name:'a'}},
*     {2:{id:2,name:'b'}},
*     {3:{id:3,name:'c'}}
* ]
* a.mapBy('id', true) 
* output: [
*     {1:{name:'a'}},
*     {2:{name:'b'}},
*     {3:{name:'c'}}
* ]
 */

Array.prototype.mapBy = function (id, excludeId) {
    var b = a.reduce(function(map, obj){
        map[obj[id]] = obj;
        if(excludeId){
            delete(map[obj[id]].id);
        };
        return map;
    },{});
    return b;
};