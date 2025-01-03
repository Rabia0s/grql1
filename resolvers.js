const data = require('./data.json'); // JSON verisini içe aktar

const resolvers = {
  Query: {
    users: () => data.users,
    user: (_, { id }) => data.users.find(user => user.id === id),

    events: () => data.events,
    event: (_, { id }) => data.events.find(event => event.id === id),

    locations: () => data.locations,
    location: (_, { id }) => data.locations.find(location => location.id === id),

    participants: () => data.participants,
    participant: (_, { id }) => data.participants.find(participant => participant.id === id),
  },

  User: {
    events: (user) => data.events.filter(event => event.userId === user.id),
  },

  Event: {
    user: (event) => data.users.find(user => user.id === event.userId),
    location: (event) => data.locations.find(location => location.id === event.locationId),
    participants: (event) => data.participants.filter(participant => participant.eventId === event.id),
  },

  Location: {
    events: (location) => data.events.filter(event => event.locationId === location.id),
  },

  Participant: {
    event: (participant) => data.events.find(event => event.id === participant.eventId),
  }
};

module.exports = resolvers;
