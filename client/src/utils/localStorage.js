export const getAssignedClientIds = () => {
  const assignedClientIds = localStorage.getItem('assigned_clients')
    ? JSON.parse(localStorage.getItem('assigned_clients'))
    : [];

  return assignedClientIds;
};

export const assignClientIds = (clientIdArr) => {
  if (clientIdArr.length) {
    localStorage.setItem('assigned_clients', JSON.stringify(clientIdArr));
  } else {
    localStorage.removeItem('assigned_clients');
  }
};

export const removeClientId = (clientId) => {
  const assignedClientIds = localStorage.getItem('assigned_clients')
    ? JSON.parse(localStorage.getItem('assigned_clients'))
    : null;

  if (!assignedClientIds) {
    return false;
  }

  const updatedAssignedClientIds = assignedClientIds?.filter((assignedClientId) => assignedClientId !== clientId);
  localStorage.setItem('assigned_clients', JSON.stringify(updatedAssignedClientIds));

  return true;
};
