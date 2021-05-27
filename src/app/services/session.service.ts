import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionService {
  constructor() {}
  getOrCreateSession() : string {
    // This simulates an authenticated user.
    // We could use Oauth to build a real authentication
    let currentSessionId = localStorage.getItem('session');
    if(!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('session',currentSessionId);
    }
    return currentSessionId as string;
  }
}
