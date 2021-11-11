import { Injectable } from '@nestjs/common';
import * as ActiveDirectory from 'activedirectory';

const configAd = {
  url: 'ldap://192.168.131.70',
  baseDN: 'dc=pitesti, dc=kepler, dc=ro',
  username: 'administrator@pitesti.kepler.ro',
  password: 'krinteradmin',
};

const configUser = {
  url: 'ldap://192.168.131.70',
  baseDN: 'dc=pitesti, dc=kepler, dc=ro',
  username: 'user@pitesti.kepler.ro',
  password: '123qaz++',
};

@Injectable()
export class ActiveDirectoryService {
  adAuthentificate = () => {
    console.log('Start AD authentication');

    const { username, password, ...config } = configAd;

    console.log(username, password, config);

    const ad = new ActiveDirectory(config);

    const isAuthenticate = false;
    // Authenticate
    ad.authenticate(username, password, function (err, auth) {
      console.log('STEP 1');
      if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      if (auth) {
        console.log('Authenticated!', auth);
      } else {
        console.log('Authentication failed!');
      }
    });

    console.log('Is Authenticate : ', isAuthenticate);
    return { isAuthenticate };
  };

  adAuthentificateUser = () => {
    console.log('Start AD authentication USER');

    const { username, password, ...config } = configUser;

    console.log(username, password, config);

    const ad = new ActiveDirectory(config);

    // Authenticate
    ad.authenticate(username, password, function (err, auth) {
      if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      if (auth) {
        console.log('Authenticated!');
        console.log(ad);
      } else {
        console.log('Authentication failed!');
      }
    });

    console.log('Start AD authentication', ad);
  };

  findUser = () => {
    // Any of the following username types can be searched on
    const sAMAccountName = 'user';
    const userPrincipalName = 'user@pitesti.kepler.ro';
    const dn = 'CN=user\\, OU=Users,DC=pitesti, DC=kepler,DC=ro';

    try {
      let response = '';
      // Find user by a sAMAccountName
      const ad = new ActiveDirectory(configUser);
      return JSON.stringify(ad);
      ad.findUser(sAMAccountName, function (err, user) {
        if (err) {
          return '--unu--';
          console.log('ERROR: ' + JSON.stringify(err));
          response = JSON.stringify(err);
        }

        if (!user) {
          return '--doi';
          console.log('User: ' + sAMAccountName + ' not found.');
          response = 'User: ' + sAMAccountName + ' not found.';
        } else {
          return '--trei--';
          console.log(JSON.stringify(user));

          response = JSON.stringify(user);
        }

        return response;
      });
    } catch (ex) {
      return ex.message;
    }
  };
}
