const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Gowtham',
      room: 'Home'
    }, {
      id: '2',
      name: 'Chamu',
      room: 'Home'
    }, {
      id: '3',
      name: 'Anjali',
      room: 'School'
    }];
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Susheel',
      room: 'Home'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  it('should not remove a user not in the list', () => {
    var userId = '23';
    var user = users.removeUser(userId);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });
  it('should find a user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });
  it('should not find a user', () => {
    var userId = '55';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });
  it('should return names for Home room', () => {
    var userList = users.getUserList('Home');
    expect(userList).toEqual(['Gowtham', 'Chamu']);
  });
  it('should return names for School room', () => {
    var userList = users.getUserList('School');
    expect(userList).toEqual(['Anjali']);
  });
});
