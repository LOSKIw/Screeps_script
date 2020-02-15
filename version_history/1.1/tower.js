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

        var targets = tower.room.find(FIND_STRUCTURE, {
            filter: (structure) => {
                return (structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL);
            }
        });
        if(targets.length > 0){
            tower.repair(targets[0]);
        }
    }
}

module.exports = Tower;