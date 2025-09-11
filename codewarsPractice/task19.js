"use strict;" 
//Who's Online?
const whosOnline = (friends) => {
  const result = { online: [], offline: [], away: [] };

  friends.forEach(friend => {
    const { username, status, lastActivity } = friend;

    if (status === 'offline') {
      result.offline.push(username);
    } else if (status === 'online') {
      if (lastActivity > 10) {
        result.away.push(username);
      } else {
        result.online.push(username);
      }
    }
  });

  Object.keys(result).forEach(key => {
    if (result[key].length === 0) delete result[key];
  });

  return result;
}