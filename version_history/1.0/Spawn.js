var SpawnFunction = {

    run: function(target,workLoc){
        var spawn = target;

        var roleList = ['harvester','upgrader','builder','repairer'];
        for(let roles in roleList){
            if(workLoc[0] < 3){
                Loc = 0;
            }
            else{
                Loc = 1;
            }

            let creep_target = _.filter(Game.creeps, (creep) => creep.memory.role == roleList[roles]);
            if( Game.spawns['Spawn1'].room.energyAvailable >= 1200){
                let newName = roleList[roles] + Game.time;
                if(roleList[roles] == 'repairer' && creep_target.length < 2){
                    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
                        {memory: {role: roleList[roles]}});
                }
                else if(creep_target.length < 2){
                    console.log('Spawning new ' + roleList[roles] + ': ' + newName);
                    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
                        {memory: {role: roleList[roles] ,workloc: Loc}});
                    workLoc[Loc] = workLoc[Loc]+1;
                    break;
                }
            }
        }
        
        if(Game.spawns['Spawn1'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
        return workLoc;
    }
}

module.exports = SpawnFunction;