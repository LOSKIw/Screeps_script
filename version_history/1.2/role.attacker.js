var roleAttacker = {
    /**
     * 
     * @param {Creep} creep 
     */
    run: function(creep){
        var targets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE){
            creep.moveTo(targets[0]);
        }
        /*
        if(creep.room.name != 'W3N48'){
            var target = creep.room.findExitTo('W3N48');
            creep.moveTo(creep.pos.findClosestByPath(target));
        }
        else{
            
            var targets = creep.room.find(FIND_HOSTILE_STRUCTURES,{
                filter:(structure) => {
                    return structure.structureType == STRUCTURE_SPAWN;
                }
            });
            
            var targets = creep.room.find(FIND_HOSTILE_CREEPS);
            if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(targets[0]);
            }
            
        }
        */
    }
}

module.exports = roleAttacker;