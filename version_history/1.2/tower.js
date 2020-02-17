var Tower = {
    /**
     * 
     * @param {StructureTower} tower 
     */
    run: function(tower){
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target != null){
            tower.attack(target);
        }
        else{
            var targets = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.hits < structure.hitsMax &&
                         structure.structureType != STRUCTURE_WALL &&
                         structure.structureType != STRUCTURE_RAMPART) ||
                         (structure.hits < 2000 &&
                            structure.structureType == STRUCTURE_RAMPART));
                }
            });
            if(targets.length > 0){
                tower.repair(targets[0]);
            }
        }
    }
}

module.exports = Tower;