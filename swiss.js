// swiss.js - simple Swiss pairings library
// MIT License
(function(global){
  function sortPlayers(players){
    return players.slice().sort(function(a,b){
      if(b.points!==a.points) return b.points - a.points;
      if(b.omwp!==a.omwp) return b.omwp - a.omwp;
      if(b.mwp!==a.mwp) return b.mwp - a.mwp;
      return a.name.localeCompare(b.name);
    });
  }

  function pair(players, history){
    const sorted = sortPlayers(players);
    const used = Array(sorted.length).fill(false);
    const result = [];

    function backtrack(idx){
      if(idx >= sorted.length) return true;
      if(used[idx]) return backtrack(idx+1);
      used[idx] = true;
      for(let j=idx+1;j<sorted.length;j++){
        if(used[j]) continue;
        const p1 = sorted[idx].name;
        const p2 = sorted[j].name;
        const k1 = p1+'|'+p2;
        const k2 = p2+'|'+p1;
        if(!history.has(k1) && !history.has(k2)){
          used[j] = true;
          result.push({p1, p2});
          history.add(k1); history.add(k2);
          if(backtrack(idx+1)) return true;
          history.delete(k1); history.delete(k2);
          result.pop();
          used[j] = false;
        }
      }
      if((sorted.length - idx) % 2 === 1){
        const p1 = sorted[idx].name;
        const k = p1+'|BYE';
        result.push({p1, p2:'BYE'});
        history.add(k);
        if(backtrack(idx+1)) return true;
        history.delete(k);
        result.pop();
      }
      used[idx] = false;
      return false;
    }

    if(!backtrack(0)){
      const remaining = sorted.filter((_,i)=>!used[i]);
      for(let i=0;i<remaining.length;i+=2){
        const p1 = remaining[i];
        const p2 = remaining[i+1] || {name:'BYE'};
        result.push({p1:p1.name, p2:p2.name});
      }
    }
    return result;
  }

  global.Swiss = { pair };
})(typeof window !== 'undefined' ? window : global);
