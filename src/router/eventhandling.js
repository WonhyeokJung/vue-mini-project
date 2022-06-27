import EventClick from '../views/event-handling/EventClick';
import EventChange from '../views/event-handling/EventChange'
import EventKey from '../views/event-handling/EventKey'

export default [
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventkey',
    name: 'EventKey',
    component: EventKey
  }
]