var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.harvest = true;
        }
        if(creep.store.getFreeCapacity() == 0){
            creep.memory.harvest = false;
        }
	    if(creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && creep.memory.harvest == true) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[Memory.creeps[creep.name].workloc]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[Memory.creeps[creep.name].workloc], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                    }
            });
            if(targets.length > 0){
                for(let container of targets){
                    if(creep.transfer(container,RESOURCE_ENERGY) != ERR_NOT_IN_RANGE){
                        break;
                    }
                }
            }
        }
        
	}
};

module.exports = roleHarvester;